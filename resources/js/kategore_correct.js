let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
document.querySelector('.kategore_name_value').addEventListener('change',kategore_name);
document.querySelector('.kategore_upload_btn button').addEventListener('click',kategore_upload);
data_loading();

// 기본 데이터 세팅
async function data_loading() {
    let server_data = await kategore_serve_search();
    document.querySelector('.kategore_idx_value').value = server_data['idx'];
    document.querySelector('.kategore_name_value').value = server_data['name'];
}

// 해당 칼럼 긁어오기
async function kategore_serve_search() {
    let idx_value = sessionStorage.getItem('kategore_change');
    let url = 'kategore_change';
    return fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-TOKEN": token
            },
        method: 'post',
        credentials: "same-origin",
        body: JSON.stringify({
            kategore_idx : idx_value 
        })
    })
    .then(response => response.json())
    .then(response => {
        return response;
    })
    .catch(function(error) {
        console.log(error);
    });
}

// 이름 중복 text html 전송
async function kategore_name() {
    let hell = await kategore_redundancy_test();
    let server_data = await kategore_serve_search();
    let kategore_name_1 = document.querySelector('.kategore_name_value').value;
    let kategore_name_2 = server_data['name'];

    // 중복 검사 if
    if(hell == true){
        if(kategore_name_1 == kategore_name_2) {
            document.querySelector('.kategore_check_tag').innerHTML = "중복되지 않는 상품명 입니다."
            return false;
        }
        document.querySelector('.kategore_check_tag').innerHTML = "중복된 상품명 입니다."
        return true;
    }
    if(hell != true){
        document.querySelector('.kategore_check_tag').innerHTML = "중복되지 않는 상품 입니다."
        return false;
    }
}

// 중복검사
async function kategore_redundancy_test(){
    const kategore_value = document.querySelector('.kategore_name_value').value;
    const url = 'kategore_redundancy';
    return fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": token
                },
            method: 'post',
            credentials: "same-origin",
            body: JSON.stringify({
                kategore_value : kategore_value
            })
        })
        .then(response => response.json())
        .then(response => {
            return response;
        })
        .catch(function(error) {
            console.log(error);
        });
}

// 변경 삽입
async function kategore_upload() {
    const used = document.querySelector('input[name="on"]').checked;
    const un_used = document.querySelector('input[name="off"]').checked;
    const kategore_value = document.querySelector('.kategore_name_value').value;
    const idx_value = sessionStorage.getItem('kategore_change');
    const kategore_name_test = await kategore_name();
    const url = 'kategore_change_serve';
    let on_off;
    if(used == true && un_used == true){
        alert('올바르지 않는 선택 입니다.');
        return 0;
    }
    if(used == false && un_used == false) {
        alert('올바르지 않는 선택 입니다.');
        return 0;
    }
    if(kategore_value == null) {
        alert('카테고리 입력 값을 다시 확인해주세요.');
        return 0;
    }
    if(used == true) {
        on_off = '사용';
    }
    if(used == false){
        on_off = '미사용';
    }
    if(kategore_name_test == true){
        alert('중복된 카테고리 값 입니다.');
        return 0;
    }
    fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-TOKEN": token
            },
        method: 'post',
        credentials: "same-origin",
        body: JSON.stringify({
            idx : idx_value,
            name_value : kategore_value,
            onoff: on_off
        })
    })
    .then(response => response.json())
    .then(response => {
        console.log('null');
        alert('수정 완료! 카테고리로 넘어갑니다');
        location.href = '/kategore';
    })
    .catch(function(error) {
        console.log(error);
    });
}