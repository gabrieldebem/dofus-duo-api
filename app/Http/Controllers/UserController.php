<?php

namespace App\Http\Controllers;

use App\Exceptions\InvalidCredentialsException;
use App\Http\Requests\AuthUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * @param  StoreUserRequest  $request
     * @return JsonResponse
     */
    public function store(StoreUserRequest $request): JsonResponse
    {
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);

        return response()->json($user, 201);
    }

    /**
     * @param  AuthUserRequest  $request
     * @return JsonResponse
     *
     * @throws InvalidCredentialsException
     */
    public function auth(AuthUserRequest $request): JsonResponse
    {
        $user = User::query()->where('email', $request->input('email'))
            ->first();

        if (! $user && ! Hash::check($request->input('password'), $user->password)) {
            throw new InvalidCredentialsException();
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([...$user->toArray(), 'token' => $token]);
    }
}
