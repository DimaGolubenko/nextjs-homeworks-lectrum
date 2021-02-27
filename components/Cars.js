// Core
import { useSelector } from "react-redux";

// Components
import { Card } from "../elements/Card";

// Selectors
import { selectCars } from "../bus/cars/selectors";

export const Cars = () => {
  const cars = useSelector(selectCars);
  const carsJSX = cars && cars.map((post) => <Card data={post} key={post.id} />);
  return (
    <div className="card-list">
      <h2>Cars</h2>
      {cars && <>{carsJSX}</>}
    </div>
  );
};
