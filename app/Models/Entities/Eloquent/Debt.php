<?php

namespace App\Models\Entities\Eloquent;

use Illuminate\Database\Eloquent\Model;

class Debt extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'name', 'description', 'status',
        'initial_balance', 'current_balance', 'type',
        'minimum_payment', 'start_date', 'end_date', 
        'target_end_date', 'payment_period'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'current_balance' => 'float',
        'initial_balance' => 'float',
        'minimum_payment' => 'float',
    ];

    /**
     * Get the user associated with the debt.
     */
    public function user()
    {
        return $this->belongsTo('App\Models\Entities\Eloquent\User');
    }

    /**
     * Get the interest rates associated with the debt.
     */
    public function interestRates()
    {
        return $this->hasMany('App\Models\Entities\Eloquent\InterestRate');
    }

    /**
     * Get the history of the debt.
     */
    public function history()
    {
        return $this->hasMany('App\Models\Entities\Eloquent\DebtHistory');
    }

    /**
     * Get the lender of the debt.
     */
    public function lender()
    {
        return $this->belongsTo('App\Models\Entities\Eloquent\Lender');
    }
}
