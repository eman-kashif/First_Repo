const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

const wrap = document.querySelectorAll('.wrap');

openBtn.addEventListener('click', function () {
    for (let x = 0; x < wrap.length; x++) {
        wrap[x].classList.add('visible');
    }
})

closeBtn.addEventListener('click', function () {
    for (let x = 0; x < wrap.length; x++) {
        wrap[x].classList.remove('visible');
    }
})
