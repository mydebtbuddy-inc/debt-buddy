<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', 'Auth\ApiAuthController@register')->name('register');
Route::post('/login', 'Auth\ApiAuthController@login')->name('login');

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', 'Auth\ApiAuthController@logout')->name('logout');

    Route::prefix('user')->group(function() {
        Route::get('/', function (Request $request) {
            return $request->user();
        });

        Route::get('/debt', 'DebtController@index')->name('debt.index');
        Route::post('/debt', 'DebtController@addDebt')->name('debt.store');
        Route::delete('/debt/{id}', 'DebtController@removeDebt')->name('debt.delete');

        Route::post('/payment-plan', 'PaymentPlanController@calculate')->name('paymentPlan.calculate');
    });
});