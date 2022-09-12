<?php

namespace App\Models;

use App\Enums\CharacterClass;
use App\Enums\Server;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperCharacter
 */
class Character extends Model
{
    use HasFactory;

    protected $fillable = [
        'nickname',
        'level',
        'server',
        'class',
        'goal',
        'description',
        'user_id',
    ];

    protected $casts = [
        'class' => CharacterClass::class,
        'server' => Server::class,
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
