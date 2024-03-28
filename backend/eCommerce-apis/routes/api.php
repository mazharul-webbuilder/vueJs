<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\CategoryController;
use App\Http\Controllers\api\ProductController;

/*Frontend WithoutAuth*/
Route::get('categories', [CategoryController::class, 'getCategories']);
Route::get('get-products', [ProductController::class, 'getProducts']);









Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
