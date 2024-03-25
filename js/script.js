/*----- constants -----*/
const buttons = ["red", "yellow", "blue", "green"]
const colorSequence = [];
const playerSequence = [];

/*----- state variables -----*/
let level = 0;
let playing = false;
let header = document.querySelector("h1");

/*----- cached elements  -----*/
const gameButtons = document.querySelectorAll(".button");
const gameStarter = document.getElementById("starter")

/*----- event listeners -----*/


/*----- functions -----*/
function playGame() {
  if (!playing) {
    playing = true;
    nextLevel();
  }
}

function nextLevel() {
  playerSequence.length = 0;
  level += 1;
  header.textContent = "Level " + (level + 1);
  const rdmNum = Math.floor(Math.random() * 4);
  const rdmColor = 
}