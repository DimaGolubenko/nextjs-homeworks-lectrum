import { createSelector } from "reselect";

export const selectDiscounts = (state) => state.discounts.list;

export const selectDiscount = createSelector(
  selectDiscounts,
  (_, discountId) => discountId,
  (discounts, discountId) => discounts.find((discount) => discount.id === discountId)
);
