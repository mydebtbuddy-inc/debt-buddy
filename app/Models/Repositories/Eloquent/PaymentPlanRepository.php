<?php

namespace App\Repositories\Eloquent;

use Carbon\Carbon;
use App\Models\Entities\Eloquent\PaymentPlan;
use App\Models\Repositories\PaymentPlanRepositoryInterface;

class PaymentPlanRepository implements PaymentPlanRepositoryInterface
{
    /**
     * Creates new Payment Plan model in DB
     *
     * @param  array  $data
     * @return PaymentPlan
     */
    public function create($data)
    {
        $paymentPlan = PaymentPlan::create([
            'user_id' => $data['user_id'],
            'status' => $data['status'],
            'total_debt_count' => $data['total_debt_count'],
            'target_date' => $data['target_date'],
            'total_initial_debt' => $data['total_initial_debt'],
            'debtcelerator' => $data['debtcelerator'],
            'total_target_debt' => $data['total_target_debt']
        ]);
        
        return $paymentPlan;
    }
}