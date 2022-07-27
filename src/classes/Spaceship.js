import { Missile } from "./Missile";

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
    let missile = new Missile(this.getXposition(), this.getYposition());
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

export { Spaceship };
