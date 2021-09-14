let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
document.querySelector('.upload_btn').addEventListener('click',dataupload);
document.querySelector('.cnl').addEventListener('click',cencel);
document.querySelector('.name_ko input').addEventListener('change',name_ko_test_text);
document.querySelector('.name_en input').addEventListener('change',name_en_test_text);

data_loading();
async function data_loading() {
    let server_data = await serve_search();

    document.querySelector('.idx input').value = server_data['idx'];
    document.querySelector('.name_ko input').value = server_data['name_ko'];
    document.querySelector('.name_en input').value = server_data['name_en'];
    document.querySelector('.explanation_text textarea').value = server_data['explantion'];
}

async function serve_search() {
    let idx_value = sessionStorage.getItem('brand_change');

    let url = 'brand_select';
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
            brand_idx : idx_value 
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

async function dataupload(){
    let name_ko = document.querySelector('.name_ko input').value;
    let name_en = document.querySelector('.name_en input').value;
    let explantion = document.querySelector('.explanation_text textarea').value;
    let idx_value = sessionStorage.getItem('brand_change');

    // console.log(explantion);
    let ko_test = await name_ko_test_text();
    let en_test = await name_en_test_text();

    if(name_ko == null){
        alert('한글 브랜드명이 공백 입니다. 다시 한번 검사해주세요.');
        return null;
    }
    if(name_en == null){
        alert('영문 브랜드명이 공백 입니다. 다시 한번 검사해주세요.');
        return null;
    }
    if(ko_test == true){
        alert('한글 브랜드명이 중복 입니다. 다시 한번 검사해주세요.');
        return null;
    }
    if(en_test == true){
        alert('영문 브랜드명이 중복 입니다. 다시 한번 검사해주세요.');
        return null;
    }
    if(explantion == ''){
        alert('설명란이 공백 입니다. 다시 한번 검사해주세요.');
        return null;
    }

    let url = "/brand_change_serve";
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
            name_ko : name_ko,
            name_en : name_en,
            explantion : explantion
        })
    })
    .then(response => response.json())
    .then(response => {
        alert('브랜드 수정 성공!');
        location.href = '/brand';
    })
    .catch(function(error) {
        console.log(error);
    });
}

function cencel(){
    alert('취소 되었습니다.');
    location.href = '/brand';    
}

async function name_ko_test_text(){
    let name_ko_test = await select_name_ko();
    let server_data = await serve_search();
    let name_1 = document.querySelector('.name_ko input').value;
    let name_2 = server_data['name_ko'];
    
    // console.log(name_1 == name_2);
    
    if(name_ko_test == true){
        document.querySelector('.name_ko_test p').innerHTML = "중복된 값 이거나 공백 입니다.";
        if(name_1 == name_2){
            document.querySelector('.name_ko_test p').innerHTML = "중복되지 않는 값 입니다.";
            return false;
        }
        return true;
    }
    if(name_ko_test == false){
        document.querySelector('.name_ko_test p').innerHTML = "중복되지 않는 값 입니다.";
        return false;
    }
}

async function name_en_test_text(){
    let name_en_test = await select_name_en();
    let server_data = await serve_search();
    let name_1 = document.querySelector('.name_en input').value;
    let name_2 = server_data['name_en'];
    
    // console.log(name_1 == name_2);
    
    if(name_en_test == true){
        document.querySelector('.name_en_test p').innerHTML = "중복된 값 이거나 공백 입니다.";
        if(name_1 == name_2){
            document.querySelector('.name_en_test p').innerHTML = "중복되지 않는 값 입니다.";
            return false;
        }
        return true;
    }
    if(name_en_test == false){
        document.querySelector('.name_en_test p').innerHTML = "중복되지 않는 값 입니다.";
        return false;
    }
}

async function select_name_ko(){
    let name_ko = document.querySelector('.name_ko input').value;
    let url = "/name_ko_select";

    if(name_ko == null){
        return true;
    }
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
            name_ko : name_ko
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

async function select_name_en(){
    let name_en = document.querySelector('.name_en input').value;
    let url = "/name_en_select";

    if(name_en == null){
        return true;
    }

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
            name_en : name_en
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
