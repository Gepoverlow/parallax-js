/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Game.js":
/*!*****************************!*\
  !*** ./src/classes/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ "./src/classes/Layer.js");
/* harmony import */ var _Spaceship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spaceship */ "./src/classes/Spaceship.js");
/* harmony import */ var _Meteorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Meteorite */ "./src/classes/Meteorite.js");




class Game {
  #starsLayer;
  #bigPlanetLayer;
  #farPlanetsLayer;
  #ringPlanetLayer;

  #arrayOfFlyingMeteorites;

  #spaceShip;
  constructor() {
    this.#starsLayer = new _Layer__WEBPACK_IMPORTED_MODULE_0__.Layer(0, -screen.width, document.getElementById("bg-space-stars"), 0.1);
    this.#bigPlanetLayer = new _Layer__WEBPACK_IMPORTED_MODULE_0__.Layer(900, -333, document.getElementById("bg-space-big-planet"), 0.4);
    this.#farPlanetsLayer = new _Layer__WEBPACK_IMPORTED_MODULE_0__.Layer(100, -750, document.getElementById("bg-space-far-planets"), 0.2);
    this.#ringPlanetLayer = new _Layer__WEBPACK_IMPORTED_MODULE_0__.Layer(0, -180, document.getElementById("bg-space-ring-planet"), 0.7);

    this.#arrayOfFlyingMeteorites = [];

    this.#spaceShip = new _Spaceship__WEBPACK_IMPORTED_MODULE_1__.Spaceship();
  }

  init() {
    setInterval(() => {
      this.launchMeteorite();
    }, 1000);
  }

  launchMeteorite() {
    let randomHeight = this.randomIntFromInterval(0, window.innerHeight - 100);
    let fixedWidth = screen.width;

    let meteorite = new _Meteorite__WEBPACK_IMPORTED_MODULE_2__.Meteorite(fixedWidth, randomHeight);
    this.#arrayOfFlyingMeteorites.push(meteorite);

    meteorite.startTrajectory();
  }

  removeDestroyedMeteoriteFromArray() {
    let objectsArray = this.getarrayOfFlyingMeteorites();
    for (let i = 0; i < objectsArray.length; i++) {
      if (objectsArray[i].getHasBeenDestroyed()) {
        let uid = objectsArray[i].getUid();
        this.removeObjectFromArray(objectsArray, uid);
      }
    }
  }

  getStarsLayer() {
    return this.#starsLayer;
  }

  getBigPlanetLayer() {
    return this.#bigPlanetLayer;
  }

  getFarPlanetsLayer() {
    return this.#farPlanetsLayer;
  }

  getRingPlanetLayer() {
    return this.#ringPlanetLayer;
  }

  getArrayOfLayers() {
    return [this.#starsLayer, this.#bigPlanetLayer, this.#farPlanetsLayer, this.#ringPlanetLayer];
  }

  getSpaceship() {
    return this.#spaceShip;
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getarrayOfFlyingMeteorites() {
    return this.#arrayOfFlyingMeteorites;
  }

  setarrayOfFlyingMeteorites(newArray) {
    this.#arrayOfFlyingMeteorites = newArray;
  }
}




/***/ }),

/***/ "./src/classes/Layer.js":
/*!******************************!*\
  !*** ./src/classes/Layer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layer": () => (/* binding */ Layer)
/* harmony export */ });
class Layer {
  #initialXposition;
  #finalXposition;
  #domElement;
  #movementMultiplier;
  constructor(initialXposition, finalXposition, domElement, movementMultiplier) {
    this.#initialXposition = initialXposition;
    this.#finalXposition = finalXposition;
    this.#domElement = domElement;
    this.#movementMultiplier = movementMultiplier;
  }

  getXpositionI() {
    return this.#initialXposition;
  }

  setXpositionI(newXValue) {
    this.#initialXposition = newXValue;
  }

  getXpositionF() {
    return this.#finalXposition;
  }

  setXpositionF(newXValue) {
    this.#finalXposition = newXValue;
  }

  getDomElement() {
    return this.#domElement;
  }

  setDomElement(newDomValue) {
    this.#domElement = newDomValue;
  }

  getMovementMultiplier() {
    return this.#movementMultiplier;
  }

  setMovementMultiplier(newMultiplierValue) {
    this.#domElement = newMultiplierValue;
  }

  checkForTranslateForwards() {
    if (this.getXpositionI() < this.getXpositionF() - 30 || this.getXpositionI() > screen.width - 30) {
      this.#domElement.classList.remove("transition-effect");
    } else if (this.getXpositionI() < screen.width - this.getXpositionF() - 80) {
      this.#domElement.classList.add("transition-effect");
    }
  }

  checkForTranslateBackwards() {
    if (this.getXpositionI() > screen.width - 30 || this.getXpositionI() < this.getXpositionF() - 30) {
      this.#domElement.classList.remove("transition-effect");
    } else if (this.getXpositionI() > this.getXpositionF() + 80) {
      this.#domElement.classList.add("transition-effect");
    }
  }

  moveLayerRight() {
    let layerDomElement = this.getDomElement();
    let layerCurrentX = this.getXpositionI();
    let layerMovMultiplier = this.getMovementMultiplier();
    let layerFutureX = layerCurrentX - 15 * layerMovMultiplier;
    layerDomElement.style.backgroundPositionX = layerFutureX + "px";
    this.setXpositionI(layerFutureX);

    this.checkForTranslateForwards();

    if (this.getXpositionI() < this.getXpositionF()) {
      this.setXpositionI(screen.width);
    }
  }

  moveLayerLeft() {
    let layerDomElement = this.getDomElement();
    let layerCurrentX = this.getXpositionI();
    let layerMovMultiplier = this.getMovementMultiplier();
    let layerFutureX = layerCurrentX + 15 * layerMovMultiplier;
    layerDomElement.style.backgroundPositionX = layerFutureX + "px";
    this.setXpositionI(layerFutureX);

    this.checkForTranslateBackwards();

    if (this.getXpositionI() > screen.width) {
      this.setXpositionI(this.getXpositionF());
    }
  }
}




/***/ }),

/***/ "./src/classes/Meteorite.js":
/*!**********************************!*\
  !*** ./src/classes/Meteorite.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Meteorite": () => (/* binding */ Meteorite)
/* harmony export */ });
class Meteorite {
  #xPosition;
  #yPosition;
  #domElement;
  #hasBeenDestroyed;
  #uid;
  #hitbox;
  constructor(initialX, initialY) {
    this.#xPosition = initialX;
    this.#yPosition = initialY;
    this.#domElement = this.createDomElement();
    this.#hasBeenDestroyed = false;
    this.#uid = Date.now().toString(36) + Math.random().toString(36).substr(2);
    this.#hitbox = this.createHitbox();
  }

  createDomElement() {
    let meteorite = document.createElement("div");
    meteorite.className = "meteorite";
    meteorite.style.backgroundPositionX = this.getXposition() + "px";
    meteorite.style.backgroundPositionY = this.getYposition() + "px";
    document.getElementById("container-all").appendChild(meteorite);
    return meteorite;
  }

  createHitbox() {
    let hitbox = document.createElement("div");
    hitbox.className = "meteorite-hitbox";
    hitbox.style.left = this.getXposition() + "px";
    hitbox.style.top = this.getYposition() + "px";
    document.getElementById("container-all").appendChild(hitbox);
    return hitbox;
  }

  startTrajectory() {
    this.checkIfOffscreen();

    if (!this.getHasBeenDestroyed()) {
      let domElement = this.getDomElement();
      let hitbox = this.getHitbox();
      let currentX = this.getXposition();
      let nextX = currentX - 10;
      this.setXposition(nextX);
      domElement.style.backgroundPositionX = nextX + "px";
      hitbox.style.left = nextX + 130 + "px";
      setTimeout(() => {
        this.startTrajectory();
      }, 100);
    } else {
      let domElement = this.getDomElement();
      let hitbox = this.getHitbox();
      document.getElementById("container-all").removeChild(domElement);
      document.getElementById("container-all").removeChild(hitbox);
    }
  }

  getUid() {
    return this.#uid;
  }

  checkIfOffscreen() {
    if (this.getXposition() < -300) {
      this.setHasBeenDestroyed(true);
    }
  }

  getXposition() {
    return this.#xPosition;
  }

  setXposition(newX) {
    this.#xPosition = newX;
  }

  getYposition() {
    return this.#yPosition;
  }

  setYposition(newY) {
    this.#yPosition = newY;
  }

  getDomElement() {
    return this.#domElement;
  }

  getHasBeenDestroyed() {
    return this.#hasBeenDestroyed;
  }

  setHasBeenDestroyed(bool) {
    this.#hasBeenDestroyed = bool;
  }

  getHitbox() {
    return this.#hitbox;
  }
}




/***/ }),

/***/ "./src/classes/Missile.js":
/*!********************************!*\
  !*** ./src/classes/Missile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Missile": () => (/* binding */ Missile)
/* harmony export */ });
class Missile {
  #xPosition;
  #yPosition;
  #domElement;
  #hasImpacted;
  #uid;
  #hitbox;
  constructor(startingXposition, startingYposition) {
    this.#xPosition = startingXposition;
    this.#yPosition = startingYposition;
    this.#domElement = this.createDomElement();
    this.#hasImpacted = false;
    this.#uid = Date.now().toString(36) + Math.random().toString(36).substr(2);
    this.#hitbox = this.createHitbox();
  }

  getUid() {
    return this.#uid;
  }

  getHitbox() {
    return this.#hitbox;
  }
  setHitbox(newHitbox) {
    this.#hitbox = newHitbox;
  }

  getXposition() {
    return this.#xPosition;
  }

  setXposition(newX) {
    this.#xPosition = newX;
  }

  getYposition() {
    return this.#yPosition;
  }

  setYposition(newY) {
    this.#xPosition = newY;
  }

  getDomElement() {
    return this.#domElement;
  }

  setDomElement(newDom) {
    this.setDomElement = newDom;
  }

  getHasImpacted() {
    return this.#hasImpacted;
  }

  setHasImpacted(bool) {
    this.#hasImpacted = bool;
  }

  startTrajectory() {
    this.checkIfOffscreen();

    if (!this.getHasImpacted()) {
      let domElement = this.getDomElement();
      let hitbox = this.getHitbox();
      let currentX = this.getXposition();
      let nextX = currentX + 5;
      this.setXposition(nextX);
      domElement.style.backgroundPositionX = nextX + "px";
      hitbox.style.left = nextX + 40 + "px";
      hitbox.style.top = this.getYposition() + 40 + "px";

      setTimeout(() => {
        this.startTrajectory();
      }, 50);
    } else {
      let domElement = this.getDomElement();
      let hitbox = this.getHitbox();
      document.getElementById("container-all").removeChild(domElement);
      document.getElementById("container-all").removeChild(hitbox);
    }
  }

  checkIfOffscreen() {
    if (this.getXposition() > screen.width) {
      this.setHasImpacted(true);
    }
  }

  createDomElement() {
    let missile = document.createElement("div");
    missile.className = "missile";
    missile.style.backgroundPositionX = this.getXposition() + 50 + "px";
    missile.style.backgroundPositionY = this.getYposition() + 33 + "px";
    document.getElementById("container-all").appendChild(missile);
    return missile;
  }

  createHitbox() {
    let hitbox = document.createElement("div");
    hitbox.className = "missile-hitbox";
    hitbox.style.left = this.getXposition() + 50 + "px";
    hitbox.style.top = this.getYposition() + 33 + "px";
    document.getElementById("container-all").appendChild(hitbox);
    return hitbox;
  }

  checkForCollision(meteorite) {
    let missileHitbox = this.getHitbox();
    let meteoriteHitbox = meteorite.getHitbox();

    let missileRect = missileHitbox.getBoundingClientRect();
    let meteoriteRect = meteoriteHitbox.getBoundingClientRect();

    if (
      missileRect.right >= meteoriteRect.left &&
      missileRect.left <= meteoriteRect.right &&
      missileRect.bottom >= meteoriteRect.top &&
      missileRect.top <= meteoriteRect.bottom
    ) {
      console.log("its a hit!");
      this.setHasImpacted(true);
      meteorite.setHasBeenDestroyed(true);
    }
  }
}



/***/ }),

/***/ "./src/classes/Observer.js":
/*!*********************************!*\
  !*** ./src/classes/Observer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observer": () => (/* binding */ Observer)
/* harmony export */ });
class Observer {
  observeKeysPressed(arrayOfPressedKeys, layers, spaceship) {
    if (arrayOfPressedKeys.includes("ArrowRight")) {
      for (let i = 0; i < layers.length; i++) {
        layers[i].moveLayerRight();
      }
    }

    if (arrayOfPressedKeys.includes("ArrowLeft")) {
      for (let i = 0; i < layers.length; i++) {
        layers[i].moveLayerLeft();
      }
    }

    if (arrayOfPressedKeys.includes("ArrowUp")) {
      spaceship.moveUp();
    }

    if (arrayOfPressedKeys.includes("ArrowDown")) {
      spaceship.moveDown();
    }

    if (arrayOfPressedKeys.includes("Space")) {
      spaceship.shootMissile();
    }
  }

  observeFlyingMeteorites(arrayOfFlyingMeteorites, spaceship) {
    for (let i = 0; i < arrayOfFlyingMeteorites.length; i++) {
      let isDestroyed = arrayOfFlyingMeteorites[i].getHasBeenDestroyed();
      if (isDestroyed) {
        this.removeObjectFromArray(arrayOfFlyingMeteorites, arrayOfFlyingMeteorites[i].getUid());
      } else {
        spaceship.checkForCollision(arrayOfFlyingMeteorites[i]);
      }
    }
  }

  observeFlyingMissiles(arrayOfFlyingMeteorites, spaceship) {
    let arrayOfMissiles = spaceship.getArrayOfFlyingMissiles();
    for (let i = 0; i < arrayOfMissiles.length; i++) {
      let hasImpacted = arrayOfMissiles[i].getHasImpacted();
      if (hasImpacted) {
        this.removeObjectFromArray(arrayOfMissiles, arrayOfMissiles[i].getUid());
      } else {
        for (let j = 0; j < arrayOfFlyingMeteorites.length; j++) {
          arrayOfMissiles[i].checkForCollision(arrayOfFlyingMeteorites[j]);
        }
      }
    }
  }

  observeEvents(arrayOfPressedKeys, layers, spaceship) {
    setInterval(() => {
      this.observeKeysPressed(arrayOfPressedKeys, layers, spaceship);
    }, 100);
  }
  observeObjects(arrayOfFlyingMeteorites, spaceship) {
    setInterval(() => {
      this.observeFlyingMissiles(arrayOfFlyingMeteorites, spaceship);
      this.observeFlyingMeteorites(arrayOfFlyingMeteorites, spaceship);
    }, 100);
  }

  removeObjectFromArray(array, uid) {
    let i = array
      .map((x) => {
        return x.getUid();
      })
      .indexOf(uid);
    array.splice(i, 1);
  }
}




/***/ }),

/***/ "./src/classes/Spaceship.js":
/*!**********************************!*\
  !*** ./src/classes/Spaceship.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spaceship": () => (/* binding */ Spaceship)
/* harmony export */ });
/* harmony import */ var _Missile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Missile */ "./src/classes/Missile.js");


class Spaceship {
  #bgPositionX;
  #bgPositionY;
  #domElement;
  #movSpeed;
  #hitbox;
  #hasCrashed;
  #arrayOfFlyingMissiles;

  constructor() {
    this.#bgPositionX = 200;
    this.#bgPositionY = 200;
    this.#domElement = document.getElementById("spaceship");
    this.#movSpeed = 40;
    this.#hitbox = document.getElementById("spaceship-hitbox");
    this.#hasCrashed = false;
    this.#arrayOfFlyingMissiles = [];
  }

  moveUp() {
    if (this.getYposition() > 0) {
      let spaceshipDomElement = this.getDomElement();
      let spaceshipHitbox = this.getHitbox();
      let previousYposition = this.getYposition();
      let futureYposition = previousYposition - this.getMovSpeed();
      this.setYposition(futureYposition);
      spaceshipDomElement.style.backgroundPositionY = futureYposition + "px";
      spaceshipHitbox.style.top = futureYposition + "px";
    }
  }

  moveDown() {
    if (this.getYposition() < window.innerHeight - 100) {
      let spaceshipDomElement = this.getDomElement();
      let spaceshipHitbox = this.getHitbox();
      let previousYposition = this.getYposition();
      let futureYposition = previousYposition + this.getMovSpeed();
      this.setYposition(futureYposition);
      spaceshipDomElement.style.backgroundPositionY = futureYposition + "px";
      spaceshipHitbox.style.top = futureYposition + "px";
    }
  }

  shootMissile() {
    let missile = new _Missile__WEBPACK_IMPORTED_MODULE_0__.Missile(this.getXposition(), this.getYposition());
    this.#arrayOfFlyingMissiles.push(missile);
    missile.startTrajectory();
  }

  checkForCollision(meteorite) {
    let spaceShipHitbox = this.getHitbox();
    let meteoriteHitbox = meteorite.getHitbox();

    let spaceShipRect = spaceShipHitbox.getBoundingClientRect();
    let meteoriteRect = meteoriteHitbox.getBoundingClientRect();

    if (
      spaceShipRect.right >= meteoriteRect.left &&
      spaceShipRect.left <= meteoriteRect.right &&
      spaceShipRect.bottom >= meteoriteRect.top &&
      spaceShipRect.top <= meteoriteRect.bottom
    ) {
      console.log("crash!");
      this.setHasCrashed(true);
    }
  }

  getXposition() {
    return this.#bgPositionX;
  }

  setXposition(newX) {
    this.#bgPositionX = newX;
  }

  getYposition() {
    return this.#bgPositionY;
  }

  setYposition(newY) {
    this.#bgPositionY = newY;
  }

  getDomElement() {
    return this.#domElement;
  }

  getHitbox() {
    return this.#hitbox;
  }

  getMovSpeed() {
    return this.#movSpeed;
  }

  setMovSpeed(newSpeed) {
    this.#movSpeed = newSpeed;
  }

  getHasCrashed() {
    return this.#hasCrashed;
  }

  setHasCrashed(bool) {
    this.#hasCrashed = bool;
  }

  getArrayOfFlyingMissiles() {
    return this.#arrayOfFlyingMissiles;
  }

  setArrayOfFlyingMissiles(newArr) {
    this.#arrayOfFlyingMissiles = newArr;
  }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Observer */ "./src/classes/Observer.js");
/* harmony import */ var _classes_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Game */ "./src/classes/Game.js");



const Obs = new _classes_Observer__WEBPACK_IMPORTED_MODULE_0__.Observer();
let newGame = new _classes_Game__WEBPACK_IMPORTED_MODULE_1__.Game();

const pressedKeys = [];
const newGameButton = document.getElementById("ng-button");

newGameButton.addEventListener("click", () => {
  newGame = new _classes_Game__WEBPACK_IMPORTED_MODULE_1__.Game();
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

})();

/******/ })()
;
//# sourceMappingURL=main.js.map