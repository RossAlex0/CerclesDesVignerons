"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import ParallaxBackground from "@/components/ParallaxBackground";
import Footer from "@/components/Footer/Index";
import Header from "@/components/Header/Index";

import "@/styles/home.css";

export default function Home() {
  const router = useRouter();

  const [viewContact, setViewContact] = useState(false);

  return (
    <>
      <Header viewContact={viewContact} setViewContact={setViewContact} />
      <ParallaxBackground>
        <section className="home">
          <div
            className="home_container"
            style={
              viewContact
                ? { opacity: 0, transition: "all 1s ease-out" }
                : { opacity: 1, transition: "all 4s ease-in" }
            }
          >
            <Image
              src="/logo/simple_white_logo.webp"
              alt="cdv"
              width={200}
              height={200}
            />
            <h1>
              Savourez l&apos;authenticité <br />
              et la richesse des grands vins.
            </h1>
            <div className="home_container_btn">
              <button type="button" onClick={() => router.push("/wine")}>
                Découvrez nos vins
              </button>
              <button type="button" onClick={() => setViewContact(true)}>
                Contactez-nous
              </button>
            </div>
          </div>
        </section>
      </ParallaxBackground>
      <Footer viewContact={viewContact} />
    </>
  );
}
