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
export { Missile };
