<?php

namespace App\Models\Repositories;

interface DebtRepositoryInterface
{
    public function create(array $data);
    //public function with($relation);
    //public function where($column, $value);
    //public function findOrFail($id);
}