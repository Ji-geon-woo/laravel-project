@extends('master.main')
@section('title','Kategore')
@section('content')
@push('styles')
    <link href="{{ asset('resources/css/kategore.css') }}" rel="stylesheet">
@endpush
@push('scripts')
    {{--  <script src="{{ asset('resources/js/login/login.js') }}"></script>  --}}
@endpush
    <div class="kategore_box">
        <div class="kategore_inner">
            <div class="kategore_btn">
                <a href="upload"><button type="submit">카테고리 등록</button></a>
            </div>
            <div class="kategore_list">
                <table>
                    <thead>
                        <tr>
                            <th>카테고리</th>
                            <th>카테고리명</th>
                            <th>사용여부</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
@endsection