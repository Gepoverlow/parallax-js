/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/EventObserver.js":
/*!**************************************!*\
  !*** ./src/classes/EventObserver.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventObserver": () => (/* binding */ EventObserver)
/* harmony export */ });
class EventObserver {
  observeKeysPressed(arrayOfPressedKeys, layers) {
    if (arrayOfPressedKeys.includes("ArrowRight")) {
      for (let i = 0; i < layers.length; i++) {
        let layerDomElement = layers[i].getDomElement();
        let layerCurrentX = layers[i].getXpositionI();
        let layerMovMultiplier = layers[i].getMovementMultiplier();
        let layerFutureX = layerCurrentX - 15 * layerMovMultiplier;
        layerDomElement.style.backgroundPositionX = layerFutureX + "px";
        layers[i].setXpositionI(layerFutureX);

        layers[i].checkForTranslateForwards();

        if (layers[i].getXpositionI() < layers[i].getXpositionF()) {
          layers[i].setXpositionI(screen.width);
        }
      }
    }

    if (arrayOfPressedKeys.includes("ArrowLeft")) {
      for (let i = 0; i < layers.length; i++) {
        let layerDomElement = layers[i].getDomElement();
        let layerCurrentX = layers[i].getXpositionI();
        let layerMovMultiplier = layers[i].getMovementMultiplier();
        let layerFutureX = layerCurrentX + 15 * layerMovMultiplier;
        layerDomElement.style.backgroundPositionX = layerFutureX + "px";
        layers[i].setXpositionI(layerFutureX);

        layers[i].checkForTranslateBackwards();

        if (layers[i].getXpositionI() > screen.width) {
          layers[i].setXpositionI(layers[i].getXpositionF());
        }
      }
    }
  }

  observe(arrayOfPressedKeys, layers) {
    setInterval(() => {
      this.observeKeysPressed(arrayOfPressedKeys, layers);
    }, 100);
  }
}




/***/ }),

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


class Game {
  #starsLayer;
  #bigPlanetLayer;
  #farPlanetsLayer;
  #ringPlanetLayer;
  constructor() {
    this.#starsLayer = new _Layer__WEBPACK_IMPORTED_MODULE_0__.Layer(0, -screen.width, document.getElementById("bg-space-stars"), 0.1);
    this.#bigPlanetLayer = new _Layer__WEBPACK_IMPORTED_MODULE_0__.Layer(
      900,
      -333,
      document.getElementById("bg-space-big-planet"),
      0.3
    );
    this.#farPlanetsLayer = new _Layer__WEBPACK_IMPORTED_MODULE_0__.Layer(
      100,
      -750,
      document.getElementById("bg-space-far-planets"),
      0.7
    );
    this.#ringPlanetLayer = new _Layer__WEBPACK_IMPORTED_MODULE_0__.Layer(0, -180, document.getElementById("bg-space-ring-planet"), 1);
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
    if (
      this.getXpositionI() < this.getXpositionF() - 30 ||
      this.getXpositionI() > screen.width - 30
    ) {
      this.#domElement.classList.remove("transition-effect");
    } else if (this.getXpositionI() < screen.width - this.getXpositionF() - 80) {
      this.#domElement.classList.add("transition-effect");
    }
  }

  checkForTranslateBackwards() {
    console.log(this.getXpositionI());
    console.log(this.getXpositionF());
    if (
      this.getXpositionI() > screen.width - 30 ||
      this.getXpositionI() < this.getXpositionF() - 30
    ) {
      this.#domElement.classList.remove("transition-effect");
    } else if (this.getXpositionI() > this.getXpositionF() + 80) {
      this.#domElement.classList.add("transition-effect");
    }
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
/* harmony import */ var _classes_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/EventObserver */ "./src/classes/EventObserver.js");
/* harmony import */ var _classes_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Game */ "./src/classes/Game.js");



const EventObs = new _classes_EventObserver__WEBPACK_IMPORTED_MODULE_0__.EventObserver();
const NewGame = new _classes_Game__WEBPACK_IMPORTED_MODULE_1__.Game();

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

})();

/******/ })()
;
//# sourceMappingURL=main.js.map