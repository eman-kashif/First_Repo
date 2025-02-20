// let my_textbox = document.querySelector("#my_textbox");

// document.querySelector("#my_title").innerHTML= "MY WEBSITE";

let title =document.querySelector("#my_title");

let my_textbox = document.querySelector("#my_textbox");

let btn1 =document.querySelector("#mybtn") 

btn1.addEventListener('click', function () {
    title.innerHTML = my_textbox.value;
})





