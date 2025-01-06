import { useState, useEffect } from "react";

export default function useWindowWidth(): number {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const getWindowWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", getWindowWidth);

    return () => {
      window.removeEventListener("resize", getWindowWidth);
    };
  }, []);
  return screenWidth;
}
