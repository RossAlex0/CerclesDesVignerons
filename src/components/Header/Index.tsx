import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Image
        src="/logo/logo_blanc.svg"
        alt="vignerons"
        width={400}
        height={600}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,[...]"
      />
    </nav>
  );
}
