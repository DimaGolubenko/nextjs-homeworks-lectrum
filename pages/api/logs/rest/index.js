import { getLogs, getLogsByUserId, createLog, verifyHttpMethod } from "../../../../helpers/api";

const logsDir = "./logs/rest";

export default async (req, res) => {
  const { userId } = req.query;
  const { isGet, isPost } = verifyHttpMethod(req);
  if (isGet) {
    if (userId) {
      try {
        const logs = await getLogsByUserId(userId, logsDir);
        res.status(200).json({ data: logs });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    } else {
      try {
        const logs = await getLogs(logsDir);
        res.status(200).json({ data: logs });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  }

  if (isPost) {
    try {
      const log = await createLog(req, logsDir);
      res.status(200).json({ log });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};
