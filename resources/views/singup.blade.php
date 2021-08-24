@extends('master.main')
@section('title','Singup')
@section('content')
@push('styles')
    <link href="{{ asset('resources/css/singup.css') }}" rel="stylesheet">
@endpush
    <div class="singupbox">
        <div class="singupinner">
            <div class="singupinput">
                <div class="email">
                    <p>이메일</p>
                    <input type="email">
                </div>
                <div class="name">
                    <p>이름</p>
                    <input type="text">
                </div>
                <div class="password">
                    <p>비밀번호</p>
                    <input type="password">
                </div>
                <div class="password">
                    <p>비밀번호</p>
                    <input type="password">
                </div>
            </div>
            <div class="singupbutton">
                <input type="button" value="회원가입">
            </div>
        </div>
    </div>
@endsection