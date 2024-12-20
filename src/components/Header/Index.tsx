import Image from "next/image";

import "./header.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Image
        src="/logo/white_logo.svg"
        alt="vignerons"
        width={150}
        height={75}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,[...]"
      />
    </nav>
  );
}
