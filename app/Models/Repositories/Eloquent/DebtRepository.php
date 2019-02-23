<?php

namespace App\Repositories\Eloquent;

use Illuminate\Support\Facades\DB;
use App\Models\Entities\Eloquent\Debt;
use App\Models\Repositories\DebtRepositoryInterface;
use App\Models\Repositories\LenderRepositoryInterface as Lender;
use App\Models\Repositories\InterestRepositoryInterface as Interest;
use App\Models\Repositories\DebtHistoryRepositoryInterface as DebtHistory;

class DebtRepository implements DebtRepositoryInterface
{
    /**
     * Creates new debt model in DB along with associated
     * interest rate and lender
     *
     * @param  array  $data
     * @return Debt
     */
    public function create($data)
    {
        DB::beginTransaction();

        $debt = Debt::create([
            'user_id' => $data['userID'],
            'name' => $data['name'],
            'type' => $data['type'],
            'initial_balance' => $data['remainingBalance'],
            'current_balance' => $data['remainingBalance'],
            'minimum_payment' => $data['minPayment'],
            'start_date' => $data['startDate'],
            'payment_period' => $data['paymentPeriod']
        ]);

        $interest = Interest::create([
            'debt_id' => $debt->id,
            'rate' => $data['interest']['rate'],
            'fixed' => $data['interest']['fixed'],
            'from' => $data['interest']['from']
        ]);

        $lender_id = $data['lender']['id'] ?? Lender::create([
            'parent' => $data['lender']['parent'],
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
            'event' => 'Debt entered'
        ]);

        DB::commit();
        
        return $debt;
    }

    /*public function with($relation)
    {
        return Debt::with($relation)->find($id);
    }

    public function where($column, $value)
    {
        return User::where($column, $value)->get();
    }

    public function findOrFail($id)
    {
        return Comment::findOrFail($id);
    }*/
}