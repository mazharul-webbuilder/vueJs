<?php

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

/**
 * Get Cart Products
 */
if (!function_exists('getCartProducts')){
    function getCartProducts(Request $request): \Illuminate\Database\Eloquent\Collection|array
    {
        return $request->user() ?
            Cart::with('product')->where('user_id', Auth::user()->id)->get()
            :
            Cart::with('product')->where('ip_address', $request->ip())->get();
    }
}

/**
 * Get Cart Total Product
 */
if (!function_exists('countCartProducts')){
    function countCartProducts(Request $request): int
    {
        return $request->user() ?
            DB::table('carts')->where('user_id', Auth::user()->id)->count()
            :
            DB::table('carts')->where('ip_address', $request->ip())->count();

    }
}
