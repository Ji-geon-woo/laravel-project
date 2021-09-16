let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

choice();
function choice(){
    let choice_value = confirm('삭제 하시겠습니까?');
    if(choice_value == true) {
        delete_brand();
    }
    if(choice_value == false) {
        alert('취소되었습니다.');
        location.href('./brand');
    }
} 

async function delete_brand() {
    let idx_value = sessionStorage.getItem('brand_change');
    console.log(idx_value);
    // console.log(cookie);
    let url = "brand_delete_serve";

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
            brand_idx : idx_value 
        })
    })
    .then(response => response.json())
    .then(response => {
        alert('삭제성공!');
        location.href('./brand');
    })
    .catch(function(error) {
        console.log(error);
    });
}