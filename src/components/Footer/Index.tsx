import Image from "next/image";

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
          width={60}
          height={60}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,[...]"
        />
        <p style={{ color: "#000" }}>06 85 49 84 37 </p>
      </div>
      <div>
        <Image
          src="/icon/mail_white.svg"
          alt="mail"
          width={60}
          height={60}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,[...]"
        />
        <p style={{ color: "#000" }}>cercledesvigneron@aol.fr</p>
      </div>
    </footer>
  );
}
