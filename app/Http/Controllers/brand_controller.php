<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
// use App\Models\Brand;

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
        $users = DB::table('brand')->paginate(8);

        return view('brand')->with('users', $users);
    }

    public function change() {
        return view('brand_change');
    }

    public function select(Request $request) {
        $idx = $request->brand_idx;

        $data = DB::table('brand')->where('idx',$idx)->get();

        return json_encode($data[0]);
    }

    public function change_serve(Request $request) {
        $idx = $request->idx;
        $name_ko = $request->name_ko;
        $name_en = $request->name_en;
        $explantion = $request->explantion;

        $num = DB::table('brand')->where('idx', $idx)->update(['name_ko' => $name_ko],['name_en' => $name_en],['explation' => $explantion]);
        return json_encode(null);
    }   

    public function brand_delete() {
        return view('brand_delete');
    }
    
    public function delete_serve(Request $request){
        $idx = $request->brand_idx;
        $ide = 1;
        echo $ide;

        $value = DB::table('brand')->where('idx', $idx)->delete();

        return json_encode(null);
    }
}  
