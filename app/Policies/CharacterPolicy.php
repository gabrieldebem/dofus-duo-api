<?php

namespace App\Policies;

use App\Models\Character;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class CharacterPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the model.
     *
     * @param  User  $user
     * @param  Character  $character
     * @return Response|bool
     */
    public function view(User $user, Character $character): Response|bool
    {
        return $character->user_id === $user->id;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  User  $user
     * @return Response|bool
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  User  $user
     * @param  Character  $character
     * @return Response|bool
     */
    public function update(User $user, Character $character): Response|bool
    {
        return $character->user_id === $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  User  $user
     * @param  Character  $character
     * @return Response|bool
     */
    public function delete(User $user, Character $character): Response|bool
    {
        return $character->user_id === $user->id;
    }
}
