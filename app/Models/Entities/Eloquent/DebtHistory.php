<?php

namespace App\Models\Entities\Eloquent;

use Illuminate\Database\Eloquent\Model;

class DebtHistory extends Model
{
    public $table = 'debt_history';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'debt_id', 'event', 'timestamp'
    ];

    /**
     * Get the debt the history is linked to.
     */
    public function debt()
    {
        return $this->belongsTo('App\Models\Entities\Eloquent\Debt');
    }
}
