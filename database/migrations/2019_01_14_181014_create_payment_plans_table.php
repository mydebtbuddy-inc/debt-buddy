<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_plans', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->index();
            $table->enum('status', ['OK', 'Delinquent', 'Completed', 'Canceled'])->default('OK');
            $table->unsignedTinyInteger('total_debt_count')->default(0);
            $table->decimal('total_debt_amount', 12, 2)->default('0.00');
            $table->decimal('total_savings', 12, 2)->default('0.00');
            $table->decimal('debtcelerator', 12, 2)->default('0.00');
            $table->date('target_date')->nullable();
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
        Schema::dropIfExists('payment_plans');
    }
}
