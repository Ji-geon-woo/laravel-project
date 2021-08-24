<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index(){ 
        $users = DB::table('userinfo')->get();

        return view('singup', ['users' => $users]);
    }

}
