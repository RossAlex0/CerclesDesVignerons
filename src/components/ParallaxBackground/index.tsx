import { useEffect, useState } from "react";

import "./parallaxBackground.css";

export default function ParallaxBackground({
  children,
  background_URL,
}: {
  children: React.ReactNode;
  background_URL?: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [backgroundURL, setBackgroundURL] = useState("background_home.webp");

  useEffect(() => {
    if (background_URL) {
      setBackgroundURL(background_URL);
    }
  }, [background_URL]);

  useEffect(() => {
    parallaxEffect();
  }, []);

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
        backgroundImage: `url(/images/${backgroundURL})`,
        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
      }}
    >
      {children}
    </main>
  );
}
