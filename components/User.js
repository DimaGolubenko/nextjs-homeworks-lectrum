// Core
import { useDispatch, useSelector } from "react-redux";

// Actions
import { userActions } from "../bus/user/actions";
import { userTypes } from "../bus/user/types";

export const User = () => {
  const { userId, userType, visitCounts } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClick = () => {
    const { guest, friend, familyMember } = userTypes;
    const newUserType = userType === guest ? friend : familyMember;
    dispatch(userActions.setUserType(newUserType));
  };

  return (
    <>
      <p>id: {userId}</p>
      <p>userType: {userType}</p>
      <p>visitCounts: {visitCounts}</p>
      <button onClick={onClick}>Временно повысить свой статус</button>
    </>
  );
};
