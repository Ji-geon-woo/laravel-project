<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\kategore_controller;
use App\Http\Controllers\brand_controller;
use App\Http\Controllers\test_controller;

// login/singup route

Route::post('singup_up', [MainController::class, 'singup']);

Route::post('email_test', [MainController::class, 'email_test']);

Route::post('login', [MainController::class, 'login']);

// kategore route

Route::post('kategore_upload_serve', [kategore_controller::class, 'kategore_upload']);

Route::post('kategore_redundancy', [kategore_controller::class, 'kategore_redundancy']);

Route::post('kategore_select', [kategore_controller::class, 'kategore_select']);

Route::post('kategore_change', [kategore_controller::class, 'kategore_change']);

Route::post('kategore_change_serve', [kategore_controller::class, 'kategore_change_serve']);

// brand route

Route::get('brand',[brand_controller::class, 'view']);

Route::post('brand_upload_serve',[brand_controller::class, 'upload']);

Route::post('name_ko_select',[brand_controller::class, 'name_ko_select']);

Route::post('name_en_select',[brand_controller::class, 'name_en_select']);

Route::get('brand_change',[brand_controller::class,'change']);

Route::post('brand_select',[brand_controller::class, 'select']);

Route::get('brand_delete',[brand_controller::class, 'brand_delete']);

Route::post('brand_change_serve',[brand_controller::class, 'change_serve']);

Route::post('brand_delete_serve',[brand_controller::class, 'delete_serve']);

// Route::get('test',[test_controller::class, 'index']);

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

Route::get('correct', function () {
    return view('kategore_correct');
});

Route::get('brand_upload', function () {
    return view('brand_upload');
});

Route::get('brand_shoplist', function () {
    return view('shoplist.index');
});



