<?php

namespace App\Repositories\Eloquent;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\Entities\Eloquent\Membership;
use App\Models\Repositories\MemberRepositoryInterface;

class MembershipRepository implements MembershipRepositoryInterface
{
    /**
     * Creates new Membership model in DB
     *
     * @param  array  $data
     * @return Membership
     */
    public function create($data)
    {
        $membership = Membership::create([
            'user_id' => $data['user_id'],
            'tier' => $data['tier'],
            'status' => $data['status']
        ]);

        return $membership;
    }
}