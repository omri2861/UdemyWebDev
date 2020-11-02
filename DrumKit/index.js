
var soundMap = new Map();
soundMap.set("w", "sounds/tom-1.mp3");
soundMap.set("a", "sounds/tom-2.mp3");
soundMap.set("s", "sounds/tom-3.mp3");
soundMap.set("d", "sounds/tom-4.mp3");
soundMap.set("j", "sounds/snare.mp3");
soundMap.set("k", "sounds/kick-bass.mp3");
soundMap.set("l", "sounds/crash.mp3");


function handleClick() {
    playSound(this.innerHTML);
}

function handleKeyDown(event) {
    // Note that we have to accept the event as a parameter, since 'this' is now
    // set to the global 'document' object
    
    if (!soundMap.has(event.key)) {
        // We don't have a drum assigned for this key, so just skip it
        return;
    }

    playSound(event.key);
}

/*
 * Plays a drum sound for a single character (either key pressed or clicked).
 */
function playSound(character) {
    if (!soundMap.has(character)) {
        console.error("Error: playSound called with non-mapped character: " + character);
        return;
    }

    let soundUrl = soundMap.get(character);
    
    let audio = new Audio(soundUrl);
    audio.play();
}

for (button of document.querySelectorAll(".drum")) {
    button.addEventListener("click", handleClick);
}

document.addEventListener("keydown", handleKeyDown);
