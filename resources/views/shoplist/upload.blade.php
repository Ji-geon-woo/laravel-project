@extends('master.main')
@section('title','upload')
@section('content')
@push('styles')
    <link href="{{ asset('resources/css/shop_upload.css') }}" rel="stylesheet">
@endpush
@push('scripts')
    <script src="{{ asset('resources/css/shop_list.js') }}"></script>
@endpush
    
@endsection