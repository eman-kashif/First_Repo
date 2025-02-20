const draggables = document.querySelectorAll(".draggable");

const dropzone = document.querySelector("#dropzone");

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData('text/plain', event.target.textContent)   
    })
})

dropzone.addEventListener('dragover', function(event) {
    event.preventDefault();
    const text = event.dataTransfer.getData('text/plain')
    dropzone.value = text;
})
