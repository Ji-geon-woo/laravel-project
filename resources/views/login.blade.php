@extends('master.main')
@section('title','Login')
@section('content')
@push('styles')
    <link href="{{ asset('resources/css/login.css') }}" rel="stylesheet">
@endpush
@push('scripts')
    <script src="{{ asset('resources/js/login/login.js') }}"></script>
@endpush
    <div class="loginbox">
        <div class="logininner">
            <form id="sinupform" method="post" action="">
                @csrf
                <div class="logininput">
                    <div class="email">
                        <p>이메일</p>
                        <input type="email" id="email">
                    </div>
                    <div class="email_check">
                        <p class="email_check_tag"></p>
                    </div>
                    <div class="password">
                        <p>비밀번호</p>
                        <input type="password" id="password">
                    </div>
                </div>
                <div class="loginbutton">
                    <button type="button" id="login_btn">로그인</button>
                </div>
                <div class="emailremeber">
                    <input type="checkbox" name="email_cookie" >
                    <p>이메일 기억하기</p>
                </div>
                <div class="singup">
                    <a href="/singup">관리자 등록하기</a>
                </div>
            </form>
        </div>
    </div>
@endsection