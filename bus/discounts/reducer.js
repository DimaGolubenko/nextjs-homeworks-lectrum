import { actionTypes } from "./types";

const initialState = {
  list: null,
};

export const discountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILL_DISCOUNTS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
