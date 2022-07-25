class EventObserver {
  observeKeysPressed(arrayOfPressedKeys, layers) {
    if (arrayOfPressedKeys.includes("ArrowRight")) {
      for (let i = 0; i < layers.length; i++) {
        let layerDomElement = layers[i].getDomElement();
        let layerCurrentX = layers[i].getXposition();
        let layerMovMultiplier = layers[i].getMovementMultiplier();
        let layerFutureX = layerCurrentX - 3 * layerMovMultiplier;
        layerDomElement.style.backgroundPositionX = layerFutureX + "px";
        layers[i].setXposition(layerFutureX);

        layers[i].getXposition() < -300 ? layers[i].setXposition(1500) : null;
      }
    }

    if (arrayOfPressedKeys.includes("ArrowLeft")) {
      for (let i = 0; i < layers.length; i++) {
        let layerDomElement = layers[i].getDomElement();
        let layerCurrentX = layers[i].getXposition();
        let layerMovMultiplier = layers[i].getMovementMultiplier();
        let layerFutureX = layerCurrentX + 3 * layerMovMultiplier;
        layerDomElement.style.backgroundPositionX = layerFutureX + "px";
        layers[i].setXposition(layerFutureX);

        layers[i].getXposition() > 1500 ? layers[i].setXposition(-300) : null;
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
