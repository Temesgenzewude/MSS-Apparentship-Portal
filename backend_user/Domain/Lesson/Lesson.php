<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected $fillable = [
        'CoverImage',
        'Title',
        'AttachmentFile',
        'CourseId',
        'Description',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
    public function getCoverImageUrlAttribute()
    {
        return asset('images/' . $this->CoverImage);
    }
    public function getAttachmentFileUrlAttribute()
    {
        return asset('files/' . $this->AttachmentFile);
    }
}