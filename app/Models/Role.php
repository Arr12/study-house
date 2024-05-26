<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';
    public $incrementing = false;

    public function users()
    {
        return $this->belongsTo(User::class, 'uuid', 'roles_id');
    }
}
