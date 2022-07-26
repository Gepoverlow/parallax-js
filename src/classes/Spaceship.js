import { Missile } from "./Missile";

class Spaceship {
  #bgPositionX;
  #bgPositionY;
  #domElement;

  #movSpeed;

  constructor() {
    this.#bgPositionX = 200;
    this.#bgPositionY = 200;
    this.#domElement = document.getElementById("spaceship");
    this.#movSpeed = 40;
  }

  moveUp() {
    if (this.getYposition() > 0) {
      let spaceshipDomElement = this.getDomElement();
      let previousYposition = this.getYposition();
      let futureYposition = previousYposition - this.getMovSpeed();
      this.setYposition(futureYposition);
      spaceshipDomElement.style.backgroundPositionY = futureYposition + "px";
    }
  }

  moveDown() {
    if (this.getYposition() < window.innerHeight - 100) {
      let spaceshipDomElement = this.getDomElement();
      let previousYposition = this.getYposition();
      let futureYposition = previousYposition + this.getMovSpeed();
      this.setYposition(futureYposition);
      spaceshipDomElement.style.backgroundPositionY = futureYposition + "px";
    }
  }

  shootMissile() {
    let missile = new Missile(this.getXposition(), this.getYposition());
    missile.startTrajectory();
  }

  checkForCollision(meteorite) {
    let spaceshipXposition = this.getXposition();
    let spaceshipYposition = this.getYposition();

    let meteoriteXposition = meteorite.getXposition();
    let meteoriteYposition = meteorite.getYposition();

    // let leftPos = spaceshipXposition + 10 > meteoriteXposition - 10;
    // let rightPos = spaceshipXposition - 10 < meteoriteXposition + 10;

    // let topPos = spaceshipYposition + 10 > meteoriteYposition - 10;
    // let bottomPos = spaceshipYposition - 10 < meteoriteYposition + 10;

    if (
      spaceshipYposition + 10 < meteoriteYposition ||
      spaceshipYposition > meteoriteYposition + 30 ||
      spaceshipXposition + 10 < meteoriteXposition ||
      spaceshipXposition > meteoriteXposition + 30
      // leftPos &&
      // rightPos &&
      // topPos &&
      // bottomPos
    ) {
      console.log("not touching");
    } else {
      console.log("touching");
      meteorite.setHasBeenDestroyed(true);
    }

    // ((a.y + a.height) < (b.y)) ||
    //     (a.y > (b.y + b.height)) ||
    //     ((a.x + a.width) < b.x) ||
    //     (a.x > (b.x + b.width))

    // if (spaceshipXposition + 50 >= meteoriteXposition + 50) {
    //   console.log("craseh deteced");
    // }
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

  getMovSpeed() {
    return this.#movSpeed;
  }

  setMovSpeed(newSpeed) {
    this.#movSpeed = newSpeed;
  }
}

export { Spaceship };
