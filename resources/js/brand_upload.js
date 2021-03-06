let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
document.querySelector('.upload_btn').addEventListener('click',dataupload);
document.querySelector('.cnl').addEventListener('click',cencel);
document.querySelector('.name_ko input').addEventListener('change',name_ko_test_text);
document.querySelector('.name_en input').addEventListener('change',name_en_test_text);
async function dataupload(){
    let name_ko = document.querySelector('.name_ko input').value;
    let name_en = document.querySelector('.name_en input').value;
    let explantion = document.querySelector('.explanation_text textarea').value;

    console.log(explantion);
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

    let url = "/brand_upload_serve";
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
            name_ko : name_ko,
            name_en : name_en,
            explantion : explantion
        })
    })
    .then(response => response.json())
    .then(response => {
        alert('브랜드 등록 성공!');
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

    if(name_ko_test == true){
        document.querySelector('.name_ko_test p').innerHTML = "중복된 값 이거나 공백 입니다.";
        return true;
    }
    if(name_ko_test == false){
        document.querySelector('.name_ko_test p').innerHTML = "중복되지 않는 값 입니다.";
        return false;
    }
}

async function name_en_test_text(){
    let name_en_test = await select_name_en();

    if(name_en_test == true){
        document.querySelector('.name_en_test p').innerHTML = "중복된 값 이거나 공백 입니다.";
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