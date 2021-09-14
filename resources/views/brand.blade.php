@extends('master.main')
@section('title','Singup')
@section('content')
@push('styles')
    <link href="{{ asset('resources/css/brand.css') }}" rel="stylesheet">
@endpush
@push('scripts')
    <script src="{{ asset('resources/js/brand.js') }}"></script>
@endpush
    <div class="brand_box">
        <div class="brand_inner">
            <div class="brand_upload_btn">
                <a href="brand_upload"><button>브랜드 등록</button></a>
            </div>
            <div class="brand_list">
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
                                    <a href="brand_change" onclick="myFunction({{ $user->idx }})">수정</a>/<a href="brand_delete" onclick="myFunction({{ $user->idx }})">삭제</a>
                                </td>
                            </tr>
                            @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection