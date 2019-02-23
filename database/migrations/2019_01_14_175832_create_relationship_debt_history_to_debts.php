<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRelationshipDebtHistoryToDebts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('debt_history', function (Blueprint $table) {
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
        Schema::table('debt_history', function (Blueprint $table) {
            $table->dropForeign(['debt_id']);
        });
    }
}
