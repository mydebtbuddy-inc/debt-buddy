<?php

namespace App\Models\Entities\Eloquent;

use Illuminate\Database\Eloquent\Model;

class PaymentPlan extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'status', 'total_debt_count', 'target_date', 
        'total_initial_debt', 'debtcelerator', 'total_target_debt'
    ];

    /**
     * Get the user this payment plan belongs ton.
     */
    public function user()
    {
        return $this->belongsTo('App\Models\Entities\Eloquent\User');
    }
}
