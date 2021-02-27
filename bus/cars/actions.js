import { actionTypes } from "./types";

export const carsActions = {
  fillCars: (payload) => {
    return {
      type: actionTypes.FILL_CARS,
      payload,
    };
  },
};
