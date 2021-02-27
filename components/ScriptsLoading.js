import { useState, useEffect } from "react";

export const ScriptsLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading scripts...</div>;
  }
  return null;
};
