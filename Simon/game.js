var buttonColors = ["red", "blue", "green", "yellow"];
var gameSequence = [];
var userSequence = [];
var isGameRunning = false;

function randomColorIndex() {
  return Math.round(Math.random() * 3);
}

function pressButton(color) {
  /* This is the default solution online for flashing, and Angela's solution,
   * Although I don't get why you have to fade in at the beginning. */
  $("#" + color)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  let audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function nextLevel() {
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

  // Finally, after the user choice was displayed and added to the game, increase
  // the level
  // TODO: Compare sequences here
  nextLevel();
}

function startGame() {
  if (!isGameRunning) {
    nextLevel();
    isGameRunning = true;
  }
}

$(document).on("keydown", startGame);
$(".btn").on("click", addUserChoice);
