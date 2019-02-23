<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDebtsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('debts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->index();
            $table->string('name', 128);
            $table->enum('type', ['Mortgage', 'Student Loan', 'Auto Loan', 'Credit Card']);
            $table->enum('status', ['Current', 'Overdue', 'Settled', 'Repaid'])->default('Current');
            $table->decimal('initial_balance', 12, 2)->nullable();
            $table->decimal('current_balance', 12, 2);
            $table->decimal('minimum_payment', 12, 2);
            $table->unsignedInteger('interest_rate_id')->nullable()->index();
            $table->date('start_date')->nullable();
            $table->string('payment_period', 16);
            $table->unsignedInteger('lender_id')->nullable()->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('debts');
    }
}
