<?php

namespace App\Debt;

use Illuminate\Database\Eloquent\Model;

class PaymentPlan extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'status', 'total_debt_count', 'total_debt_amount',
        'debtcelerator', 'target_date', 'total_savings'
    ];

    /**
     * Get the user associated with the debt.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the interest rates associated with the debt.
     */
    public function interestRates()
    {
        return $this->hasMany('App\Debt\InterestRate');
    }

    /**
     * Get the history of the debt.
     */
    public function history()
    {
        return $this->hasMany('App\Debt\DebtHistory');
    }

    /**
     * Get the lender of the debt.
     */
    public function lender()
    {
        return $this->hasOne('App\Debt\Lender');
    }
}
