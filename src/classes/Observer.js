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

  observeFlyingObjects(arrayOfFlyingObjects) {
    for (let i = 0; i < arrayOfFlyingObjects.length; i++) {
      let isDestroyed = arrayOfFlyingObjects[i].getHasBeenDestroyed();
      if (isDestroyed) {
        this.removeObjectFromArray(arrayOfFlyingObjects, arrayOfFlyingObjects[i].getUid());
      }
    }
    console.log(arrayOfFlyingObjects);
  }

  observeEvents(arrayOfPressedKeys, layers, spaceship) {
    setInterval(() => {
      this.observeKeysPressed(arrayOfPressedKeys, layers, spaceship);
    }, 100);
  }
  observeObjects(arrayOfFlyingObjects) {
    setInterval(() => {
      this.observeFlyingObjects(arrayOfFlyingObjects);
    }, 100);
  }

  removeObjectFromArray(array, uid) {
    let i = array
      .map((x) => {
        return x.getUid();
      })
      .indexOf(uid);
    console.log(i);
    array.splice(i, 1);
  }
}

export { Observer };
