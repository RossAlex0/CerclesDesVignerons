import { useEffect, useState } from "react";

import "./parallaxBackground.css";
import useWindowWidth from "@/services/useWindowWidth";

export default function ParallaxBackground({
  children,
  background_URL,
}: {
  children: React.ReactNode;
  background_URL?: string;
}) {
  const screenWidth = useWindowWidth();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [backgroundStateURL, setBackgroundStateURL] = useState(
    "background_home.webp"
  );

  useEffect(() => {
    if (background_URL) {
      setBackgroundStateURL(background_URL);
    }
  }, [background_URL]);

  useEffect(() => {
    if (screenWidth >= 900) {
      parallaxEffect();
    }
  }, [screenWidth]);

  function parallaxEffect() {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      const { clientX, clientY } = event;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      setMousePosition({ x: x * 100, y: y * 30 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }
  return (
    <main
      className="parallax"
      style={{
        backgroundImage: `url(/images/${backgroundStateURL})`,
        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
      }}
    >
      {children}
    </main>
  );
}
