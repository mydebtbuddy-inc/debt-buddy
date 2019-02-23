<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRelationshipDebtsAndInterestRates extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('debts', function (Blueprint $table) {
            $table->foreign('interest_rate_id')
                ->references('id')
                ->on('interest_rates')
                ->onUpdate('cascade')
                ->onDelete('restrict');
        });

        Schema::table('interest_rates', function (Blueprint $table) {
            $table->foreign('debt_id')
                ->references('id')
                ->on('debts')
                ->onUpdate('cascade')
                ->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('debts', function (Blueprint $table) {
            $table->dropForeign(['interest_rate_id']);
        });

        Schema::table('interest_rates', function (Blueprint $table) {
            $table->dropForeign(['debt_id']);
        });
    }
}
