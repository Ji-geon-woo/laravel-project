<?php
// test_controller.php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class test_controller extends Controller
{
    public function index() {
        $users = DB::table('brand')->paginate(5);

        return view('test')->with('users', $users);
    }
}