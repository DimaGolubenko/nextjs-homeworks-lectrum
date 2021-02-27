import { actionTypes } from "./types";

export const newsActions = {
  fillNews: (payload) => {
    return {
      type: actionTypes.FILL_NEWS,
      payload,
    };
  },
};
