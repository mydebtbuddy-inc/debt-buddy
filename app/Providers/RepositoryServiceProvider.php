<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $models = [
            'User',
            'Membership',
            'Debt',
            'DebtHistory',
            'DebtSchedule',
            'Interest',
            'Lender',
            'PaymentPlan'
        ];

        foreach($models as $model) {
            $this->app->bind(
                "App\\Models\\Repositories\\{$model}RepositoryInterface",
                "App\\Models\\Repositories\\Eloquent\\{$model}Repository"
            );
        }
    }
}