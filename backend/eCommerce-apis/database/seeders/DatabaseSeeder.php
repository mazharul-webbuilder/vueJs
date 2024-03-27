<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use PhpParser\Node\Expr\AssignOp\Mod;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Model::unguard();
        $this->call([
           CategorySeeder::class,
            ProductSeeder::class,
            OrderSeeder::class,
            CartSeeder::class
        ]);
        Model::reguard();
    }
}
