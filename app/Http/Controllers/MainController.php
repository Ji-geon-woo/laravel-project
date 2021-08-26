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
        $email_data = DB::table('userinfo')->where('email', $email)->first();

        if($email_data != null) {
            $return_data = array(true);
            return json_encode($return_data);
        }
        if($email_data == null) {
            $return_data = array(false);
            return json_encode($return_data);
        }
    } 
}