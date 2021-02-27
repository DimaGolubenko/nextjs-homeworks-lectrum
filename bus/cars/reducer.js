import { actionTypes } from "./types";

const initialState = {
  list: null,
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILL_CARS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
