<?php

namespace App\Models\Repositories;

interface UserRepositoryInterface
{
    public function create(array $data);
    //public function where($column, $value);
    //public function findOrFail($id);
}