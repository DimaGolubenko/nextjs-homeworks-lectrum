import { actionTypes, userTypes } from "./types";

const initialState = {
  userId: null,
  visitCounts: 0,
  userType: userTypes.guest,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FILL_USER:
      return { ...state, userId: payload };
    case actionTypes.SET_VISIT_COUNTS:
      return { ...state, visitCounts: payload };
    case actionTypes.SET_USER_TYPE:
      return { ...state, userType: payload };
    default:
      return state;
  }
};
