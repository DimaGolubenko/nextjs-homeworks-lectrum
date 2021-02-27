export const verifyHttpMethod = (req) => {
  const isGet = req.method === "GET";
  const isPost = req.method === "POST";

  return {
    isGet,
    isPost,
  };
};
