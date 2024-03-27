<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\CategoryController;


/*Frontend WithoutAuth*/
Route::get('categories', [CategoryController::class, 'getCategories']);









Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
