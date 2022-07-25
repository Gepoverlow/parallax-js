class EventObserver {
  observeKeysPressed(arrayOfPressedKeys, layers) {
    if (arrayOfPressedKeys.includes("ArrowRight")) {
      for (let i = 0; i < layers.length; i++) {
        let layerDomElement = layers[i].getDomElement();
        let layerCurrentX = layers[i].getXpositionI();
        let layerMovMultiplier = layers[i].getMovementMultiplier();
        let layerFutureX = layerCurrentX - 15 * layerMovMultiplier;
        layerDomElement.style.backgroundPositionX = layerFutureX + "px";
        layers[i].setXpositionI(layerFutureX);

        layers[i].checkForTranslateForwards();

        if (layers[i].getXpositionI() < layers[i].getXpositionF()) {
          layers[i].setXpositionI(screen.width);
        }
      }
    }

    if (arrayOfPressedKeys.includes("ArrowLeft")) {
      for (let i = 0; i < layers.length; i++) {
        let layerDomElement = layers[i].getDomElement();
        let layerCurrentX = layers[i].getXpositionI();
        let layerMovMultiplier = layers[i].getMovementMultiplier();
        let layerFutureX = layerCurrentX + 15 * layerMovMultiplier;
        layerDomElement.style.backgroundPositionX = layerFutureX + "px";
        layers[i].setXpositionI(layerFutureX);

        layers[i].checkForTranslateBackwards();

        if (layers[i].getXpositionI() > screen.width) {
          layers[i].setXpositionI(layers[i].getXpositionF());
        }
      }
    }
  }

  observe(arrayOfPressedKeys, layers) {
    setInterval(() => {
      this.observeKeysPressed(arrayOfPressedKeys, layers);
    }, 100);
  }
}

export { EventObserver };
