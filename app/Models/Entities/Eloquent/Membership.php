<?php

namespace App\Models\Entities\Eloquent;

use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'tier', 'status'
    ];

    /**
     * Get the user this memberships is associated with.
     */
    public function user()
    {
        return $this->belongsTo('App\Models\Entities\Eloquent\User');
    }
}
