//output in console

for (let x = 1; x <= 10; x++) {
    if ( x % 2 == 0) {
       console.log("even");
    }
    else {
         console.log(x)
}
}


//output in browser



let my_number = document.querySelector(".my_number");

for (let x = 1; x <= 10; x++) {
    if ( x % 2 == 0) {
       let new_element = document.createElement("li");
       new_element.innerHTML = "even";

       my_number.appendChild(new_element);
    }
    else {
         let new_element = document.createElement("li");
       new_element.innerHTML = x;

       my_number.appendChild(new_element);
}
}



//multiple of 3






for (let x = 1; x <= 20; x++) {
    if ( x % 3 == 0) {
       let new_element = document.createElement("li");
       new_element.innerHTML = "multiple of 3"

       my_number.appendChild(new_element);
    }
    else {
         let new_element = document.createElement("li");
       new_element.innerHTML = x;

       my_number.appendChild(new_element);
}
}

