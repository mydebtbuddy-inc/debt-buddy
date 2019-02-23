<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLendersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lenders', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('parent')->index()->nullable();
            $table->string('name', 128);
            $table->string('phone', 15)->nullable();
            $table->string('account', 15)->nullable();
            $table->string('address1', 128)->nullable();
            $table->string('address2', 128)->nullable();
            $table->string('city', 128)->nullable();
            $table->string('state', 2)->nullable();
            $table->string('zip', 10)->nullable();
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
        Schema::dropIfExists('lenders');
    }
}
