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
                <button type="submit">카테고리 등록</button>
            </div>
            <div class="kategore_list">
                <table>
                    <tr>
                        <th>카테고리</th>
                        <th>카테고리</th>
                        <th>카테고리</th>
                        <th>카테고리</th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
@endsection