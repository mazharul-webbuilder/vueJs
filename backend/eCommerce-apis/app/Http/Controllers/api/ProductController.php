<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Get Products
    */
    public function getProducts(Request $request): JsonResponse
    {
        $count = $request->input('count',8 );

        $query = Product::query();

        $filter = $request->input('filter');

        switch ($filter){
            case "basic":
                $query->orderBy('id', 'ASC');
                break;
            case "trending":
                $query->orderBy('id', 'DESC');
                break;
        }
        return response()->json($query->take($count)->get());
    }
}
