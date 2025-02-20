let myTextbox = document.querySelector("#myTextbox");
let btn = document.querySelector("#btn");
let my_list = document.querySelector("#my_list");
btn.addEventListener('click', function () {

    let entered_data = myTextbox.value;

    if ( entered_data.trim() == "") {
        alert("Please enter data")
    }

    else {
        let new_elem = document.createElement("li");
    new_elem.innerHTML = myTextbox.value.toUpperCase();
    my_list.appendChild(new_elem);
    }

    
});

