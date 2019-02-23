<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRelationshipUsersAndMemberships extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreign('membership_id')
                ->references('id')
                ->on('memberships')
                ->onUpdate('cascade')
                ->onDelete('restrict');
        });

        Schema::table('memberships', function (Blueprint $table) {
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
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
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['membership_id']);
        });

        Schema::table('memberships', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });
    }
}
