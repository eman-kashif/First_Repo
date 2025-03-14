let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

let arrow1 = document.querySelector("#arrow1");
let arrow2 = document.querySelector("#arrow2");
let arrow3 = document.querySelector("#arrow3");
let arrow4 = document.querySelector("#arrow4");

arrow1.addEventListener('click', function () {
    btn1.click();
})

arrow2.addEventListener('click', function () {
    btn2.click();
})

arrow3.addEventListener('click', function () {
    btn3.click();
})

arrow4.addEventListener('click', function () {
    btn4.click();
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

