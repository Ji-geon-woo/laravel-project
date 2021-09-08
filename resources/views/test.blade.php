<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
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
                @foreach ($users as $user)
                    <tr>
                        <td>
                            {{ $user->idx }}
                        </td>
                        <td>
                            {{ $user->name_ko }}
                        </td>
                        <td>
                            {{ $user->name_en }}
                        </td>
                        <td>
                            <p>null</p>
                        </td>
                    </tr>
                @endforeach
        </tbody>
    </table>
    {{ $users->links() }}
</body>
</html>