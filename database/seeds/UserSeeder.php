<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        User::create([
            'name' => 'Gustavo Delfim da Silva',
            'email' => 'gusttavodelfim@gmail.com',
            'password' => bcrypt('123123'),
        ]);

    }
}
