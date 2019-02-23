<?php

namespace App\Repositories\Eloquent;


use Illuminate\Support\Facades\DB;
use App\Models\Entities\Eloquent\User;
use App\Models\Repositories\UserRepositoryInterface;
use App\Models\Repositories\MembershipRepositoryInterface as Membership;

class UserRepository implements UserRepositoryInterface
{
    /**
     * Creates new User model in DB
     *
     * @param  array  $data
     * @return User
     */
    public function create($data)
    {
        DB::beginTransaction();

        $user = User::create([
            'name' => $data['name'],
            'surname' => $data['surname'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        Membership::create([
            'user_id' => $user->id,
            'tier' => 'Free',
            'status' => 'Active'
        ]);

        DB::commit();

        return $user;
    }

    /*public function where($column, $value)
    {
        return User::where($column, $value)->get();
    }

    public function findOrFail($id)
    {
        return Comment::findOrFail($id);
    }*/
}