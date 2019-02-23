<?php

namespace App\Models\Entities\Eloquent;

use Illuminate\Database\Eloquent\Model;

class Lender extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'parent', 'name', 'phone', 'account', 
        'address1', 'address2', 'city', 'state', 'zip'
    ];

    /**
     * Get the debts this lender has lent.
     */
    public function debts()
    {
        return $this->hasMany('App\Models\Entities\Eloquent\Debt');
    }
}
