// Core
import fs from "fs-extra";

export const getLogById = async (logId, logsDir) => {
  try {
    const log = await fs.readFile(`${logsDir}/${logId}.json`);
    return JSON.parse(log);
  } catch (error) {
    throw new Error(`Log with id "${logId}" not found`);
  }
};
