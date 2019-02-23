<?php

namespace Tests\Unit;

use Tests\TestCase;
use Laravel\Passport\Passport;
use App\Models\Entities\Eloquent\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class DebtControllerTest extends TestCase
{
    use DatabaseTransactions;

    public function testAddNewDebtWithCorrectData()
    {
        Passport::actingAs(
            factory(User::class)->create()
        );

        $data = [
            'debt' => [
                'name' => 'Test Debt',
                'type' => 'Mortgage',
                'balance' => '545898.78',
                'minPayment' => '2700.00',
                'startDate' => '2019-01-01',
                'payPeriod' => 'M1M15',
            ],
            'interest' => [
                'rate' => '0.023400',
                'fixed' => '1',
            ],
            'lender' => [
                'name' => 'Test Lender',
                'phone' => '8005555555',
                'account' => '123456789',
                'address1' => '123 Some St.',
                'address2' => 'Apt. A',
                'city' => 'Schenectady',
                'state' => 'NY',
                'zip' => '12345'
            ]
        ];

        $response = $this->json('POST', 'api/user/debts', $data);

        $response->assertStatus(201);
    }

    public function testFetchAllUserDebts()
    {
        Passport::actingAs(
            factory(User::class)->create()
        );

        $response = $this->json('GET', 'api/user/debts');

        $response->assertStatus(200);
    }
}
