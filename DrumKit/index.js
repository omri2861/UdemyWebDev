
function handleClick() {
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}

for (button of document.querySelectorAll("button")) {
    button.addEventListener("click", handleClick);
}

