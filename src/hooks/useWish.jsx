import { useState, useEffect } from "react";

const useWish = () => {
  const [wish, setWish] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wish")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("wish", JSON.stringify(wish));
  }, [wish]);

  return [wish, setWish];
};

export default useWish;
