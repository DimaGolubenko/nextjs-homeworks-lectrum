// Core
import fs from "fs-extra";
import { join } from "path";

export const getLogs = async (logsDir) => {
  try {
    const logsNames = (await fs.readdir(logsDir)).map((file) => join(logsDir, file));
    const logs = [];
    await Promise.all(
      logsNames.map(async (logName) => {
        const log = await fs.readFile(logName);
        logs.push(JSON.parse(log));
      })
    );
    return logs;
  } catch (error) {
    throw new Error(error);
  }
};
