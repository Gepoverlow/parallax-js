class Meteorite {
  #xPosition;
  #yPosition;
  #domElement;
  #hasBeenDestroyed;
  constructor(initialX, initialY) {
    this.#xPosition = initialX;
    this.#yPosition = initialY;
    this.#domElement = this.createDomElement();
    this.#hasBeenDestroyed = false;
  }

  createDomElement() {
    let meteorite = document.createElement("div");
    meteorite.className = "meteorite";
    meteorite.style.backgroundPositionX = this.getXposition() + "px";
    meteorite.style.backgroundPositionY = this.getYposition() + "px";
    document.getElementById("container-all").appendChild(meteorite);
    return meteorite;
  }

  startTrajectory() {
    this.checkIfOffscreen();

    if (!this.getHasBeenDestroyed()) {
      let domElement = this.getDomElement();
      let currentX = this.getXposition();
      let nextX = currentX - 10;
      this.setXposition(nextX);
      domElement.style.backgroundPositionX = nextX + "px";

      setTimeout(() => {
        this.startTrajectory();
      }, 200);
    } else {
      let domElement = this.getDomElement();
      document.getElementById("container-all").removeChild(domElement);
    }
  }

  checkIfOffscreen() {
    if (this.getXposition() < -100) {
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
}

export { Meteorite };
