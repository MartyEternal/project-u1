/*----- constants -----*/
const colors = ["red", "yellow", "blue", "green"];

/*----- cached elements  -----*/
const gameBoard = document.getElementById("game-main");
const startButton = document.getElementById("start-button");
const messageDisplay = document.getElementById("message");
const colorElements = document.querySelectorAll(".color");
const title = document.querySelector("h1");
const instructions = document.getElementById("instructions");


/*----- state variables -----*/
// let sequence = [];
// let player = [];
// let level = 0;
// let isPlayerTurn = false;
let gameState = {
  sequence: [],
  player: [],
  level: 0,
  isPlayerTurn: false,
  messageDisplay: messageDisplay
}

/*----- event listeners -----*/
startButton.addEventListener("click", startGame);
colorElements.forEach(function (colorElement) {
  colorElement.addEventListener("click", function () {
    handleColorClick(colorElement.id);
  });
});



/*----- functions -----*/
function resetGame() {
  gameState = {
    sequence: [],
    player: [],
    level: 0,
    isPlayerTurn: false,
    messageDisplay: messageDisplay
  }


  // sequence = [];
  // player = [];
  // level = 0;
  // isPlayerTurn = false;
  // messageDisplay.innerText = "";
}

function startGame() {
  resetGame();
  resizeBoard();
  addColorToSequence();
  playSequence();
  displayLevel();
}

function resizeBoard() {
  startButton.style.display = "none";
  gameBoard.style.maxwidth = "500px";
  colorElements.forEach(function (colorElements) {
    colorElements.style.height = "250px";
    colorElements.style.width = "250px";
  });
  instructions.style.display = "none";
}

function backToNothing() {
  startButton.style.display = "block";
  startButton.innerText = "Play Again";
  gameBoard.style.maxwidth = "";
  colorElements.forEach(function (colorElements) {
    colorElements.style.height = "150px";
    colorElements.style.width = "150px";
  });
  instructions.style.display = "block";
  title.innerText = "SIMON";
}

function displayLevel() {
  const title = document.querySelector("h1");
  title.innerText = "LEVEL " + gameState.sequence.length;
}

function addColorToSequence() {
  const randomColor = colors[Math.floor(Math.random() * 4)];
  gameState.sequence.push(randomColor);
}

function playSequence() {
  gameState.isPlayerTurn = false;
  let i = 0;
  const interval = setInterval(function () {
    if (i >= gameState.sequence.length) {
      clearInterval(interval);
      gameState.isPlayerTurn = true;
      return;
    }
    flashColor(gameState.sequence[i]);
    i++;
  }, 1000);
  console.log(gameState);
}

function flashColor(color) {
  const colorElement = document.getElementById(color);
  const originalColor = colorElement.style.backgroundColor;
  colorElement.style.backgroundColor = 'white';
  setTimeout(function () {
    colorElement.style.backgroundColor = originalColor;
  }, 500);
}

function handleColorClick(color) {
  if (!gameState.isPlayerTurn)
    return;
  const expectedColor = gameState.sequence[gameState.player.length];
  if (color === expectedColor) {
    gameState.player.push(color);
    if (gameState.player.length === gameState.sequence.length) {
      gameState.messageDisplay.innerText = "You Win!";
      gameState.player = [];
      gameState.level++;
      setTimeout(function () {
        addColorToSequence();
        playSequence();
        displayLevel();
        gameState.messageDisplay.innerText = "";
      }, 3000);
    } else {
      gameState.level++;
    }
  } else {
    gameOver();
  }
  // if (color !== gameState.sequence[gameState.level]) {
  //   gameOver();
  //   return;
  // }
  // if (gameState.level === gameState.sequence.length - 1) {
  //   gameState.messageDisplay.innerText = "You win!";
  //   addColorToSequence();
  //   setTimeout(function () {
  //     playSequence();
  //     displayLevel();
  //     gameState.messageDisplay.innerText = "";
  //   }, 3000);
  // } else {
  //   gameState.level += 1;
  // }
}

function gameOver() {
  gameState.messageDisplay.style.position = "absolute";
  gameState.messageDisplay.innerText = "You lose!";
  setTimeout(function () {
    gameState.messageDisplay.innerText = "";
    resetGame();
    backToNothing();
  }, 3000);
}

/*----- Next Thing -----*/

/* make it so that "win/lose" only shows up after the sequence is finished. */
/* make the "PLAY" button disappear during the round, making space for the board to enlarge, then have it return with new innerText = "Next Level" or something like that. */

/* make the game start with the board fading to grey by lowering the transparency of the buttons, turning them back to 100% when they 'blink'. */
