import { actionTypes } from "./types";

export const userActions = {
  fillUser: (userId) => {
    return {
      type: actionTypes.FILL_USER,
      payload: userId,
    };
  },
  setVisitCounts: (visitCounts) => {
    return {
      type: actionTypes.SET_VISIT_COUNTS,
      payload: visitCounts,
    };
  },
  setUserType: (userType) => {
    return {
      type: actionTypes.SET_USER_TYPE,
      payload: userType,
    };
  },
};
