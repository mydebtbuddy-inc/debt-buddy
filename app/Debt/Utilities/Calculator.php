<?php

namespace App\Debt\Utilities;
  
class Calculator
{
    /**
     * The debt repository.
     *
     * @var DebtRepository
     */
    protected $debts;

    /**
     * Create a new calculator instance.
     *
     * @param  DebtRepository  $debts
     * @return void
     */
    public function __construct(DebtRepository $debts)
    {
        $this->debts = $debts;
    }


    public function doSomethingUseful()
    {
      return 'Output from DemoOne';
    }
}