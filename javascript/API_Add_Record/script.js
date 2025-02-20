const myForm = document.querySelector("#myForm");

const dataHolder = document.querySelector("#dataHolder");

fetch('https://my-api-23a35-default-rtdb.asia-southeast1.firebasedatabase.app/user.json').then(response => response.json()).then(data => {
    for (const key in data ) {
        let tr = document.createElement('tr')
        tr.innerHTML =`<td>${data[key].name}</td><td>${data[key].email}</td>`
        dataHolder.appendChild(tr);
        
    }
}).catch(error => {
    console.log('Something went wrong:' , error);
});

myForm.addEventListener('submit', (x) =>{
    x.preventDefault();
    const formWithData = new FormData(myForm);

    fetch('https://my-api-23a35-default-rtdb.asia-southeast1.firebasedatabase.app/user.json', {
        method: 'Post',
        body: JSON.stringify(Object.fromEntries(formWithData)),
        headers: {
            'Content-Type':'application/json'
        } 
    }).then(() => {
        myForm.reset();
        window.location.href='http://127.0.0.1:5500/confirm.html'
    })
    .catch(error => {
        console.log('Something went wrong:' , error);
    });

})