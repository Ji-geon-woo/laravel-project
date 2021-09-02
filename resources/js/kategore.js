let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
list_load();

async function list_load() {
    var data = await list_load_server();
    var listTbody = document.querySelector(".kategore_table tbody");
    var num = data.length;
    data.forEach(function(val) {
        listTbody.innerHTML +="<tr><td>" + val['idx'] + "</td><td>" + val['name'] + "</td><td>" + val['use'] + "</td><td>" + '<a href="/correct" onclick="myFunction('+ num +')">수정하기</a>' + "</td></tr>";
        num--;
    });
}

function myFunction(num) {
    sessionStorage.setItem('kategore_change',num);
}

async function list_load_server() {
    let url = 'kategore_select';
    return fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": token
                },
            method: 'post',
            credentials: "same-origin"
        })
        .then(response => response.json())
        .then(response => {
            return response;
        })
        .catch(function(error) {
            console.log(error);
        }); 
}
