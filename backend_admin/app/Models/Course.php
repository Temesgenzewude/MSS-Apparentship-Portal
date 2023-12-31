<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "image",
        "description",
        "category_id"
    ];


    public function lessons(){
        return $this->hasMany(Lesson::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
