document.querySelector('.log_out').addEventListener('click', del_session);
    if(sessionStorage.getItem('user_info_name') != null && sessionStorage.getItem('user_info_name') != ''){
        set_session(sessionStorage.getItem('user_info_name'));
    } 

function set_session(user_name) {
    document.querySelector(".login_text").innerHTML = null;
    document.querySelector(".login_user_name_text").innerHTML = user_name;
    document.querySelector(".log_out").innerHTML = '로그아웃';
    document.querySelector('.logout_box li').style.margin= '35px 50px 5px 50px';
}

function del_session() {
    sessionStorage.setItem('user_info_name', '');
    document.querySelector(".login_text").innerHTML = '로그인';
    document.querySelector(".login_user_name_text").innerHTML = null;
    document.querySelector(".log_out").innerHTML = null;
    document.querySelector('.logout_box li').style.margin= '65px 50px 5px 50px';
    alert('로그아웃 성공!');
}