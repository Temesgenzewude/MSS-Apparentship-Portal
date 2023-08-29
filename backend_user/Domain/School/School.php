<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $fillable = [
        'Name',
        'Description',
        'ContactPersonName',
        'ContactPersonPhoneNumber',
        'CoverImage',
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function getCoverImageUrlAttribute()
    {
        return asset('images/' . $this->CoverImage);
    }
    
}