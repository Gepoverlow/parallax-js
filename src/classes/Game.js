import { Layer } from "./Layer";

class Game {
  #starsLayer;
  #bigPlanetLayer;
  #farPlanetsLayer;
  #ringPlanetLayer;
  constructor() {
    this.#starsLayer = new Layer(0, document.getElementById("bg-space-stars"), 1);
    this.#bigPlanetLayer = new Layer(900, document.getElementById("bg-space-big-planet"), 1.5);
    this.#farPlanetsLayer = new Layer(100, document.getElementById("bg-space-far-planets"), 2);
    this.#ringPlanetLayer = new Layer(0, document.getElementById("bg-space-ring-planet"), 2.5);
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
}

export { Game };
