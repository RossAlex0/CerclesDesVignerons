import { Region } from "@/app/wine/services";
import { useRouter } from "next/navigation";

import regions from "@/app/wine/regions.json";

import "./descriptionMobile.css";
import Image from "next/image";
import { useState } from "react";

export default function DescriptionMobile({
  region,
  setRegion,
}: {
  region: Region;
  setRegion: (state: Region) => void;
}) {
  const router = useRouter();

  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchStart = e.touches[0];
    setStartX(touchStart.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchMove = e.touches[0];
    setEndX(touchMove.clientX);
  };

  const handleTouchEnd = () => {
    if (startX > endX + 50) {
      if (region.id >= regions.length) {
        setRegion(regions[region.id - 1 + 1]);
      }
    } else if (startX < endX - 50) {
      if (region.id <= 1) {
        setRegion(regions[region.id - 1 - 1]);
      }
    }
  };

  return (
    <div className="mobile_container">
      <button
        type="button"
        onClick={() => router.back()}
        className="mobile_backBtn"
      >
        ◁ Retour
      </button>
      <div className="mobile_chips">
        <button
          type="button"
          onClick={() => setRegion(regions[region.id - 1 - 1])}
          disabled={region.id <= 1}
        >
          <Image
            src={"/icon/backCarousel.svg"}
            alt="Back arrow"
            width={24}
            height={24}
          />
        </button>
        <h2 style={{ color: "white" }}>{region.name}</h2>
        <button
          type="button"
          onClick={() => setRegion(regions[region.id - 1 + 1])}
          disabled={region.id >= regions.length}
        >
          <Image
            src={"/icon/backCarousel.svg"}
            alt="Back arrow"
            width={24}
            height={24}
          />
        </button>
      </div>
      <section
        className="mobile_carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <p>{region.descriptionTel}</p>
        <a href="#" download={"CercleDesVignerons_Tarifs"}>
          Télécharger la grille tarifaire
        </a>
      </section>
    </div>
  );
}
