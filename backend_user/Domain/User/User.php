<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
enum InternShipStatus:int
{
    case PENDING = 0;
    case ACTIVE = 1;
    case FINISHED = 2;
}
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'UserName',
        'Email',
        'Password',
        'FirstName',
        'LastName',
        'SchoolId',
        'CategoryId',
        'ProfilePicture',
        'CVId',
        'PhoneNumber',
        'Batch',
        'Status',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'Password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'Password' => 'hashed',
        'Status' => InternShipStatus:: class
    ];

    public function school()
    {
        return $this->belongsTo(School::class);
    }

    public function category()
    {
        return $this->hasOne(Category::class);
    }

    public function courses()
    {
        return $this->hasMany(Course::class);
    }

    public function getProfilePictureUrlAttribute()
    {
        return asset('images/' . $this->ProfilePicture);
    }
}
