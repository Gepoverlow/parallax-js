class Layer {
  #initialXposition;
  #domElement;
  #movementMultiplier;
  constructor(initialXposition, domElement, movementMultiplier) {
    this.#initialXposition = initialXposition;
    this.#domElement = domElement;
    this.#movementMultiplier = movementMultiplier;
  }

  getXposition() {
    return this.#initialXposition;
  }

  setXposition(newXValue) {
    this.#initialXposition = newXValue;
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
}

export { Layer };
