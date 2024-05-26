<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class Settings extends Model
{
    protected $guarded = [];
    protected $table = 'settings';
    protected $primaryKey = 'uuid';

    protected $casts = [
        'uuid' => 'string'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->{$model->getKeyName()} = (string) Uuid::uuid4();
        });
    }
}
