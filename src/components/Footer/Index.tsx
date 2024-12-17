import Image from "next/image";

import "./footer.css";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #FFFFFF" }}>
      <p style={{ color: "#FFFFFF" }}>
        27 route de l’europe, 33910 Saint-Denis de pile
      </p>
      <div>
        <Image
          src="/icon/tel_white.svg"
          alt="tel"
          width={24}
          height={24}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,[...]"
        />
        <p style={{ color: "#FFF" }}>06 85 49 84 37 </p>
      </div>
      <div>
        <Image
          src="/icon/mail_white.svg"
          alt="mail"
          width={24}
          height={24}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,[...]"
        />
        <p style={{ color: "#FFF" }}>cercledesvigneron@aol.fr</p>
      </div>
    </footer>
  );
}
