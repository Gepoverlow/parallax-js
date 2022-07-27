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

export { Meteorite };
