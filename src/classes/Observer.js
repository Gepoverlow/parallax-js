class Observer {
  observeKeysPressed(arrayOfPressedKeys, layers, spaceship) {
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

    if (arrayOfPressedKeys.includes("ArrowUp")) {
      spaceship.moveUp();
    }

    if (arrayOfPressedKeys.includes("ArrowDown")) {
      spaceship.moveDown();
    }

    if (arrayOfPressedKeys.includes("Space")) {
      spaceship.shootMissile();
    }
  }

  observeFlyingMeteorites(arrayOfFlyingMeteorites, spaceship) {
    for (let i = 0; i < arrayOfFlyingMeteorites.length; i++) {
      let isDestroyed = arrayOfFlyingMeteorites[i].getHasBeenDestroyed();
      if (isDestroyed) {
        this.removeObjectFromArray(arrayOfFlyingMeteorites, arrayOfFlyingMeteorites[i].getUid());
      } else {
        spaceship.checkForCollision(arrayOfFlyingMeteorites[i]);
      }
    }
  }

  observeEvents(arrayOfPressedKeys, layers, spaceship) {
    setInterval(() => {
      this.observeKeysPressed(arrayOfPressedKeys, layers, spaceship);
    }, 100);
  }
  observeObjects(arrayOfFlyingMeteorites, spaceship) {
    setInterval(() => {
      this.observeFlyingMeteorites(arrayOfFlyingMeteorites, spaceship);
    }, 100);
  }

  removeObjectFromArray(array, uid) {
    let i = array
      .map((x) => {
        return x.getUid();
      })
      .indexOf(uid);
    array.splice(i, 1);
  }
}

export { Observer };
