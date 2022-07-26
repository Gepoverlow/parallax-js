class Missile {
  #xPosition;
  #yPosition;
  #domElement;
  #hasImpacted;
  constructor(startingXposition, startingYposition) {
    this.#xPosition = startingXposition;
    this.#yPosition = startingYposition;
    this.#domElement = this.createDomElement();
    this.#hasImpacted = false;
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
    this.checkIfImpacted();

    if (!this.getHasImpacted()) {
      let domElement = this.getDomElement();
      let currentX = this.getXposition();
      let nextX = currentX + 5;
      this.setXposition(nextX);
      domElement.style.backgroundPositionX = nextX + "px";

      setTimeout(() => {
        this.startTrajectory();
      }, 50);
    } else {
      let domElement = this.getDomElement();
      document.getElementById("container-all").removeChild(domElement);
    }
  }

  checkIfImpacted() {
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
}
export { Missile };
