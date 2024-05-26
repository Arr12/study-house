<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Ramsey\Uuid\Uuid;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $firstRoleUUid = Uuid::uuid4()->toString();
        Role::create([
            'uuid' => $firstRoleUUid,
            'name' => 'administrator'
        ]);
        Role::create([
            'uuid' => Uuid::uuid4()->toString(),
            'name' => 'user'
        ]);
    }
}
