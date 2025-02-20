let my_body=document.querySelector("#my_body");


  my_body.style.background="white";
  
// red
  let btnRed=document.querySelector("#btnRed");
  
  btnRed.addEventListener('click', function() {
    my_body.style.background="#FF0000";
  } )
  
//  yellow
  let btnYellow=document.querySelector("#btnYellow");
  
  btnYellow.addEventListener('click', function() {
    my_body.style.background="#FFC700";
  } )
  
//   blue
  let btnBlue=document.querySelector("#btnBlue");
  
  btnBlue.addEventListener('click', function() {
    my_body.style.background="#0802A3";
  } )


  // green
  let btnGreen=document.querySelector("#btnGreen");
  
  btnGreen.addEventListener('click', function() {
    my_body.style.background="#399918";
  } )

  
  // reset
  let btnReset=document.querySelector("#btnReset");
  
  btnReset.addEventListener('click', function() {
    my_body.style.background="#fff";
  } )