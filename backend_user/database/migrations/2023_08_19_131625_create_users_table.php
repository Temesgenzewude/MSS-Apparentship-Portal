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
            $table->uuid('id');
            $table->string('UserName',50)->uniqid();
            $table->string('Email',50);
            $table->string('Password',8);
            $table->string('FirstName',50);
            $table->string('LastName',50);
            $table->uuid('SchoolId');
            $table->uuid('CategoryId');
            $table->string('ProfilePicture');
            $table->uuid('CVId');
            $table->string('PhoneNumber');
            $table->string('Batch');
            $table->int('Status');
            $table->foreignId('CategoryId')->constrained()->onDelete('cascade');
            $table->foreignId('SchoolId')->constrained()->onDelete('cascade');
            $table->foreignId('CVId')->constrained()->onDelete('set null');
            $table->rememberToken();
            $table->timestamps();
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
