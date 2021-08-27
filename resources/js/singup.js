document.querySelector('#fecth_ajax').addEventListener('click', onClick);
document.querySelector('#email').addEventListener('change', onChange_email);
document.querySelector('#second_password').addEventListener('change', onChange_password);

let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

async function onClick(){
    // form 데이터 확인
    let url = 'singup_up';
    let email_test = await onChange_email();
    let password_test = onChange_password();
    
    let email = document.querySelector('#email').value;
    let name = document.querySelector('#name').value;
    let frist_password = document.querySelector('#frist_password').value;

    console.log(email_test);
    if(email_test == true && password_test != null && name != ''){
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
                email: email,
                name: name,
                frist_password: frist_password,
            })
        })
        .then(response => response.json())
        .then(response => {
            alert('회원가입 성공! 메인페이지로 이동합니다!');
            location.replace('/')
        })
        .catch(function(error) {
            console.log(error);
        });
    }
    if(email_test == null) {
        alert('이메일 양식을 다시 한번 확인해주세요.');
        return null;
    }
    if(email_test == false) {
        alert('이메일이 중복입니다. 다시 한번 확인해주세요.');
        return null;
    }
    if(password_test  == null) {
        alert('비밀번호를 다시 한번 확인해주세요.');
        return null;
    }
    if(name == '') {
        alert('이름을 다시 한번 확인해주세요.');
        return null;
    }
}

async function onChange_email(){
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let email = document.querySelector('#email').value;
    let test = await email_test();
    

    document.querySelector('.email_ok').style.margin='20px 0 0 0';
    document.querySelector('.singupbox ').style.height='536px';
    if (email.match(regExp) != null) {
        if(test != true) {
            document.querySelector("#email_alert").innerHTML = "올바른 형식의 이메일 입니다.";
            return true;
        }
        document.querySelector("#email_alert").innerHTML = "중복된 이메일 입니다.";
        return false;
    }
    if (email.match(regExp) == null){
        document.querySelector("#email_alert").innerHTML = "올바르지 않는 이메일 입니다.";
    }
}

async function email_test(){
    let email = document.querySelector('#email').value;
    const url = 'email_test';
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
                email: email
            })
        })
        .then(response => response.json())
        // .then(response => console.log('Success:', JSON.stringify(response)))
        .then(response => {
            if(response[0] == true){
                return true;
            }
            if(response[0] != true){
                return false;
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function onChange_password(){
    let frist_password = document.querySelector('#frist_password').value;
    let second_password = document.querySelector('#second_password').value;

    document.querySelector('.password_ok').style.margin='20px 0 0 0';
    document.querySelector('.singupbox ').style.height='576px';
    if (frist_password == second_password) {
        document.querySelector("#password_alert").innerHTML = "동일한 비밀번호 입니다.";
        let url = 'laravel';
        
        return 1;
    }
    if (frist_password != second_password){
        document.querySelector("#password_alert").innerHTML = "동일하지 않는 비밀번호 입니다.";
    }
}

