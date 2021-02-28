import nookies from "nookies";
import { v4 as uuid } from "uuid";

import { mapUsersData } from "./mapUsersData";
import { userTypes } from "../bus/user/types";

const generateUserId = () => uuid();

const getUserType = (visitCount) => {
  if (visitCount <= 2) {
    return userTypes.guest;
  }
  if (visitCount > 2 && visitCount < 5) {
    return userTypes.friend;
  }
  return userTypes.familyMember;
};

const setUserCookies = (ctx, userId) => {
  nookies.set(ctx, "userId", userId);
};

export const isGuest = (userType) => userType === userTypes.guest;
export const isFriend = (userType) => userType === userTypes.friend;
export const isFamilyMember = (userType) => userType === userTypes.familyMember;

export const getUserData = async (ctx, fs) => {
  const cookies = nookies.get(ctx);
  const userId = cookies.userId ? cookies.userId : generateUserId();

  const usersJson = await fs.readFile("./data/users.json");
  const users = usersJson.length ? JSON.parse(usersJson) : [];

  const user = users.find((user) => user.userId === userId) || null;
  const visitCount = user ? user.visitCount + 1 : 1;
  const userType = getUserType(visitCount);

  const updatedUsers = users ? mapUsersData(users, userId, visitCount) : [{ userId, visitCount }];
  await fs.writeFile("./data/users.json", JSON.stringify(updatedUsers));
  setUserCookies(ctx, userId);

  return {
    userId,
    userType,
    visitCount,
  };
};
