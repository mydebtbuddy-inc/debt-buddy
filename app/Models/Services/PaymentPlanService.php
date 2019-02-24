<?php 

namespace App\Models\Services;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\Entities\Eloquent\User;
use App\Models\Entities\Eloquent\Debt;
use App\Models\Entities\Eloquent\Lender;
use App\Models\Entities\Eloquent\DebtHistory;
use App\Models\Entities\Eloquent\InterestRate;

class PaymentPlanService
{
	/**
	 * Creates new debt along with associated interest rate and lender
	 *
	 * @param  int    $userID
	 * @param  float  $debtCelerator
	 */
	public function generatePaymentPlan($userID, $debtCelerator)
	{
		$plan = array(
			'individual' => array(
				'total_interest_paid' => 0.0
			),
			'combined' => array(
				'total_interest_paid' => 0.0,
				'debtcelerator' => $debtCelerator
			)
		);

		$allBillings = array();

		$debts = Debt::where('user_id', $userID)->with([
				'interestRates' => function ($query) {
					$query->latest('from');
					//$query->limit(1);
				}
			])
			->where('status', '!=', 'Removed')
			->get()
			->sortBy('current_balance');

		$plan['combined']['total_debts'] = $debts->count();
		$plan['combined']['total_current_debt_balance'] = $debts->sum('current_balance');
		$plan['combined']['total_initial_debt_balance'] = $debts->sum('initial_balance');

		$debtCeleratorStartDate = Carbon::createFromDate(1900, 1, 1);

		foreach($debts as $index => $debt) {
			switch($debt->type) {
				case 'Mortgage':
					$billings = $this->calculateMortgageSchedule($debt, $debtCelerator, $debtCeleratorStartDate);
					break;
				default:
					$billings = $this->calculateSchedule($debt, $debtCelerator, $debtCeleratorStartDate);
					break;
			}

			$allBillings = array_merge($allBillings, $billings);

			$plan['individual'][$debt->id] = [
				'start_date' => $billings[0]['payment_date_formatted'],
				'finish_date' => array_values(array_slice($billings, -1))[0]['payment_date_formatted'],
				'total_interest_paid' => 0.0,
				'billing_dates' => $billings
			];

			$plan['individual'][$debt->id]['total_interest_paid'] = array_values(array_slice($billings, -1))[0]['accrued_interest'];
			$plan['combined']['total_interest_paid'] += array_values(array_slice($billings, -1))[0]['accrued_interest'];
		}

		usort($allBillings, function ($billing1, $billing2) {
			return $billing1['payment_date'] <=> $billing2['payment_date'];
		});

		$plan['combined']['start_date'] = $allBillings[0]['payment_date_formatted'];
		$plan['combined']['finish_date'] = array_values(array_slice($allBillings, -1))[0]['payment_date_formatted'];
		$plan['combined']['billing_dates'] = $allBillings;

  	return $plan;
	}
	

	/**
	 * Creates new debt along with associated interest rate and lender
	 *
	 * @param  int    $userID
	 * @param  float  $debtCelerator
	 */
  public function generateNoPaymentPlan($userID)
  {
		$plan = array(
			'individual' => array(
				'total_interest_paid' => 0.0
			),
			'combined' => array(
				'total_interest_paid' => 0.0
			)
		);

		$debts = Debt::where('user_id', $userID)->with([
				'interestRates' => function ($query) {
					$query->latest('from');
					//$query->limit(1);
				}
			])
			->where('status', '!=', 'Removed')
			->get()
			->sortBy('current_balance');

		$allBillings = array();

		foreach($debts as $index => $debt) {
			switch($debt->type) {
				case 'Mortgage':
					$billings = $this->calculateMortgageSchedule($debt);
					break;
				default:
					$billings = $this->calculateSchedule($debt);
					break;
			}

			$allBillings = array_merge($allBillings, $billings);

			$plan['individual'][$debt->id] = [
				'start_date' => $billings[0]['payment_date_formatted'],
				'finish_date' => array_values(array_slice($billings, -1))[0]['payment_date_formatted'],
				'total_interest_paid' => 0.0,
				'billing_dates' => $billings
			];

			$plan['individual'][$debt->id]['total_interest_paid'] = array_values(array_slice($billings, -1))[0]['accrued_interest'];
			$plan['combined']['total_interest_paid'] += array_values(array_slice($billings, -1))[0]['accrued_interest'];
		}

		usort($allBillings, function ($billing1, $billing2) {
			return $billing1['payment_date'] <=> $billing2['payment_date'];
		});

		$plan['combined']['start_date'] = $allBillings[0]['payment_date_formatted'];
		$plan['combined']['finish_date'] = array_values(array_slice($allBillings, -1))[0]['payment_date_formatted'];
		$plan['combined']['billing_dates'] = $allBillings;

    return $plan;
	}
	
	private function calculateMortgageSchedule($debt, &$debtCelerator = NULL, &$debtCeleratorDate = NULL) 
	{
		$billings = array();

		$balance = $debt->current_balance;
		$accrued_interest = 0.0;
			
		list($year, $month, $day) = explode('-', $debt->start_date);
		$billDate = Carbon::createFromDate($year, $month, $day);
		
		while ($balance > 0) {
			$applyDebtCelerator = $debtCeleratorDate && $debtCeleratorDate ?
				$billDate->greaterThanOrEqualTo($debtCeleratorDate):
				false;

			$billing = [
				'payment_date' => $billDate->toDateString(),
				'payment_date_formatted' => $billDate->format('m/d/Y'),
				'debt_name' => $debt->name,
				'start_balance' => $balance,
				'min_payment' => $debt->minimum_payment,
				'debtcelerator' => is_null($debtCelerator) ? NULL : ($applyDebtCelerator ? $debtCelerator : 0.0),
				'interest_paid' => ($debt->interestRates[0]->rate / 12) * $balance
			];
			
			$balance -= $billing['min_payment'] + ($applyDebtCelerator ? $debtCelerator : 0.0);
			
			$billing['end_balance'] = $balance < 0 ? 0.0 : $balance;
			$accrued_interest += $billing['interest_paid'];
			$billing['accrued_interest'] = $accrued_interest;
			$billing['total_payment'] = $billing['start_balance'] - $billing['end_balance'];
			$billing['principal_paid'] = $billing['total_payment'] - $billing['interest_paid'];

			$billings[] = $billing;

			$billDate = $this->nextBillingDate($billDate->toDateString(), 'M1M');
		}

		if ($debtCelerator && $debtCeleratorDate) {
			list($year, $month, $day) = explode('-', $billDate->toDateString());
			$debtCeleratorDate = Carbon::createFromDate($year, $month, $day);

			$debtCelerator += $debt->minimum_payment;
		}

		return $billings;
	}

	private function calculateSchedule($debt, &$debtCelerator = NULL, &$debtCeleratorDate = NULL) 
	{
		$billings = array();

		$balance = $debt->current_balance;
		$accrued_interest = 0.0;
			
		list($year, $month, $day) = explode('-', $debt->start_date);
		$billDate = Carbon::createFromDate($year, $month, $day);
		
		while ($balance > 0) {
			$applyDebtCelerator = $debtCeleratorDate && $debtCeleratorDate ?
				$billDate->greaterThanOrEqualTo($debtCeleratorDate):
				false;

			$billing = [
				'payment_date' => $billDate->toDateString(),
				'payment_date_formatted' => $billDate->format('m/d/Y'),
				'debt_name' => $debt->name,
				'start_balance' => $balance,
				'min_payment' => $debt->minimum_payment,
				'debtcelerator' => is_null($debtCelerator) ? NULL : ($applyDebtCelerator ? $debtCelerator : 0.0)
			];
			
			$balance -= $billing['min_payment'] + ($applyDebtCelerator ? $debtCelerator : 0.0);
			$accrued_interest += ($debt->interestRates[0]->rate / 12) * $balance;
			$billing['accrued_interest'] = $accrued_interest;
			
			$billing['end_balance'] = $balance < 0 ? 0.0 : $balance;
			$billing['total_payment'] = $billing['start_balance'] - $billing['end_balance'];

			$billings[] = $billing;

			$billDate = $this->nextBillingDate($billDate->toDateString(), 'M1M');
		}

		if ($debtCelerator && $debtCeleratorDate) {
			list($year, $month, $day) = explode('-', $billDate->toDateString());
			$debtCeleratorDate = Carbon::createFromDate($year, $month, $day);

			$debtCelerator += $debt->minimum_payment;
		}

		return $billings;
	}

	/**
  	* Generates list of billing dates.
		*
		* @param string    $payPeriod
	 	* @param string    $from
    * @param string    $to
  	* @param int       $limit
		* @return string[]
    */
	private function nextBillingDate($date, $billingPeriod) 
	{
		list($year, $month, $day) = explode('-', $date);
		$startDate = Carbon::createFromDate($year, $month, $day);
		
		$period = substr($billingPeriod, 0, 1);
		$periodInterval = intval(substr($billingPeriod, 1, 1));
		
        switch($period) {
			case 'D': 
				// Daily-billed 
				return $startDate->addDay();
			case 'W': 
				// Weekly-billed 
				return $startDate->addWeeks($periodInterval);
			case 'M': 
				// Monthly-billed 
				return $startDate->addMonths($periodInterval);
			case 'A': 
				// Annually-billed 
				return $startDate->addYears($periodInterval);
		}
  }
}