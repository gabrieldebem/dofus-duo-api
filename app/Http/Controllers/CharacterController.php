<?php

namespace App\Http\Controllers;

use App\Enums\CharacterClass;
use App\Enums\Server;
use App\Http\Requests\StoreCharacterRequest;
use App\Http\Requests\UpdateCharacterRequest;
use App\Models\Character;
use App\Models\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Spatie\QueryBuilder\QueryBuilder;

class CharacterController extends Controller
{
    public function index(): JsonResponse
    {
        /** @var User $user */
        $user = auth()->user();

        $characters = QueryBuilder::for(Character::class)
            ->allowedFilters(['nickname', 'level', 'server', 'class', 'goal', 'description'])
            ->allowedSorts(['nickname', 'level', 'server', 'class', 'goal', 'description'])
            ->where('user_id', $user->id)
            ->paginate(min(50, request()->query('limit')));

        return response()->json($characters);
    }

    public function store(StoreCharacterRequest $request): JsonResponse
    {
        /** @var User $user */
        $user = auth()->user();

        $character = Character::create([
            'nickname' => $request->input('nickname'),
            'level' => $request->input('level'),
            'server' => Server::from($request->input('server')),
            'class' => CharacterClass::from($request->input('class')),
            'goal' => $request->input('goal'),
            'description' => $request->input('description'),
            'user_id' => $user->id,
        ]);

        return response()->json($character);
    }

    /**
     * @param  Character  $character
     * @return JsonResponse
     *
     * @throws AuthorizationException
     */
    public function show(Character $character): JsonResponse
    {
        $this->authorize('view', $character);

        return response()->json($character);
    }

    /**
     * @param  UpdateCharacterRequest  $request
     * @param  Character  $character
     * @return JsonResponse
     *
     * @throws AuthorizationException
     */
    public function update(UpdateCharacterRequest $request, Character $character): JsonResponse
    {
        $this->authorize('update', $character);

        $character->update($request->only([
            'nickname',
            'level',
            'goal',
            'description',
        ]));

        return response()->json($character);
    }

    /**
     * @param  Character  $character
     * @return JsonResponse
     *
     * @throws AuthorizationException
     */
    public function destroy(Character $character): JsonResponse
    {
        $this->authorize('delete', $character);

        $character->delete();

        return response()->json([], 204);
    }
}
