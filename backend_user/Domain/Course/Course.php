<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
        'Title',
        'Description',
        'CoverImage',
        'CategoryId',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
    public function getCoverImageUrlAttribute()
    {
        return asset('images/' . $this->CoverImage);
    }

}