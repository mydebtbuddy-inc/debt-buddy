<?php

namespace Tests\Unit;

use Mockery;
use Tests\TestCase;
use App\Models\Entities\Eloquent\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ApiRegistrationRepoTest extends TestCase
{
    private $userRepository;

    public function setUp()
    {
        parent::setup();

        $this->userRepository = Mockery::mock(
            'App\Models\Repositories\UserRepositoryInterface'
        );

        $this->app->instance(
            'App\Models\Repositories\UserRepositoryInterface', 
            $this->userRepository
        );
    }

    public function tearDown()
    {
        Mockery::close();
        parent::tearDown();
    }

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

        $this->userRepository
            ->shouldReceive('create')
            ->once()
            ->andReturn(new User);

        $response = $this->json('POST', 'api/register', $data);

        $response->assertStatus(201);
    }
}
