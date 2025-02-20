function addTwoNumbers(num1, num2, num3) {
    let sum = num1 + num2;
    console.log(sum);
}

function greet(typeOfGreeting) {
    alert(typeOfGreeting);
}

let btn1 = document.querySelector("#btn1");

let greetBtn = document.querySelector("#greetBtn");

btn1.addEventListener('click', function () {
    
addTwoNumbers(3, 8, 5);
})

greetBtn.addEventListener('click', function () {
    greet("Assalam O Alikum");
})