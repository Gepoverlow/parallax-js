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

export { Layer };
