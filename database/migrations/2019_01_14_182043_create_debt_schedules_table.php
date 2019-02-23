<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDebtSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('debt_schedules', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('payment_plan_id')->index();
            $table->unsignedInteger('debt_id')->index();
            $table->decimal('payment_amount', 12, 2);
            $table->string('payment_period', 16);
            $table->date('from');
            $table->date('to');
            $table->boolean('first');
            $table->boolean('final');
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
        Schema::dropIfExists('debt_schedules');
    }
}
