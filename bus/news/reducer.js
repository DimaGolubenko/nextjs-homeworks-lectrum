import { actionTypes } from "./types";

const initialState = {
  list: null,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILL_NEWS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
