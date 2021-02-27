import { types } from "./types";

const initialState = {
  entries: null,
  isLoading: false,
};

export const catsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_CATS_START:
      return { ...state, isLoading: true };
    case types.LOAD_CATS_END:
      return { ...state, isLoading: false };
    case types.FILL_CATS:
      return { ...state, entries: payload };

    default:
      return state;
  }
};
