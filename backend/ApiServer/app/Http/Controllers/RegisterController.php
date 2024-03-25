<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;

class RegisterController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(RegisterRequest $request)
    {
        $user = User::create($request->validated());

        $token = $user->createToken('Api token')->plainTextToken;

        return response()->json([
            'message' => 'User Registered Successfully',
            'token' => $token,
        ], 201);
    }
}
