import { Observer } from "./classes/Observer";
import { Game } from "./classes/Game";

const Obs = new Observer();
const newGame = new Game();

const pressedKeys = [];

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

Obs.observeEvents(pressedKeys, newGame.getArrayOfLayers(), newGame.getSpaceship());
Obs.observeObjects(newGame.getarrayOfFlyingMeteorites(), newGame.getSpaceship());
//newGame.init();
