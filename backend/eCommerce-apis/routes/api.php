<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\CategoryController;
use App\Http\Controllers\api\ProductController;
use App\Http\Controllers\api\CartController;
use App\Http\Controllers\api\AuthController;

/*Frontend WithoutAuth*/
Route::get('categories', [CategoryController::class, 'getCategories']);
Route::get('get-products', [ProductController::class, 'getProducts']);
Route::get('product/{slug}', [ProductController::class, 'productDetail']);
Route::get('category-products/{slug}', [ProductController::class, 'getCategoryWiseProduct']);
// Cart
Route::post('add-to-cart', [CartController::class, 'addToCart']);
Route::put('cart-update/{id}', [CartController::class, 'updateCart']);
Route::get('count-cart', [CartController::class, 'countCart']);
Route::get('get-cart-products', [CartController::class, 'getCartProduct']);
Route::post('cart-remove/{id}', [CartController::class, 'cartRemove']);


// Auth
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout']);






Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
