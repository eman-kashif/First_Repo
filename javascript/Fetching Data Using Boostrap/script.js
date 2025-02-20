let char_list = document.querySelector("#char_list");

for (let i = 1; i < 10; i++) {

    fetch(`https://swapi.dev/api/people/${i}/`).then((response) => {
        return response.text()
    }).then((data) => {
        const myData = JSON.parse(data);
         
        let tr = document.createElement('tr');
        tr.innerHTML =`
                <td>${myData.name}</td>
                <td>${myData.height}</td>
                <td>${myData.hair_color}</td>`;
        char_list.appendChild(tr);
    
    }).catch((error) => {
        console.error ("failed to get data: ", error); 
    })
    
}

