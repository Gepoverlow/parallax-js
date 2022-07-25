import { EventObserver } from "./classes/EventObserver";
import { Game } from "./classes/Game";

const EventObs = new EventObserver();
const NewGame = new Game();

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

EventObs.observe(pressedKeys, NewGame.getArrayOfLayers());
