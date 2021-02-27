import { actionTypes } from "./types";

export const asteroidsActions = {
  // Sync
  fillAsteroids: (asteroids) => {
    return {
      type: actionTypes.FILL_ASTEROIDS,
      payload: asteroids,
    };
  },
  // Async
  loadAsteroidsAsync: () => {
    return {
      type: actionTypes.LOAD_ASTEROIDS_ASYNC,
    };
  },
};
