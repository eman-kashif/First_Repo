let ageInput = document.querySelector("#ageInput");
let calcBtn = document.querySelector("#CalcBtn");
let result = document.querySelector("#result");
let displayResult = document.querySelector("#displayResult");
let resetBtn = document.querySelector("#ResetBtn");

let mytimer;

calcBtn.addEventListener('click', function () {
    let age = ageInput.value.trim();

    if (age === "") {
        clearInterval(mytimer);
        let alert = document.querySelector(".alert");
        alert.classList.add('active');
        mytimer = setInterval(function () {
            alert.classList.remove('active');
        }, 3000)
    } else if (isNaN(age) || age < 0) {
        clearInterval(mytimer);
        let alert2 = document.querySelector(".alert2");
        alert2.classList.add('active');
        mytimer = setInterval(function () {
            alert2.classList.remove('active');
        }, 3000)
    } else {
        let answer = document.querySelector(".answer");
        answer.classList.add('active');
        let alert = document.querySelector(".alert");
        let alert2 = document.querySelector(".alert2");
        alert.classList.remove('active');
        alert2.classList.remove('active');

        let remaining_years = 90 - age;
        let remaining_weeks = remaining_years * 52;
        result.innerHTML = separateNumbersInComma(remaining_weeks);
        ageInput.value = "";
    }
});

function separateNumbersInComma(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

resetBtn.addEventListener('click', function () {
    location.reload();
})