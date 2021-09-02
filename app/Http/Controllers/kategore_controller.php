<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class kategore_controller extends Controller
{
    public function kategore_upload(Request $request) {
        $kategore_name = $request->kategore_value;
        $onoff = $request->onoff;

        $server_upload_value = array('name' => $kategore_name, 'use' => $onoff);
        DB::table('kategore')->insert($server_upload_value);

        return $request->all();
    }

    public function kategore_redundancy(Request $request) {
        $kategore_name = $request->kategore_value;
        
        $kategore_redundancy = DB::table('kategore')->where('name', $kategore_name)->first();
        if($kategore_redundancy != null) {
            return json_encode(true);
        }
        if($kategore_redundancy == null) {
            return json_encode( false);
        }
    }

    public function kategore_select(Request $request) {
        $users = DB::table('kategore')
                ->orderBy('idx', 'desc')
                ->get();
        return json_encode($users);
    }   

    public function kategore_change(Request $request) {
        $idx_value = $request->kategore_idx;

        $server_data = DB::table('kategore')->where('idx', $idx_value)->first();

        return json_encode($server_data);
    } 
}
