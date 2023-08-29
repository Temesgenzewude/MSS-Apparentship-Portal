<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
        'UserName'=>'Abe',
        'Email'=>'Abe@gmail.com',
        'Password'=>'123456',
        'FirstName'=>'Abraham',
        'LastName'=>'Shimekt',
        'SchoolId'=>1,
        'CategoryId'=>1,
        'ProfilePicture'=>'',
        'CVId'=>'',
        'PhoneNumber'=>'0901195602',
        'Batch'=>'12',
        'Status'=> 1,
        ]);
        
        Category:create([
            'Name'=>'Backend',
            'Description'=>'Backend development'

        ]);
    }
}
