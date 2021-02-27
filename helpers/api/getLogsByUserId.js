import { getLogs } from ".";

export const getLogsByUserId = async (userId, logsDir) => {
  const logs = await getLogs(logsDir);
  const userLogs = logs.filter((log) => log.userId === userId);

  if (!userLogs.length) {
    throw new Error(`logs with userId "${userId}" not found`);
  }
  return userLogs;
};
