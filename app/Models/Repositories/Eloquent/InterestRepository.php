<?php

namespace App\Repositories\Eloquent;

use Carbon\Carbon;
use App\Models\Entities\Eloquent\Interest;
use App\Models\Repositories\InterestRepositoryInterface;

class InterestRepository implements InterestRepositoryInterface
{
    /**
     * Creates new Interest model in DB
     *
     * @param  array  $data
     * @return Interest
     */
    public function create($data)
    {
        $interest = Interest::create([
            'debt_id' => $data['debt_id'],
            'rate' => $data['rate'],
            'fixed' => $data['fixed'],
            'from' => $data['from'],
            'to' => $data['to']
        ]);
        
        return $interest;
    }
}