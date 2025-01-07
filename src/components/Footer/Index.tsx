import Image from "next/image";
import useWindowWidth from "@/services/useWindowWidth";

import Contact from "@/components/Contact/index";

import "./footer.css";

export default function Footer({ viewContact }: { viewContact?: boolean }) {
  const windowWidth = useWindowWidth();

  return (
    <footer
      style={
        viewContact
          ? { height: "86dvh" }
          : { height: windowWidth < 720 ? "5dvh" : "10dvh" }
      }
    >
      {viewContact ? (
        <Contact />
      ) : (
        <>
          <div className="div_min">
            <p>27 route de l’europe, 33910 Saint-Denis de pile</p>
          </div>
          <div className="div_min">
            <Image src="/icon/tel_white.svg" alt="tel" width={24} height={24} />
            <p>06 85 49 84 37 </p>
          </div>
          <div className="div_min">
            <Image
              src="/icon/mail_white.svg"
              alt="mail"
              width={24}
              height={24}
            />
            <p>cercledesvigneron@aol.fr</p>
          </div>
        </>
      )}
    </footer>
  );
}
