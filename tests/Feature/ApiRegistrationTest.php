<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Entities\Eloquent\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ApiRegistrationTest extends TestCase
{
    use DatabaseTransactions;

    public function testRegisterNewUserWithMissingData()
    {
        $response = $this->json('POST', 'api/register');

        $response->assertStatus(422);
    }

    public function testRegisterNewUserWithIncorrectEmailData()
    {
        $data = [
            'name' => 'Test',
            'surname' => 'User',
            'email' => 'tuseremail.com',
            'password' => 'secret'
        ];

        $response = $this->json('POST', 'api/register', $data);

        $response->assertStatus(422);
    }

    public function testRegisterNewUserWithCorrectData()
    {
        $data = [
            'name' => 'Test',
            'surname' => 'User',
            'email' => 'tuser@email.com',
            'password' => 'secret'
        ];

        $response = $this->json('POST', 'api/register', $data);

        $response->assertStatus(201);
    }
}
