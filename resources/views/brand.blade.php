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
                <a href="brand_upload"><button>브랜드 등록</button></a>
            </div>
            <div class="brand_list">
                <table>
                    <thead>
                        <tr>
                            <th>브랜드</th>
                            <th>한글명</th>
                            <th>영문명</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <div class="direction_key">
                <p><< < 1 2 3 4 5 > >></p>
            </div>
        </div>
    </div>
@endsection