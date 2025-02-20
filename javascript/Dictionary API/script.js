function defineThis() {

    

    let inputWord = document.querySelector("#inputWord");

    let liParent = document.querySelector("#liParent");

    let targetWord = inputWord.value;

    if(targetWord == "") {
        alert("Please enter a word");
    }

    else {
        let existingLi = document.querySelector("li");
    if(existingLi) {
        existingLi.remove();
    }



//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${targetWord}`).then((response) => {
//     return response.text()
// }).then((data) => {
//     const myData = JSON.parse(data);

    

//     let li = document.createElement('li');

//     li.innerHTML = myData[0].meanings[0].definitions[0].definition;

//     liParent.appendChild(li);

//     console.log(myData[0].meanings[0].definitions[0].definition);

// }).catch((error) => {
//     console.error ("failed to get data: ", error); 
// }) 

fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${targetWord}`).then((response) => {
    return response.json()
}).then((myData) => {
    
    let li = document.createElement('li');

    li.innerHTML = myData[0].meanings[0].definitions[0].definition;

    liParent.appendChild(li);

    console.log(myData[0].meanings[0].definitions[0].definition);

}).catch((error) => {
    console.error ("failed to get data: ", error); 
}) 

    }
    
}