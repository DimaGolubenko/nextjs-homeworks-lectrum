// Core
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// Selectors
import { selectDiscount } from "../bus/discounts/selectors";

// Components
import { Card } from "../elements/Card";

export const Discount = () => {
  const router = useRouter();
  const { discount: discountId } = router.query;

  const discount = useSelector((state) => selectDiscount(state, discountId));
  return (
    <>
      <h2>Discount {discount.id}</h2>
      <Card data={discount} />
    </>
  );
};
