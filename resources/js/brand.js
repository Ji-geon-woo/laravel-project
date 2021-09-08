let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
// list_load();

async function list_load() {
    var data = await list_load_server();
    var listTbody = document.querySelector("tbody");
    var test_data = JSON.stringify(data);
    console.log(typeof(test_data));
    // data.forEach(function(val) {
    //     listTbody.innerHTML +="<tr><td>" + val['idx'] + "</td><td>" + val['name_ko'] + "</td><td>" + val['name_en'] + "</td><td>" + '<a href="/correct" onclick="myFunction('+ num +')">수정</a> <a href="/correct" onclick="myFunction('+ num +')">삭제</a>' + "</td></tr>";
    //     num--;
    // });
}

function myFunction(num) {
    sessionStorage.setItem('kategore_change',num);
}

// async function list_load_server() {
//     let url = 'view';
//     return fetch(url, {
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json, text-plain, */*",
//                 "X-Requested-With": "XMLHttpRequest",
//                 "X-CSRF-TOKEN": token
//                 },
//             method: 'post',
//             credentials: "same-origin"
//         })
//         .then(response => response.json())
//         .then(response => {
//             return response['data'];
//         })
//         .catch(function(error) {
//             console.log(error);
//         }); 
// }
