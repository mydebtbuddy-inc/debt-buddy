<?php

namespace App\Repositories\Eloquent;

use Carbon\Carbon;
use App\Models\Entities\Eloquent\Lender;
use App\Models\Repositories\LenderRepositoryInterface;

class LenderRepository implements LenderRepositoryInterface
{
    /**
     * Creates new Lender model in DB
     *
     * @param  array  $data
     * @return Lender
     */
    public function create($data)
    {
        $lender = Lender::create([
            'parent' => $data['parent'],
            'name' => $data['name'],
            'phone' => $data['phone'],
            'account' => $data['account'],
            'address1' => $data['address1'],
            'address2' => $data['address2'],
            'city' => $data['city'],
            'state' => $data['state'],
            'zip' => $data['zip']
        ]);
        
        return $lender;
    }
}