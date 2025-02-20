let displayArea = document.querySelector("#displayArea");

 let myBtn = document.querySelector
 ("#myBtn"); 
 
 let fruits = ["Apple", "Banana"];
//     fruits.push("Mango");

//     let Banana_index = fruits.indexOf("Banana");
//     console.log(fruits);

    displayArea.innerHTML=fruits

 myBtn.addEventListener("click", function () {

     let new_fruit = inputbox.value;
     fruits.push(new_fruit);

     displayArea.innerHTML=fruits
 });