let displayArea = document.querySelector("#displayArea");

let inputbox = document.querySelector("#inputbox")

 let myBtn = document.querySelector
 ("#myBtn"); 
 

 let languages = [ "javascript", "php", "python"];

 languages.push("C++");

 for(let language of languages) {
  let li = document.createElement("li");
  li.innerHTML = language;
  displayArea.appendChild(li);
 }

 myBtn.addEventListener("click", function() {
    let new_item = inputbox.value;
    languages.push(new_item);

    let li =document.createElement("li");
    li.innerHTML = new_item;
    displayArea.appendChild(li);
 })