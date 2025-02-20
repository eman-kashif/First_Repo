let container = document.querySelector("#container");

fetch('https://swapi.dev/api/people/25/').then((response) => {
    return response.text()
}).then((data) => {
    const myData = JSON.parse(data);
    
    let p = document.createElement('p');
    p.innerHTML =myData.name;
    container.appendChild(p);

}).catch((error) => {
    console.error ("failed to get data: ", error);
})