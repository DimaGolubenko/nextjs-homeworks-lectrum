import { getLogById } from "../../../../helpers/api";

const logsDir = "./logs/graphql";

export default async (req, res) => {
  const { id: logId } = req.query;
  try {
    const log = await getLogById(logId, logsDir);
    res.status(200).json({ data: log });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
