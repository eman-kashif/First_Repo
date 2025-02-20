let displayArea = document.querySelector("#displayArea");

 let myBtn = document.querySelector
 ("#myBtn");  

 myBtn.addEventListener("click", function () {

    let a = 4;
    let b = 5;
    let c = a*b;

    displayArea.innerHTML = c;
 })

//    if(a<b) {
//       displayArea.innerHTML = "A is less than B"
//    }
//    else {
//       displayArea.innerHTML = "A is not less than B";
//    }

//  })

 //exponential operator : it is to multiply number by its self like   
//  if a=2;
// b=3;
//then 2*2*2;