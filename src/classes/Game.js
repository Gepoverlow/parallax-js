import { Layer } from "./Layer";
import { Spaceship } from "./Spaceship";

class Game {
  #starsLayer;
  #bigPlanetLayer;
  #farPlanetsLayer;
  #ringPlanetLayer;

  #spaceShip;
  constructor() {
    this.#starsLayer = new Layer(0, -screen.width, document.getElementById("bg-space-stars"), 0.1);
    this.#bigPlanetLayer = new Layer(
      900,
      -333,
      document.getElementById("bg-space-big-planet"),
      0.3
    );
    this.#farPlanetsLayer = new Layer(
      100,
      -750,
      document.getElementById("bg-space-far-planets"),
      0.7
    );
    this.#ringPlanetLayer = new Layer(0, -180, document.getElementById("bg-space-ring-planet"), 1);

    this.#spaceShip = new Spaceship();
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

  getSpaceship() {
    return this.#spaceShip;
  }
}

export { Game };
