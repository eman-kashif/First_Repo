let my_numbers = document.querySelector("#my_numbers");

for(let x = 1; x <= 100; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
        let new_element = document.createElement("li");
        new_element.innerHTML= "FizzBuz";
        my_numbers.appendChild(new_element);
    }

    else if (x % 3 == 0) {
        let new_element = document.createElement("li");
        new_element.innerHTML="fizz";
        my_numbers.appendChild(new_element);
    }

    else if (x % 5 == 0) {
        let new_element = document.createElement("li");
        new_element.innerHTML= "Buzz";
        my_numbers.appendChild(new_element);
    }

    else {
        let new_element = document.createElement("li");
        new_element.innerHTML= x;
        my_numbers.appendChild(new_element);
    }


}