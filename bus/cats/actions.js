import { types } from "./types";

export const catsActions = {
  loadCatsStart: () => {
    return {
      type: types.LOAD_CATS_START,
    };
  },
  loadCatsEnd: () => {
    return {
      type: types.LOAD_CATS_END,
    };
  },
  fillCats: (cats) => {
    return {
      type: types.FILL_CATS,
      payload: cats,
    };
  },
  // Async
  loadCatsAsync: () => {
    return {
      type: types.LOAD_CATS_ASYNC,
    };
  },
};
