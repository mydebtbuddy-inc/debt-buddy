<?php

namespace App\Http\Controllers\Auth;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Models\Entities\Eloquent\User;
use GuzzleHttp\Exception\GuzzleException;
use App\Http\Requests\RegistrationRequest;
use App\Models\Entities\Eloquent\Membership;

class ApiAuthController extends Controller
{
    /**
     * Handles registration via API
     *
     * @param  App\Http\Requests\RegistrationRequest $request
     * @return \Illuminate\Http\Response
     */
    public function register(RegistrationRequest $request) {
        $validatedData = $request->validated();

        DB::beginTransaction();

        $user = User::create([
            'name' => $validatedData['name'],
            'surname' => $validatedData['surname'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        $membership = Membership::create([
            'user_id' => $user->id,
            'tier' => 'Free',
            'status' => 'Active'
        ]);

        $user->membership_id = $membership->id;
        $user->save();

        DB::commit();

        return response(
            User::find($user->id)->with(['memberships'])->get(), 
            201
        );
    }
    
    /**
     * Handles API login tasks
     *
     * @param  Request $request
     * @return Response
     */
    public function login(Request $request) {
        $client = new Client();
        
        try {
            // Send verification request to Passport login endpoint
            $response = $client->post(config('services.passport.login_endpoint'), [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => config('services.passport.client_id'),
                    'client_secret' => config('services.passport.client_secret'),
                    'username' => $request->username,
                    'password' => $request->password
                ]
            ]);
        } catch (\GuzzleHttp\Exception\BadResponseException $e) {
            switch($e->getCode()) {
                case 400:
                    return response('Invalid Request: please enter a username or a password', 400);
                case 401:
                    return response('Incorrect username/password', 401);
                default:
                    return response('Oops, something went wrong. Please try again later.', $e->getCode());
            }
        }

        return $response->getBody();
    }

    /**
     * Handles logout via API
     *
     * @return Response
     */
    public function logout() {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->revoke();
        });

        return response()->json('Logged out successfully', 200);
    }
}
