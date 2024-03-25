<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(LoginRequest $request)
    {
        // Attempt to authenticate the user
        if (Auth::attempt($request->validated())) {
            // Authentication successful, generate API token
            $user = Auth::user();
            $token = $user->createToken('API Token')->plainTextToken;

            // Return the token in the response
            return response()->json([
                'message' => 'Login successful',
                'token' => $token,
            ]);
        }
    }
}
