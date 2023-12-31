<?php

use App\Http\Controllers\Api\V1\Auth\AuthController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Auth routes
Route::controller(AuthController::class)->group(function () {

    Route::prefix('v1')->group(function () {
        Route::prefix('auth')->group(function () {
            Route::get('/login', 'index');
            Route::post('/login', 'login');
            Route::get('/register', 'index');
            Route::post('/register', 'register');
            Route::get('/logout', 'index');
            Route::post('/logout', 'logout');
            Route::get('/refresh', 'index');
            Route::post('/refresh', 'refresh');

        });
    });


});
