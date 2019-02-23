<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $testUserID = DB::table('users')->insertGetId([
            'name' => 'Adrien',
            'surname' => 'Caristan',
            'email' => 'amcaristan@gmail.com',
            'password' => bcrypt('secret'),
            'created_at' => '2019-01-01 00:00:00'
        ]);

        $membershipID = DB::table('memberships')->insertGetId([
            'user_id' => $testUserID,
            'tier' => 'Free',
            'status' => 'Active',
            'created_at' => '2019-01-01 00:00:00'
        ]);

        DB::table('users')
            ->where('id', $testUserID)
            ->update(['membership_id' => $membershipID]);
    }
}
