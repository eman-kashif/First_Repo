let timerDisplay = document.querySelector("#timerDisplay");

let startBtn = document.querySelector("#startBtn");

let stopBtn = document.querySelector("#stopBtn");

let theTimer = 0;

let myTimer;

startBtn.addEventListener("click", function () {

     myTimer = setInterval(function(){
        theTimer++;
        timerDisplay.innerHTML = theTimer;
    
    }, 1000); 
    
})

stopBtn.addEventListener("click", function () {
    clearInterval(myTimer);
})







