/*----- constants -----*/
const colors = ["red", "yellow", "blue", "green"];

/*----- cached elements  -----*/
const gameBoard = document.getElementById("game-main");
const startButton = document.getElementById("start-button");
const messageDisplay = document.getElementById("message");
const colorElements = document.querySelectorAll(".color");
const title = document.querySelector("h1");
const instructions = document.getElementById("instructions");
const sfxE1 = new Audio("SFX/E1.wav");
const sfxC2 = new Audio("SFX/C2.wav");
const sfxA2 = new Audio("SFX/A2.wav");
const sfxC4 = new Audio("SFX/C4.wav");

/*----- state variables -----*/
let gameState = {
  sequence: [],
  player: [],
  level: 0,
  isPlayerTurn: false,
  messageDisplay: messageDisplay
};

const colorSounds = {
  red: sfxE1,
  yellow: sfxC2,
  blue: sfxA2,
  green: sfxC4
};

/*----- event listeners -----*/
startButton.addEventListener("click", startGame);
colorElements.forEach(function (colorElement) {
  colorElement.addEventListener("click", function () {
    handleColorClick(colorElement.id);
    handleColorPlayer(colorElement.id);
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
  gameBoard.style.maxWidth = "500px";
  colorElements.forEach(function (colorElements) {
    colorElements.style.height = "250px";
    colorElements.style.width = "250px";
  });
  instructions.style.display = "none";
  title.style.position = "relative";
  title.style.top = "-55px";
}

function backToNothing() {
  startButton.style.display = "block";
  startButton.innerText = "PLAY AGAIN";
  setTimeout(function () {
    startButton.innerText = "PLAY GAME";
  }, 10000);
  gameBoard.style.maxWidth = "";
  colorElements.forEach(function (colorElements) {
    colorElements.style.height = "150px";
    colorElements.style.width = "150px";
  });
  instructions.style.display = "block";
  title.innerText = "SIMON";
  title.style.top = "0";
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
  const originalColor = colorElement.style.opacity;
  const originalBorder = colorElement.style.borderColor;
  colorElement.style.opacity = '1';
  colorElement.style.borderColor = "rgba(212, 212, 212, 0.3)";
  colorSounds[color].play();
  setTimeout(function () {
    colorElement.style.opacity = originalColor;
    colorElement.style.borderColor = originalBorder;
  }, 500);
}

function handleColorClick(color) {
  if (!gameState.isPlayerTurn)
    return;
  const expectedColor = gameState.sequence[gameState.player.length];
  if (color === expectedColor) {
    gameState.player.push(color);
    if (gameState.player.length === gameState.sequence.length) {
      gameState.messageDisplay.innerText = "GOOD JOB!";
      gameState.player = [];
      gameState.level++;
      setTimeout(function () {
        addColorToSequence();
        playSequence();
        displayLevel();
        gameState.messageDisplay.innerText = "";
      }, 3000);
    }
  } else {
    gameOver();
  }
}

function handleColorPlayer(color) {
  if (!gameState.isPlayerTurn)
    return;
  colorSounds[color].play();
  const colorElement = document.getElementById(color);
  const originalColor = colorElement.style.opacity;
  const originalBorder = colorElement.style.borderColor;
  colorElement.style.opacity = '1';
  colorElement.style.borderColor = "rgba(212, 212, 212, 0.3)";
  setTimeout(function () {
    colorElement.style.opacity = originalColor;
    colorElement.style.borderColor = originalBorder;
  }, 200);
}

function gameOver() {
  gameState.messageDisplay.style.position = "absolute";
  gameState.messageDisplay.innerText = "YOU LOSE!";
  setTimeout(function () {
    gameState.messageDisplay.innerText = "";
    resetGame();
    backToNothing();
  }, 3000);
}
