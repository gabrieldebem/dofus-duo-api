<?php

namespace App\Http\Controllers;

use App\Models\Character;
use Illuminate\Http\JsonResponse;
use Spatie\QueryBuilder\QueryBuilder;

class FindDuo extends Controller
{
    public function __invoke(Character $character): JsonResponse
    {
        $duo = QueryBuilder::for(Character::class)
            ->allowedFilters(['nickname', 'level', 'server', 'class', 'goal', 'description'])
            ->allowedSorts(['nickname', 'level', 'server', 'class', 'goal', 'description'])
            ->whereNot('user_id', auth()->id())
            ->whereBetween('level', [$character->level - 10, $character->level + 10])
            ->where('server', $character->server)
            ->paginate(min(50, request()->query('limit')));

        return response()->json($duo);
    }
}
