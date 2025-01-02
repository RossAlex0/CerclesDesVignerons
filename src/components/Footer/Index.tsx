import Image from "next/image";

import "./footer.css";
import Contact from "@/components/Contact/index";

export default function Footer({ viewContact }: { viewContact?: boolean }) {
  return (
    <footer style={viewContact ? { height: "86vh" } : { height: "10vh" }}>
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
