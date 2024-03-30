<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddToCartRequest;
use App\Models\Cart;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    /**
     * Add To Cart
    */
    public function addToCart(AddToCartRequest $request): JsonResponse
    {
        $flag = false;

        if ($request->user()){
            $request->merge(['user_id' => Auth::user()->id]);
            $flag = true;
        } else{
            $request->merge(['ip_address' => $request->ip()]);
        }

        if ($flag) {
            $cart = Cart::where('user_id', Auth::user()->id)->where('product_id', $request->input('product_id'))->first();

        } else{
            $cart = Cart::where('ip_address', $request->ip())->where('product_id', $request->input('product_id'))->first();
        }

        if (!$cart) {
            Cart::create($request->all());
        } else {
            $cart->qty += $request->input('qty');
            $cart->save();
        }

        return response()->json(true);
    }
}
