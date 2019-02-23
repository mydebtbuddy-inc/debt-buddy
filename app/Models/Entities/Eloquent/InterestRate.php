<?php

namespace App\Models\Entities\Eloquent;

use Illuminate\Database\Eloquent\Model;

class InterestRate extends Model
{
    public $timestamps = false;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'debt_id', 'rate', 'fixed', 'from', 'to'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'rate' => 'float',
    ];

    /**
     * Get the debt the interest rate is linked to.
     */
    public function debt()
    {
        return $this->belongsTo('App\Models\Entities\Eloquent\Debt');
    }
}
