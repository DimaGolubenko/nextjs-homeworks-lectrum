// Core
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// Selector
import { selectCar } from "../bus/cars/selectors";

// Components
import { Card } from "../elements/Card";

export const Car = () => {
  const router = useRouter();
  const { car: carId } = router.query;

  const car = useSelector((state) => selectCar(state, carId));
  return (
    <>
      <h2>Car {car.id}</h2>
      <Card data={car} />
    </>
  );
};
