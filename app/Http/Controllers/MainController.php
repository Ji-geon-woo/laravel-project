<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index () {
        $users = DB::table('userinfo')->get();
        $result = json_encode($users,JSON_UNESCAPED_UNICODE);
        return view('mainpage', ['title' => $result]);

    }
}