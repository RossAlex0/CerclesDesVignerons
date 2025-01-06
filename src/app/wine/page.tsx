"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ParallaxBackground from "@/components/ParallaxBackground";
import { handleSpeak, handleStop, Region } from "./services";
import { screenWidth } from "@/components/Footer/services";
import regions from "./regions.json";

import Footer from "@/components/Footer/Index";
import Header from "@/components/Header/Index";

import "./wine.css";

export default function WineScreen() {
  const router = useRouter();

  const [regionActive, setRegionActive] = useState<Region>(regions[0]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [widthPx, setWidthPx] = useState<number>();

  useEffect(() => {
    screenWidth(setWidthPx);
  }, []);

  return (
    <>
      <Header />
      <ParallaxBackground background_URL={regionActive?.image}>
        <section className="wine_container">
          <div className="wine_region">
            <div className="region_btn">
              <button
                type="button"
                onClick={() => router.back()}
                className="backBtn"
              >
                ◁ Retour
              </button>
              {regions.map((region) => (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setRegionActive(region)}
                  style={
                    regionActive?.name === region.name
                      ? {
                          backgroundColor: "#2b090bd1",
                          color: "var(--white-color)",
                        }
                      : {
                          background: "#ffffffcd",
                          color: "var(--primary-color)",
                        }
                  }
                >
                  {region.name}
                </button>
              ))}
            </div>
            <div className="region_description">
              <h1>Description</h1>
              <p>
                {widthPx && widthPx < 720
                  ? regionActive.descriptionTel
                  : regionActive.description}
              </p>
              <div className="absolute_link">
                <div className="sound_btn_container">
                  <button
                    type="button"
                    onClick={() =>
                      handleSpeak(
                        widthPx && widthPx < 720
                          ? regionActive.descriptionTel
                          : regionActive.description,
                        setIsSpeaking
                      )
                    }
                    style={
                      isSpeaking ? { opacity: 0.85 } : { cursor: "pointer" }
                    }
                    disabled={isSpeaking}
                  >
                    🔊
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStop(setIsSpeaking)}
                    style={
                      isSpeaking ? { cursor: "pointer" } : { opacity: 0.85 }
                    }
                    disabled={!isSpeaking}
                  >
                    🔇
                  </button>
                </div>
                <a href="#" download={"CercleDesVignerons_Tarifs"}>
                  Télécharger la grille tarifaire
                </a>
              </div>
            </div>
          </div>
        </section>
      </ParallaxBackground>
      <Footer viewContact={false} />
    </>
  );
}
