import { useState, useEffect } from "react";

export default function useWindowWidth(): number {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getWindowWidth = () => {
        setScreenWidth(window.innerWidth);
      };

      getWindowWidth();

      window.addEventListener("resize", getWindowWidth);

      return () => {
        window.removeEventListener("resize", getWindowWidth);
      };
    }
  }, []);

  return screenWidth;
}
