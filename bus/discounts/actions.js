import { actionTypes } from "./types";

export const discountsActions = {
  fillDiscounts: (payload) => {
    return {
      type: actionTypes.FILL_DISCOUNTS,
      payload,
    };
  },
};
