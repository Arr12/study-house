<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Ramsey\Uuid\Uuid;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'uuid' => Uuid::uuid4()->toString(),
            'username' => 'administrator',
            'nickname' => 'Administrator',
            'email' => 'example@example.com',
            'password' => Hash::make('12345678'),
            'roles_id' => '0c85b640-f578-4532-8bc1-3550e9d2b71f',
        ]);
        for ($i = 0; $i < 5; $i++) {
            User::create([
                'uuid' => Uuid::uuid4()->toString(),
                'username' => 'user' . date('Ymd') . sprintf("%09d", $i),
                'nickname' => 'User - ' . date('Ymd') . sprintf("%09d", $i),
                'password' => Hash::make('12345678'),
                'email' => 'user' . date('Ymd') . sprintf("%09d", $i) . '@example.com',
                'roles_id' => '0c85b640-f578-4532-8bc1-3550e9d2b71f',
            ]);
        }
    }
}
