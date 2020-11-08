var buttonColors = ["red", "blue", "green", "yellow"];
var gameSequence = [];
var userSequence = [];

function randomColorIndex() {
  return Math.round(Math.random() * 3);
}

function pressButton(color) {
  /* This is the default solution online for flashing, and Angela's solution,
   * Although I don't get why you have to fade in at the beginning. */
  $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
  let audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function incrementLevel() {
  let newColorIndex = randomColorIndex();
  gameSequence.push(newColorIndex);
  pressButton(buttonColors[newColorIndex]);
}

function addUserChoice(event) {
  let color = event.target.id;
  let colorIndex = buttonColors.indexOf(color);
  if (-1 == colorIndex) {
    console.error("Invalid value clicked: " + color);
    return;
  }
  userSequence.push(colorIndex);
  pressButton(color);
}

function main() {
  incrementLevel();
}

$(document).on("keydown", main);
$(".btn").on("click", addUserChoice);
