var buttonColors = ["red", "blue", "green", "yellow"];
var gameSequence = [];
var userSequence = [];
var isGameRunning = false;

function randomColorIndex() {
  return Math.round(Math.random() * 3);
}

function playColorSound(color) {
  let audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function flashButton(color) {
  /* This is the default solution online for flashing, and Angela's solution,
   * Although I don't get why you have to fade in at the beginning. */
  $("#" + color)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playColorSound(color);
}

function pressButton(color) {
  pressedButton = $("#" + color);
  pressedButton.addClass("pressed");
  setTimeout(function () {
    pressedButton.removeClass("pressed");
  }, 100);
  playColorSound(color);
}

function nextLevel() {
  let newColorIndex = randomColorIndex();
  gameSequence.push(newColorIndex);
  while (userSequence.length > 0) {
    userSequence.pop();
  }

  $("#level-title").text("Level " + gameSequence.length);
  // TODO: Add some timeout here
  flashButton(buttonColors[newColorIndex]);
}

function addUserChoice(event) {
  let color, colorIndex;

  if (!isGameRunning) {
    // Don't do anything if the game isn't running
    // TODO: Lose the game here
    return;
  }

  color = event.target.id;
  colorIndex = buttonColors.indexOf(color);
  if (-1 == colorIndex) {
    console.error("Invalid value clicked: " + color);
    return;
  }
  userSequence.push(colorIndex);
  pressButton(color);

  // Finally, after the user choice was displayed and added to the game, increase
  // the level
  // TODO: Compare sequences here
  if (userSequence.length == gameSequence.length) {
    nextLevel();
  }
}

function startGame() {
  if (!isGameRunning) {
    nextLevel();
    isGameRunning = true;
  }
}

$(document).on("keydown", startGame);
$(".btn").on("click", addUserChoice);
