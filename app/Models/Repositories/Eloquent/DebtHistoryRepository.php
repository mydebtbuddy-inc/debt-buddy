<?php

namespace App\Repositories\Eloquent;

use Carbon\Carbon;
use App\Models\Entities\Eloquent\DebtHistory;
use App\Models\Repositories\DebtHistoryRepositoryInterface;

class DebtHistoryRepository implements DebtHistoryRepositoryInterface
{
    /**
     * Creates new DebtHistory model in DB
     *
     * @param  array  $data
     * @return DebtHistory
     */
    public function create($data)
    {
        $debtHistory = DebtHistory::create([
            'debt_id' => $data['debt_id'],
            'event' => $data['event'],
            'timestamp' => Carbon::now()
        ]);
        
        return $debtHistory;
    }
}