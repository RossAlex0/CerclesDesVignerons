import { useEffect, useState } from "react";

import "./parallaxBackground.css";

export default function ParallaxBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
      }}
    >
      {children}
    </main>
  );
}
