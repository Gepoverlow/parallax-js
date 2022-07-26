import { Layer } from "./Layer";
import { Spaceship } from "./Spaceship";
import { Meteorite } from "./Meteorite";

class Game {
  #starsLayer;
  #bigPlanetLayer;
  #farPlanetsLayer;
  #ringPlanetLayer;

  #spaceShip;
  constructor() {
    this.#starsLayer = new Layer(0, -screen.width, document.getElementById("bg-space-stars"), 0.1);
    this.#bigPlanetLayer = new Layer(900, -333, document.getElementById("bg-space-big-planet"), 0.4);
    this.#farPlanetsLayer = new Layer(100, -750, document.getElementById("bg-space-far-planets"), 0.2);
    this.#ringPlanetLayer = new Layer(0, -180, document.getElementById("bg-space-ring-planet"), 0.7);

    this.#spaceShip = new Spaceship();
  }

  init() {
    setInterval(() => {
      this.launchMeteorite();
    }, 3000);
  }

  launchMeteorite() {
    let randomHeight = this.randomIntFromInterval(0, window.innerHeight - 100);
    let fixedWidth = screen.width;

    let meteorite = new Meteorite(fixedWidth, randomHeight);
    meteorite.startTrajectory();
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

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export { Game };
