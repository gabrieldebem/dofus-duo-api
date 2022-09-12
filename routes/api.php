<?php

use App\Http\Controllers\CharacterController;
use App\Http\Controllers\FindDuo;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/sign-up', [UserController::class, 'store']);
Route::post('/sign-in', [UserController::class, 'auth']);

Route::middleware('auth:sanctum')->group(function () {
    Route::resource('characters', CharacterController::class);
    Route::get('/find-duo/{character}', FindDuo::class);
});
