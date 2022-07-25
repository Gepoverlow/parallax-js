class EventObserver {
  observeKeysPressed(arrayOfPressedKeys, layers) {
    if (arrayOfPressedKeys.includes("ArrowRight")) {
      for (let i = 0; i < layers.length; i++) {
        layers[i].moveLayerRight();
      }
    }

    if (arrayOfPressedKeys.includes("ArrowLeft")) {
      for (let i = 0; i < layers.length; i++) {
        layers[i].moveLayerLeft();
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
