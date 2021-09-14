let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
delete_brand();

async function delete_brand() {
    let idx_value = sessionStorage.getItem('brand_change');
    console.log(idx_value);
    
    let url = "brand_delete_serve"
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