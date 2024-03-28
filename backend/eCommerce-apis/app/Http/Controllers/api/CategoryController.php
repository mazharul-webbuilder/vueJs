<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /***
     * Get All Categories
    */
    public function getCategories(): JsonResponse
    {
        return response()->json(Category::all());
    }
}
