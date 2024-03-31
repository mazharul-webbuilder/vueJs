<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    /**
     * Register manage
    */
    public function register(RegisterRequest $request): JsonResponse
    {
        $user = User::create($request->validated());

        $accessToken = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'user' => $user,
            'accessToken' => $accessToken
        ], 201);
    }



    /**
     * Login manage
    */
    public function login(LoginRequest $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            $user = Auth::user();
            $accessToken = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'user' => $user,
                'accessToken' => $accessToken
            ], 200);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    /**
     * Logout
    */
    public function logout(Request $request): JsonResponse
    {
        $user = $request->user();

        // Revoke all tokens associated with the user
        $user->tokens()->delete();

        return response()->json(['message' => 'Successfully logged out'], 200);
    }
}
