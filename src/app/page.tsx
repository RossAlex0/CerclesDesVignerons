"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Header from "@/components/Header/Index";
import Footer from "@/components/Footer/Index";

import "@/styles/home.css";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    backgroundParallaxe();
  }, []);

  function backgroundParallaxe() {
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
      className="main"
      style={{
        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
      }}
    >
      <Header />

      <section>
        <div>
          <Image
            src="/logo/simple_logo_white.svg"
            alt="cdv"
            width={200}
            height={200}
          />
          <h1>
            Savourez l&apos;authenticité <br /> des vins de Saint-Émilion.
          </h1>
          <div className="btn">
            <button
              type="button"
              style={{ backgroundColor: "#B6935E", color: "#ffffff" }}
            >
              Découvrez nos vins
            </button>
            <button type="button">Contactez-nous</button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
