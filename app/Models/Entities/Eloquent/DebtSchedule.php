<?php

namespace App\Models\Entities\Eloquent;

use Illuminate\Database\Eloquent\Model;

class DebtSchedule extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'payment_plan_id', 'debt_id', 'payment_amount', 
        'payment_period', 'from', 'to', 'first', 'final'
    ];

    /**
     * Get the payment plan the debt schedule is associated with.
     */
    public function paymentPlan()
    {
        return $this->belongsTo('App\Models\Entities\Eloquent\PaymentPlan');
    }

    /**
     * Get the debt the schedule is for.
     */
    public function debt()
    {
        return $this->hasOne('App\Models\Entities\Eloquent\Debt');
    }
}
