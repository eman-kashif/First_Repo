
let title = document.querySelector("#title");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let defaultBtn = document.querySelector("#defaultBtn");


btn1.addEventListener('click', function () {
    title.innerHTML = "Button 1 has been clicked";
})

btn2.addEventListener('click', function () {
    title.innerHTML = "Greate! Button 2 has been clicked";
})

btn3.addEventListener('click', function () {
    title.innerHTML = "Awesome! Button 3 has been clicked";
})

defaultBtn.addEventListener('click', function () {
    title.innerHTML = "WELCOME TO THIS PAGE";
})