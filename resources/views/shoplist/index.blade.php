@extends('master.main')
@section('title','Shoplist')
@section('content')
@push('styles')
    <link href="{{ asset('resources/css/shop_list.css') }}" rel="stylesheet">
@endpush
@push('scripts')
    <script src="{{ asset('resources/css/shop_list.js') }}"></script>
@endpush
    <div class="shop_list_inner">
        <div class="list_search">
            <p>검색어</p>
            <div class="search_list">
                <select>
                    <option value="상품명">상품명</option>
                    <option value="카테고리">카테고리</option>
                    <option value="브랜드">브랜드</option>
                </select>
            </div>
            <div class="search_input">
                <input type="text">
            </div>
            <div class="search_btn">
                <input type="button" value = "검색">
            </div>
        </div>
        <div class="list_state">
            <p class="list_state_name">상태</p>
            <div class="checkbox_list">
                <input type="checkbox" name="판매" id=""><p>판매</p>
                <input type="checkbox" name="판매" id=""><p>일시</p>
                <input type="checkbox" name="판매" id=""><p>품절</p>
                <input type="checkbox" name="판매" id=""><p>판매</p>
            </div>
        </div>
        <div class="shop_price">
            <p class="shop_price_name">가격</p>
            <div class="price_range">
                <input type="text" name="price_min" id="">
                <p>~</p>
                <input type="text" name="price_max" id="">
            </div>
        </div>
        <div class="day_update">
            <p class="day_update_name">등록일</p>
            <div class="day_range">
                <input type="date" name="day_min" id="">
                <p>~</p>
                <input type="date" name="day_max" id="">
            </div>   
        </div>
        <div class="shop_list">
            <p>상품</p>
            <a href="shop_upload"><p>상품등록</p></a>
            <div class="shop_inner">
                <table>
                    <thead>
                        <tr>
                            <th>상품</th>
                            <th>브랜드</th>
                            <th>카테고리</th>
                            <th>상품</th>
                            <th>상태</th>
                            <th>정가</th>
                            <th>판매가</th>
                            <th>할인율</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>   
    </div>
@endsection