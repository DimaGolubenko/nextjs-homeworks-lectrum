// Core
import { useSelector } from "react-redux";

// Selectors
import { selectDiscounts } from "../bus/discounts/selectors";

// Components
import { Card } from "../elements/Card";

export const Discounts = () => {
  const discounts = useSelector(selectDiscounts);
  const discountsJSX = discounts && discounts.map((post) => <Card data={post} key={post.id} />);
  return (
    <div className="card-list">
      <h2>Discounts</h2>
      {discounts && <>{discountsJSX}</>}
    </div>
  );
};
