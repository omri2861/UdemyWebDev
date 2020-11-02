
var soundMap = new Map();
soundMap.set("w", "sounds/tom-1.mp3");
soundMap.set("a", "sounds/tom-2.mp3");
soundMap.set("s", "sounds/tom-3.mp3");
soundMap.set("d", "sounds/tom-4.mp3");
soundMap.set("j", "sounds/snare.mp3");
soundMap.set("k", "sounds/kick-bass.mp3");
soundMap.set("l", "sounds/crash.mp3");


function handleClick() {
    let soundUrl = soundMap.get(this.innerHTML);
    
    if (soundUrl === undefined) {
        console.warn("Unexpected key press: " + this.innerHTML);
        return;
    }

    let audio = new Audio(soundUrl);
    audio.play();
}

for (button of document.querySelectorAll(".drum")) {
    button.addEventListener("click", handleClick);
}

