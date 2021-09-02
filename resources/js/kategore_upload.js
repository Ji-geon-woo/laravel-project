document.querySelector('.kategore_upload_btn button').addEventListener('click',kategore_upload);
document.querySelector('.kategore_name_value').addEventListener('change',kategore_name);
let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
async function kategore_upload() {
    const used = document.querySelector('input[name="on"]').checked;
    const un_used = document.querySelector('input[name="off"]').checked;
    const kategore_value = document.querySelector('.kategore_name_value').value;
    const kategore_name_test = await kategore_name();
    const url = 'kategore_upload_serve';
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
            kategore_value : kategore_value,
            onoff: on_off
        })
    })
    .then(response => response.json())
    .then(response => {
        alert('등록완료!');
        location.href = 'kategore';
    })
    .catch(function(error) {
        console.log(error);
    });
}
async function kategore_name() {
    let hell = await kategore_redundancy_test();

    if(hell == true){
        document.querySelector('.kategore_check_tag').innerHTML = "중복된 상품명 입니다."
        return true;
    }
    if(hell != true){
        document.querySelector('.kategore_check_tag').innerHTML = "중복되지 않는 상품 입니다."
        return false;
    }
}
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