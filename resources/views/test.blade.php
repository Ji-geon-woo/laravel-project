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
                    <p><a>수정</a>/<a>삭제</a></p>
                </td>
            </tr>
            @endforeach
    </tbody>
</table>