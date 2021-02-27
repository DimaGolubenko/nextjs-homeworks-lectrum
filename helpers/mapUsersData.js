export const mapUsersData = (users, userId, visitCount) => {
  const isNewUser = !users.find((user) => user.userId === userId);

  if (isNewUser) {
    return [...users, { userId, visitCount }];
  }

  return users.map((user) => {
    if (user.userId === userId) {
      user.visitCount = visitCount;
    }
    return user;
  });
};
