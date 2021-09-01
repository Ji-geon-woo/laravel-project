<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('resources/css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('resources/css/reset.css') }}" rel="stylesheet">
    <script type="module" src="{{ asset('resources/js/main.js') }}"></script>
    @stack('styles')
    <title>@yield('title')</title>
</head>
<body>
    <div class="mainbox">
        <div class="mainbar">
            <ul class="mainbarContent">
                <div class="mainmenu">
                    <li>
                        <a href="/menu1"><p>메뉴1</p></a>
                    </li>
                    <li>
                        <a href="/menu2"><p>메뉴2</p></a>
                    </li>
                </div>
                <div class="logout_box">
                    <li>
                        <a href="/" onclick="del_session()"><p class="log_out"></p></a>
                        <a href="/menu3"><p>메뉴3</p></a>
                    </li>
                </div>
                <div class="login_info">
                    <li>
                        <a href="/login"><p class="login_text">로그인</p></a>
                        <a href="/log-out"><p class="login_user_name_text"></p></a>               
                        <a href="/menu4"><p>메뉴4</p></a>
                    </li>
                </div>
            </ul>
        </div>
        @yield('content')
    </div>
</body>
@stack('scripts')
</html>