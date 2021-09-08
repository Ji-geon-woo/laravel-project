<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class brand_controller extends Controller
{
    public function upload(Request $request){
        $name_ko = $request->name_ko;
        $name_en = $request->name_en;
        $explantion = $request->explantion;

        $server_upload_value = array('name_ko' => $name_ko,'name_en' => $name_en, 'explantion' => $explantion);

        DB::table('brand')->insert($server_upload_value);

        return $request->all();
    }

    public function name_ko_select(Request $request){
        $name_ko = $request->name_ko;
        
        $name_ko_redundancy = DB::table('brand')->where('name_ko', $name_ko)->first();
        if($name_ko_redundancy != null) {
            return json_encode(true);
        }
        if($name_ko_redundancy == null) {
            return json_encode(false);
        }
    }

    public function name_en_select(Request $request){
        $name_en = $request->name_en;
        
        $name_en_redundancy = DB::table('brand')->where('name_en', $name_en)->first();
        if($name_en_redundancy != null) {
            return json_encode(true);
        }
        if($name_en_redundancy == null) {
            return json_encode(false);
        }
    }

    public function view() {
        $users = DB::table('brand')->paginate(2);

        return view('brand')->with('users', $users);
    }
}
