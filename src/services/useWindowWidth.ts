import { useState, useEffect } from "react";

export default function useWindowWidth(): number {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const getWindowWidth = () => {
      if (window !== undefined) {
        setScreenWidth(window.innerWidth);
      }
    };

    getWindowWidth();

    window.addEventListener("resize", getWindowWidth);

    return () => {
      window.removeEventListener("resize", getWindowWidth);
    };
  }, []);
  return screenWidth;
}
