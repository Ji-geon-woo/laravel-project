<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index () {
        return view("mainpage");
    }
    public function singup(Request $request){
        $email = $request->email;
        $name  = $request->name;
        $password = $request->frist_password;

        $values = array('level' => 1, 'name' => $name,'email' => $email,'password' => $password );
        DB::table('userinfo')->insert($values);

        return $request->all();
    } 
    public function email_test(Request $request){
        $email = $request->email;
        $email_save = DB::table('userinfo')
            ->select('email', $email)
            ->get();
        return $email_save;
    } 
}