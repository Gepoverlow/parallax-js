import { Missile } from "./Missile";

class Spaceship {
  #bgPositionX;
  #bgPositionY;
  #domElement;
  #movSpeed;
  #hitbox;

  constructor() {
    this.#bgPositionX = 200;
    this.#bgPositionY = 200;
    this.#domElement = document.getElementById("spaceship");
    this.#movSpeed = 40;
    this.#hitbox = document.getElementById("spaceship-hitbox");
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
    missile.startTrajectory();
  }

  checkForCollision(meteorite) {
    let spaceshipXposition = this.getXposition();
    let spaceshipYposition = this.getYposition();

    let meteoriteXposition = meteorite.getXposition();
    let meteoriteYposition = meteorite.getYposition();

    // let spaceshipTopLeft = spaceshipYposition;
    // let spaceshipTopRight = spaceshipYposition;
    // let spaceshipBottomLeft = spaceshipYposition + 100;
    // let spaceshipBottomRight = spaceshipYposition + 100;

    // let meteoriteTopLeft = meteoriteXposition;
    // let meteoriteTopRight = meteoriteXposition + 100;
    // let meteoriteBottomLeft = meteoriteXposition;
    // let meteoriteBottomRight = meteoriteXposition + 100;

    // console.log(`x=${spaceshipXposition}, y=${spaceshipYposition}`);

    // console.log(
    //   `SPACESHIP: topLeft:${spaceshipTopLeft}, topRight:${spaceshipTopRight}, bottomLeft:${spaceshipBottomLeft}, bottomRight:${spaceshipBottomRight}`
    // );
    // console.log(
    //   `METORITE: topLeft:${meteoriteTopLeft}, topRight:${meteoriteTopRight}, bottomLeft:${meteoriteBottomLeft}, bottomRight:${meteoriteBottomRight}`
    // );

    if (
      spaceshipXposition >= meteoriteXposition &&
      spaceshipXposition <= meteoriteXposition &&
      spaceshipYposition + 100 >= meteoriteYposition &&
      spaceshipYposition <= meteoriteYposition + 100
    ) {
      meteorite.setHasBeenDestroyed(true);
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
}

export { Spaceship };
