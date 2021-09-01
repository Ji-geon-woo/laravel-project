document.querySelector('#login_btn').addEventListener('click', login);
document.querySelector('#email').addEventListener('change', email_test);
let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('username'))
    .split('=')[1];

    if(cookieValue != null) {
        email_cookie(unescape(cookieValue));        
    }

async function login(){
    let url = 'login';

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let email_testing = await email_test();
    console.log(email_testing);

    if(email_testing == true && password != null){
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
                password: password
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if(response == false) {
                alert('로그인 실패! 이메일, 비밀번호를 확인해주세요!');
                location.replace('/');
            }
            if(response != false && response != "") {
                alert('로그인 성공!');
                sessionStorage.setItem('user_info_name',response);
                location.replace('/');
            }
            if(document.querySelector('input[name="email_cookie"]').checked == true) {
                const basic = 'username'
                document.cookie = encodeURIComponent(basic) + '=' + encodeURIComponent(email);
                alert(document.cookie);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
    }
    if(email_testing == false || email_testing == null || password == null ) {
        alert('이메일, 비밀번호를 다시 한번 확인해주세요!')
    }
}

async function email_test(){
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let email = document.querySelector('#email').value;

    document.querySelector('.email_check').style.margin='20px 0 0 0';
    document.querySelector('.loginbox').style.height='436px';
    
    if (email.match(regExp) != null) {
        document.querySelector(".email_check_tag").innerHTML = "올바른 형식의 이메일 입니다.";
        return true;
    }
    if (email.match(regExp) == null){
        document.querySelector(".email_check_tag").innerHTML = "올바르지 않는 이메일 입니다.";
        return false;
    }
}

function email_cookie(cookieValue) {
    document.querySelector('#email').value = cookieValue;
}