@extends('master.main')
@section('title','correct')
@section('content')
@push('styles')
    <link href="{{ asset('resources/css/kategore_correct.css') }}" rel="stylesheet">
@endpush
@push('scripts')
    <script src="{{ asset('resources/js/kategore_correct.js') }}"></script>
@endpush
    <div class="kategore_upload_box">
        <div class="kategore_upload_inner">
            <div class="kategore_idx">
                <p>카테고리</p>
                <input type="text" class="kategore_idx_value" readonly>
            </div>
            <div class="kategore_name">
                <p>카테고리명</p>
                <input type="text" class="kategore_name_value">
            </div>
            <div class="kategore_check">
                <p class="kategore_check_tag"></p>
            </div>
            <p class="kategore_onoff_name">사용여부</p>
            <div class="kategore_onoff">
                <input type="checkbox" name="on" checked>
                <p>사용</p>
                <input type="checkbox" name="off">
                <p>미사용</p>
            </div>                
            <div class="kategore_upload_btn">
                <button type="button">등록</button>
            </div>
        </div>
    </div>
@endsection