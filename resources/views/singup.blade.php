@extends('master.main')
@section('title','Singup')
@section('content')
@push('styles')
    <link href="{{ asset('resources/css/singup.css') }}" rel="stylesheet">
@endpush
@push('scripts')
    <script src="{{ asset('resources/js/singup.js') }}"></script>
@endpush
    <div class="singupbox">
        <div class="singupinner">
            <form id="sinupform" method="post" action="{{ asset('resources/js/singup.js') }}">
                @csrf
                <div class="singupinput">
                    <div class="email">
                        <p>이메일</p>
                        <input type="email" id="email">
                    </div>
                    <div class="email_ok">
                        <p id="email_alert"></p>
                    </div>
                    <div class="name">
                        <p>이름</p>
                        <input type="text" id="name">
                    </div>
                    <div class="password">
                        <p>비밀번호</p>
                        <input type="password" id="frist_password">
                    </div>
                    <div class="password">
                        <p>비밀번호</p>
                        <input type="password" id="second_password">
                    </div>
                    <div class="password_ok">
                        <p id="password_alert"></p>
                    </div>
                </div>
                <div class="singupbutton">
                    <button type="button" id="fecth_ajax">회원가입</button>
                </div>
            </form>
        </div>
    </div>
@endsection