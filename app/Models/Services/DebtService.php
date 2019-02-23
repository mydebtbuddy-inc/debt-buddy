<?php 

namespace App\Models\Services;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\Entities\Eloquent\User;
use App\Models\Entities\Eloquent\Debt;
use App\Models\Entities\Eloquent\Lender;
use App\Models\Entities\Eloquent\DebtHistory;
use App\Models\Entities\Eloquent\InterestRate;

class DebtService
{
    /**
     * Creates new debt along with associated interest rate and lender
     *
     * @param  array  $data
     * @return Debt
     */
    public static function addDebt(array $data)
    {
        $timestamp = Carbon::now();

        DB::beginTransaction();

        $debt = Debt::create([
            'user_id' => $data['debt']['userID'],
            'name' => $data['debt']['name'],
            'type' => $data['debt']['type'],
            'initial_balance' => $data['debt']['balance'],
            'current_balance' => $data['debt']['balance'],
            'minimum_payment' => $data['debt']['minPayment'],
            'start_date' => $data['debt']['startDate'],
            'payment_period' => $data['debt']['payPeriod']
        ]);

        $interest = InterestRate::create([
            'debt_id' => $debt->id,
            'rate' => $data['interest']['rate'],
            'fixed' => $data['interest']['fixed'],
            'from' => $data['interest']['from'] ?? $timestamp
        ]);

        $lender_id = $data['lender']['id'] ?? Lender::create([
            'name' => $data['lender']['name'],
            'phone' => $data['lender']['phone'],
            'account' => $data['lender']['account'],
            'address1' => $data['lender']['address1'],
            'address2' => $data['lender']['address2'],
            'city' => $data['lender']['city'],
            'state' => $data['lender']['state'],
            'zip' => $data['lender']['zip']
        ])->id;

        $debt->interest_rate_id = $interest->id;
        $debt->lender_id = $lender_id;
        $debt->save();
        
        DebtHistory::create([
            'debt_id' => $debt->id,
            'event' => 'Debt entered',
            'timestamp' => $timestamp
        ]);

        DB::commit();
        
        return Debt::with(
            ['interestRates', 'lender', 'history']
        )->find($debt->id);
    }

    /**
     * Creates new debt along with associated interest rate and lender
     *
     * @param  int  $userID
     * @return Collection debts
     */
    public static function fetchAllUserDebts($userID)
    {
        return User::find($userID)->debts()->with(
            ['interestRates', 'lender', 'history']
        )->get();
    }
}