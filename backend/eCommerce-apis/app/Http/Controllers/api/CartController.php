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
        $flag = false; $countCart = 0;

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
        // Cart Count
        if ($flag) {
            $countCart = DB::table('carts')->where('user_id', Auth::user()->id)->count();
        } else {
            $countCart = DB::table('carts')->where('ip_address', $request->ip())->count();
        }

        return response()->json([
            'status' => true,
            'countCart' => $countCart,
            'cartProducts' => $request->user() ?
                Cart::with('product')->where('user_id', Auth::user()->id)->get() :
                Cart::with('product')->where('ip_address', $request->ip())->get()
        ]);
    }

    /**
     * Count Cart
    */
    public function countCart(Request $request): JsonResponse
    {
        if ($request->user()) {
            $countCart = DB::table('carts')->where('user_id', Auth::user()->id)->count();
        } else{
            $countCart = DB::table('carts')->where('ip_address', $request->ip())->count();
        }
        return response()->json($countCart);
    }

    /**
     * Get User Cart Product
    */
    public function getCartProduct(Request $request)
    {
        if ($request->user()) {
            $products = Cart::with('product')->where('user_id', Auth::user()->id)->get();
        } else{
            $products = Cart::with('product')->where('ip_address', $request->ip())->get();
        }
        return response()->json($products);
    }

    /**
     * Remove from cart
    */
    public function cartRemove(Request $request, string $cartId)
    {
        DB::table('carts')->where('id', $cartId)->delete();

        if ($request->user()) {
            $countCart = DB::table('carts')->where('user_id', Auth::user()->id)->count();

            $products = Cart::with('product')->where('user_id', Auth::user()->id)->get();
        } else{
            $countCart = DB::table('carts')->where('ip_address', $request->ip())->count();

            $products = Cart::with('product')->where('ip_address', $request->ip())->get();
        }
        return response()->json([
            'products' => $products,
            'countCart' => $countCart
        ]);
    }
}
