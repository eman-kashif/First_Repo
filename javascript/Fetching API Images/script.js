let robotContainer = document.querySelector("#robotContainer"); 

for (let i = 1; i <= 20; i++) {

    fetch(`https://robohash.org/${i}`).then((response) => {
        
        let img = document.createElement('img');
        img.src = response.url;
        
        robotContainer.appendChild(img);
    
    }).catch((error) => {
        console.error ("failed to get data: ", error); 
    })
    
}

 