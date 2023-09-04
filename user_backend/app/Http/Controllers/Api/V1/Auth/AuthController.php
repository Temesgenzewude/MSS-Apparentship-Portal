<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //

    public function __construct()
    {
        $this->middleware('auth:api', [
            'except' => ['index', 'login', 'register']
        ]);
        
    }



    public function index()
    {
        return response()->json(['message'=>'Authentication page'], 200);
    }

    public function login(Request $request)
    {

        // Validate input
        $validator = Validator::make($request->all(), [
          'email' => 'required|email',
          'password' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }


        $credentials = $request->only('email', 'password');
        // Attempt login and  Create token
        $token= Auth::attempt($credentials);



        if(!$token) {
            return response()
                ->json(['message' => 'Invalid credential'], 400);
        }

        // Get user
        $user = User::where('email', $request['email'])->firstOrFail();

        if($user==null) {
            return response()->json(['message' => 'Your are not signed up'], 400);

        }

        $user=Auth::user();

        if($user==null) {
            return response()->json(['message' => 'Your are not signed up'], 400);

        }


        // Return the user info with together with the jwt token
        return response()
            ->json([
                'message' => 'Successfully logged in',
                'user' => $user,
                'token' => $token]);
    }

    // Sign up
    public function register(Request $request)
    {

        // Validate input
        $validator = Validator::make($request->all(), [
          'name' => 'required|max:100',
          'email' => 'required|email|unique:users',
          'password' => 'required|min:6'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Create user
        $user = User::create([
          'name' => $request->name,
          'email' => $request->email,
          'password' => Hash::make($request->password)
        ]);

        if($user==null) {
            return response()->json(['message' => 'Something went wrong'], 500);

        }
        // Create token

        $token= Auth::login($user);

        if($token==null) {
            return response()->json(['message' => 'Something went wrong'], 500);

        }


        // Return
        return response()
          ->json([
            'message' => 'User created successfully',
            'user' => $user,
            'token' => $token]);

    }



    public function logout()
    {
        Auth::logout();
        return response()->json(['message'=>'Successfully logged out'], 200);
    }

    public function refresh()
    {
        $token = Auth::refresh();
        $user = Auth::user();

        return response()->json([
            'message'=>'Token refreshed',
            'user'=>$user,
            'token'=>$token], 200);
    }
}
