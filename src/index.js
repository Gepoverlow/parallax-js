import { Observer } from "./classes/Observer";
import { Game } from "./classes/Game";

const Obs = new Observer();
let newGame = new Game();

const pressedKeys = [];
const newGameButton = document.getElementById("ng-button");

newGameButton.addEventListener("click", () => {
  newGame = new Game();
  newGame.init();

  Obs.observeEvents(pressedKeys, newGame.getArrayOfLayers(), newGame.getSpaceship());
  Obs.observeObjects(newGame.getarrayOfFlyingMeteorites(), newGame.getSpaceship());
});

document.addEventListener("keydown", (e) => {
  addPressedKey(e);
});

document.addEventListener("keyup", (e) => {
  removePressedKey(e);
});

function addPressedKey(e) {
  if (!pressedKeys.includes(e.code)) {
    pressedKeys.push(e.code);
  }
}

function removePressedKey(e) {
  if (pressedKeys.includes(e.code)) {
    let i = pressedKeys.indexOf(e.code);
    pressedKeys.splice(i, 1);
  }
}

newGame.init();

Obs.observeEvents(pressedKeys, newGame.getArrayOfLayers(), newGame.getSpaceship());
Obs.observeObjects(newGame.getarrayOfFlyingMeteorites(), newGame.getSpaceship());
