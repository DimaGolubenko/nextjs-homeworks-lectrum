// Core
import fs from "fs-extra";
import { v4 as uuid } from "uuid";

export const createLog = async (req, logsDir) => {
  try {
    const { body: payload, cookies, headers } = req;
    const data = {
      logId: uuid(),
      created: new Date(),
      userId: cookies.userId || payload.userId,
      userAgent: headers["user-agent"],
      payload,
    };
    await fs.writeFile(`${logsDir}/${data.logId}.json`, JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
