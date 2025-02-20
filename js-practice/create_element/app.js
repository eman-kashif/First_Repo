let textbox = document.querySelector("#textbox");

let mybtn = document.querySelector("#mybtn");

let mylist = document.querySelector("#mylist");

mybtn.addEventListener ('click', function () {
    let entered_data = textbox.value;
    if(entered_data.trim() == "" ) {
        alert("Complete he form completely");
    }

    else {
        let new_elem = document.createElement("li");
        new_elem.innerHTML = textbox.value.toUpperCase();
        mylist.appendChild(new_elem);
    }
});