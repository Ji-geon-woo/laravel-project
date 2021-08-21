<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('resources/css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('resources/css/reset.css') }}" rel="stylesheet">
    <title>@yield('title')</title>
</head>
<body>
    <div class="mainbox">
        <div class="mainbar">
            <ul class="mainbarContent">
                <li>
                    <a href="/menu1"><p>메뉴1</p></a>
                </li>
                <li>
                    <a href="/menu2"><p>메뉴2</p></a>
                </li>
                <li>
                    <a href="/menu3"><p>메뉴3</p></a>
                </li>
                <li>
                    <a href="/menu4"><p>메뉴4</p></a>
                </li>
            </ul>
        </div>
        <div class="maincontant">
            <a>페이지 구성요소</a>
        </div>
    </div>
</body>
</html>