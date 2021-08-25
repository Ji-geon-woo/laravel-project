<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

// Route::get('/', [MainController::class, 'index']);

// Route::post('laravel', [MainController::class, 'fetchExample']);
// Route::post('laravel', 'MainController@fetchExample');
Route::post('singup_up', [MainController::class, 'singup']);
Route::post('email_test', [MainController::class, 'email_test']);

Route::get('/', function () {
    return view('mainpage');
});

Route::get('login', function () {
    return view('login');
});

Route::get('singup', function () {
    return view('singup');
});


