let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
data_loading();
document.querySelector('.kategore_name_value').addEventListener('change',kategore_name);

async function data_loading() {
    let server_data = await kategore_serve_search();
    document.querySelector('.kategore_idx_value').value = server_data['idx'];
    document.querySelector('.kategore_name_value').value = server_data['name'];
    console.log(server_data['idx']);
}

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