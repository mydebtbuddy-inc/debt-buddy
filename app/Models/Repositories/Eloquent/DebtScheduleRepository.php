<?php

namespace App\Repositories\Eloquent;

use Carbon\Carbon;
use App\Models\Entities\Eloquent\DebtSchedule;
use App\Models\Repositories\DebtScheduleRepositoryInterface;

class DebtScheduleRepository implements DebtScheduleRepositoryInterface
{
    /**
     * Creates new DebtSchedule model in DB
     *
     * @param  array  $data
     * @return DebtSchedule
     */
    public function create($data)
    {
        $debtSchedule = DebtSchedule::create([
            'payment_plan_id' => $data['payment_plan_id'],
            'debt_id' => $data['debt_id'],
            'payment_amount' => $data['payment_amount'],
            'payment_period' => $data['payment_period'],
            'from' => $data['from'],
            'to' => $data['to'],
            'first' => $data['first'],
            'final' => $data['final'],
        ]);
        
        return $debtSchedule;
    }
}