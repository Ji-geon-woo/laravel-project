@extends('master.main')
@section('title','Singup')
@section('content')
@push('styles')
    <link href="{{ asset('resources/css/brand.css') }}" rel="stylesheet">
@endpush
@push('scripts')
    {{-- <script type="module" src="{{ asset('resources/js/singup/singup_contorller.js') }}"></script> --}}
@endpush
    <div class="brand_box">
        <div class="brand_inner">
            <div class="brand_upload_btn">
                <button>브랜드 등록</button>
            </div>
            <div class="brand_list">
                
            </div>
        </div>
    </div>
@endsection