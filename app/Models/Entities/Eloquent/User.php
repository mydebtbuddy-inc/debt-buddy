<?php

namespace App\Models\Entities\Eloquent;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'surname', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Get the memberships associated with the user.
     */
    public function memberships()
    {
        return $this->hasMany('App\Models\Entities\Eloquent\Membership');
    }

    /**
     * Get the payment plan associated with the user.
     */
    public function paymentPlan()
    {
        return $this->hasMany('App\Models\Entities\Eloquent\PaymentPlan');
    }

    /**
     * Get the debts associated with the user.
     */
    public function debts()
    {
        return $this->hasMany('App\Models\Entities\Eloquent\Debt');
    }

    /**
     * Get the lenders for the user.
     */
    public function lenders()
    {
        return $this->hasManyThrough(
            'App\Models\Entities\Eloquent\Lender', 
            'App\Models\Entities\Eloquent\Debt'
        );
    }
}
