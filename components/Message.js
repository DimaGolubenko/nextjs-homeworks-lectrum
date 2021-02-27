import { useSelector } from "react-redux";

import { isGuest, isFriend, isFamilyMember } from "../helpers/getUserData";

export const Message = () => {
  const { userType } = useSelector((state) => state.user);

  const greetingsJSX = (
    <>
      {isGuest(userType) && <div>Приветствуем тебя странник!</div>}
      {isFriend(userType) && <div>Приветствуем тебя друг!</div>}
      {isFamilyMember(userType) && <div>Добро пожаловать в семье!</div>}
    </>
  );

  return <>{greetingsJSX}</>;
};
