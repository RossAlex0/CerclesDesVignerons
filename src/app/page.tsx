"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import ParallaxBackground from "@/components/ParallaxBackground";

import "@/styles/home.css";

export default function Home() {
  const router = useRouter();

  return (
    <ParallaxBackground>
      <section>
        <div>
          <Image
            src="/logo/simple_white_logo.svg"
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
              onClick={() => router.push("/wine")}
              style={{ backgroundColor: "#B6935E", color: "#ffffff" }}
            >
              Découvrez nos vins
            </button>
            <button type="button">Contactez-nous</button>
          </div>
        </div>
      </section>
    </ParallaxBackground>
  );
}
