import Image from "next/image";

import "./header.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Image
        src="/logo/logo_blanc.svg"
        alt="vignerons"
        width={150}
        height={75}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,[...]"
      />
    </nav>
  );
}
