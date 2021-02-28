import fs from "fs-extra";

// Actions
import { userActions } from "../bus/user/actions";

// Selectors
import { selectUserId, selectUserVisitCounts, selectUserType } from "../bus/user/selectors";

// Other
import { getUserData, serverDispatch } from "../helpers";

export const initialDispatcher = async (context, store) => {
  const { userId, userType, visitCount } = await getUserData(context, fs);
  await serverDispatch(store, (dispatch) => {
    dispatch(userActions.fillUser(userId));
    dispatch(userActions.setVisitCounts(visitCount));
    dispatch(userActions.setUserType(userType));
  });

  const state = store.getState();

  const stateUpdates = {
    user: {
      userId: selectUserId(state),
      visitCounts: selectUserVisitCounts(state),
      userType: selectUserType(state),
    },
  };

  return { store, stateUpdates };
};
