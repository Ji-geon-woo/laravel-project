@extends('master.main')
@section('title','Login')
@section('content')
@push('styles')
    <link href="{{ asset('resources/css/login.css') }}" rel="stylesheet">
@endpush
    <div class="loginbox">
        <div class="logininner">
            <div class="logininput">
                <div class="email">
                    <p>이메일</p>
                    <input type="email">
                </div>
                <div class="password">
                    <p>비밀번호</p>
                    <input type="password">
                </div>
            </div>
            <div class="loginbutton">
                <input type="button" value="로그인">
            </div>
            <div class="emailremeber">
                <input type="checkbox" name="" id="">
                <p>이메일 기억하기</p>
            </div>
            <div class="singup">
                <a href="/singup">관리자 등록하기</a>
            </div>
        </div>
    </div>
@endsection