@extends('master.main')
@section('title','Singup')
@section('content')
@push('styles')
    <link href="{{ asset('resources/css/brand_upload.css') }}" rel="stylesheet">
@endpush
@push('scripts')
    <script type="module" src="{{ asset('resources/js/brand_upload.js') }}"></script>
@endpush
    <div class="upload_box">
        <div class="upload_inner">
            <div class="name_ko">
                <p>한글명</p>
                <input type="text">
            </div>
            <div class="name_ko_test">
                <p></p>
            </div>
            <div class="name_en">
                <p>영어명</p>
                <input type="text">
            </div>
            <div class="name_en_test">
                <p></p>
            </div>
            <div class="explanation_text">
                <p>설명</p>
                <textarea cols="50" rows="10"></textarea>
            </div>
            <button class="upload_btn">등록</button>
            <button class="cnl">취소</button>
        </div>
    </div>
@endsection