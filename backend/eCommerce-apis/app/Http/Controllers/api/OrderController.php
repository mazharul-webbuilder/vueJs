<?php

namespace App\Http\Controllers\api;

use App\Events\OrderCreatedEvent;
use App\Events\OrderPlaced;
use App\Events\OrderPlacedEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\OrderRequest;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    /**
     * Place Order
    */
    public function placeOrder(OrderRequest $request)
    {
        event(new OrderCreatedEvent());

//
//
//        try {
//            $request->merge([
//                "order_id" => intval('O' . date('ymdHis') . rand(2, 5))
//            ]);
//            $order = Order::create($request->all());
//
//            $carts = Cart::where('user_id', Auth::user()->id)->orWhere('ip_address', $request->ip())->get();
//
//            foreach ($carts as $cart) {
//                OrderDetail::create([
//                    'order_id' => $order->order_id,
//                    'product_id' => $cart->product_id,
//                    'quantity' => $cart->qty,
//                ]);
//                $cart->delete();
//            }
//
//
//
//            return response()->json([
//                'order_id' => $order->order_id
//            ]);
//        } catch(\Exception $exception){
//            return response()->json($exception->getMessage());
//        }

    }
}
