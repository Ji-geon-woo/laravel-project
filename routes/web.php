<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\kategore_controller;

Route::post('singup_up', [MainController::class, 'singup']);

Route::post('email_test', [MainController::class, 'email_test']);

Route::post('login', [MainController::class, 'login']);

Route::post('kategore_upload_serve', [kategore_controller::class, 'kategore_upload']);

Route::post('kategore_redundancy', [kategore_controller::class, 'kategore_redundancy']);

Route::get('/', function () {
    return view('mainpage');
});

Route::get('login', function () {
    return view('login');
});

Route::get('singup', function () {
    return view('singup');
});

Route::get('kategore', function () {
    return view('kategore');
});

Route::get('upload', function () {
    return view('kategore_upload');
});



