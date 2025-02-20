const draggables = document.querySelectorAll(".draggable");

const blank = document.querySelector("#blank");

const checkAnswer = document.querySelector("#checkAnswer");

const answerMessage = document.querySelector("#answerMessage");

checkAnswer.addEventListener("click",function() {
    alert("hi!");
})

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData('text/plain', event.target.textContent)   
    })
})

blank.addEventListener('dragover', function(event) {
    event.preventDefault();
})

blank.addEventListener('drop', function(event) {
    event.preventDefault();
    const answer = event.dataTransfer.getData('text/plain').toLowerCase();
    blank.value = answer
    if (answer == "html") {
        
    }
})
