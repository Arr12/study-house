<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->string('uuid')->primary();
            $table->string('username')->unique();
            $table->string('nickname');
            $table->string('password');
            $table->string('email');
            $table->string('verified_at')->nullable();
            $table->string('roles_id');
            $table->string('bio');
            $table->string('thumbnails')->nullable();
            $table->rememberToken()->nullable();
            $table->timestamps();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->softDeletes();

            $table->index('username');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
