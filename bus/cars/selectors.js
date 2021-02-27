import { createSelector } from "reselect";

export const selectCars = (state) => state.cars.list;

export const selectCar = createSelector(
  selectCars,
  (_, carId) => carId,
  (cars, carId) => cars.find((car) => car.id === carId)
);
