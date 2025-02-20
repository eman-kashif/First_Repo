let myKeys = document.querySelectorAll('.key');

for (let x = 0; x < myKeys.length; x++) {
  myKeys[x].addEventListener('click', function () {
    //alert("button "+mykeys[x].innerHTML + " is clicked");
    //snd.play();
    // playSnd('f');
      playSnd(myKeys[x].innerHTML.toLowerCase());
  })

}

document.addEventListener('keydown', function (btn) {
  // console.log(btn.key);
  playSnd(btn.key.toLowerCase());

  let pressed_key = btn.key.toLowerCase();

  for (let x = 0; x < myKeys.length; x++) {
    myKeys[x].classList.remove('activated');
  }

  for (let x = 0; x < myKeys.length; x++) {
    if (pressed_key == myKeys[x].innerHTML.toLowerCase()) {
      myKeys[x].classList.add('activated');

    }
  }

})

function playSnd(key) {
  let snd;
  switch (key) {
    case 'c':
       snd = new Audio('doremi/do.mp3');
      snd.play();
    break;

    case 'd':
          snd = new Audio('doremi/re.mp3');
          snd.play();
        break;
        case 'e':
          snd = new Audio('doremi/mi.mp3');
          snd.play();
        break;
        case 'f':
          snd = new Audio('doremi/fa.mp3');
          snd.play();
        break;
        case 'g':
          snd = new Audio('doremi/sol.mp3');
          snd.play();
        break;
        case 'a':
          snd = new Audio('doremi/la.mp3');
          snd.play();
        break;
        case 'b':
          snd = new Audio('doremi/ti.mp3');
          snd.play();
        break;
        case 'k':
          snd = new Audio('doremi/doh.mp3');
          snd.play();
        break;
        default:
          console.log(key);
          return;
  }
  snd.play();

}