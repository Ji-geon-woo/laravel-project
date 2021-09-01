<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class kategore_controller extends Controller
{
    public function kategore_upload(Request $request){
        $kategore_name = $request->kategore_value;
        $onoff  = $request->onoff;

        $server_upload_value = array('name' => $kategore_name, 'use' => $onoff);
        DB::table('kategore')->insert($server_upload_value);

        return $request->all();
    }
    public function kategore_redundancy(Request $request){
        $kategore_name = $request->kategore_value;
        
        $kategore_redundancy = DB::table('kategore')->where('name', $kategore_name)->first();
        if($kategore_redundancy != null) {
            return json_encode(true);
        }
        if($kategore_redundancy == null) {
            return json_encode( false);
        }
    }
}
