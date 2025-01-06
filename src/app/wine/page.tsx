"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import ParallaxBackground from "@/components/ParallaxBackground";
import { handleSpeak, handleStop, Region } from "./services";
import useWindowWidth from "@/services/useWindowWidth";
import regions from "./regions.json";

import Footer from "@/components/Footer/Index";
import Header from "@/components/Header/Index";

import "./wine.css";
import DescriptionMobile from "@/components/DescriptionMobile";

export default function WineScreen() {
  const router = useRouter();
  const windowWidth = useWindowWidth();

  const [regionActive, setRegionActive] = useState<Region>(regions[0]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  return (
    <>
      <Header />
      <ParallaxBackground background_URL={regionActive?.image}>
        <section className="wine_container">
          {windowWidth > 720 ? (
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
                <p>{regionActive.description}</p>
                <div className="absolute_link">
                  <div className="sound_btn_container">
                    <button
                      type="button"
                      onClick={() =>
                        handleSpeak(regionActive.description, setIsSpeaking)
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
          ) : (
            <DescriptionMobile
              region={regionActive}
              setRegion={setRegionActive}
            />
          )}
        </section>
      </ParallaxBackground>
      <Footer viewContact={false} />
    </>
  );
}
