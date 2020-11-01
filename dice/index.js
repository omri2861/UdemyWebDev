function rollDice() {
  return Math.round(Math.random() * 5) + 1;
}

function getDiceImageName(diceValue) {
  return "images/dice" + diceValue + ".png";
}

function getWinnerString(player1Roll, player2Roll) {
  if (player1Roll > player2Roll) {
    return "🚩 Player 1 Wins!";
  } else if (player1Roll < player2Roll) {
    return "Player 2 Wins! 🚩";
  } else if (player1Roll == player2Roll) {
    return "Draw!";
  }
}

let player1Value = rollDice();
let player2Value = rollDice();

let dices = document.querySelectorAll("img");
dices[0].setAttribute("src", getDiceImageName(player1Value));
dices[1].setAttribute("src", getDiceImageName(player2Value));

document.querySelector("h1").textContent = getWinnerString(
  player1Value,
  player2Value
);
