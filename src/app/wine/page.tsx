"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import ParallaxBackground from "@/components/ParallaxBackground";
import { handleSpeak, handleStop, Region } from "./services";
import regions from "./regions.json";

import "./wine.css";

export default function WineScreen() {
  const router = useRouter();

  const [regionActive, setRegionActive] = useState<Region>(regions[0]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  return (
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
                key={region.name}
                type="button"
                onClick={() => setRegionActive(region)}
                style={
                  regionActive?.name === region.name
                    ? {
                        backgroundColor: "#2b090bd1",
                        color: "var(--white-color)",
                      }
                    : { background: "#ffffffcd", color: "var(--primary-color)" }
                }
              >
                {region.name}
              </button>
            ))}
          </div>
          <div className="region_description">
            <h1>Description</h1>
            <p>{regionActive.description}</p>
            <button
              type="button"
              onClick={() =>
                handleSpeak(regionActive.description, setIsSpeaking)
              }
              style={
                isSpeaking ? { border: "none" } : { border: "1px solid green" }
              }
              disabled={isSpeaking}
            >
              🔊
            </button>
            <button
              type="button"
              onClick={() => handleStop(setIsSpeaking)}
              style={
                isSpeaking ? { border: "1px solid red" } : { border: "none" }
              }
              disabled={!isSpeaking}
            >
              🔇
            </button>
          </div>
        </div>
      </section>
    </ParallaxBackground>
  );
}
