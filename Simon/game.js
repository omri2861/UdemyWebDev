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

function emptyArray(array) {
  while (array.length > 0) {
    array.pop();
  }
}

function sequencesMatch() {
  if (gameSequence.length < userSequence.length) {
    console.warn("Warning: User pressed more buttons than the game");
    return false;
  }

  for (let i = 0; i < userSequence.length; i++) {
    if (gameSequence[i] !== userSequence[i]) return false;
  }

  return true;
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
  // Add a new random color to the sequence
  let newColorIndex = randomColorIndex();
  gameSequence.push(newColorIndex);
  emptyArray(userSequence);

  // Display the new color for the user
  $("#level-title").text("Level " + gameSequence.length);
  setTimeout(flashButton, 500, [buttonColors[newColorIndex]]);
}

function gameOver() {
  // Show game over animations to the user
  $("body").addClass("game-over");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 200);
  let audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("#level-title").text("Game Over, Press Any Key to Restart");

  // Reset the game state
  isGameRunning = false;
  emptyArray(userSequence);
  emptyArray(gameSequence);
}

function addUserChoice(event) {
  let color, colorIndex;

  if (!isGameRunning) {
    gameOver();
    return;
  }

  color = event.target.id;
  colorIndex = buttonColors.indexOf(color);
  if (-1 === colorIndex) {
    console.error("Invalid value clicked: " + color);
    return;
  }
  userSequence.push(colorIndex);
  pressButton(color);

  if (!sequencesMatch()) {
    gameOver();
    return;
  }
  if (userSequence.length === gameSequence.length) {
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
