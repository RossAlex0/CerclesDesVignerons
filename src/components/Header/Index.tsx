import Image from "next/image";

import "./header.css";

export default function Navbar({
  viewContact,
  setViewContact,
}: {
  viewContact?: boolean;
  setViewContact?: (state: boolean) => void;
}) {
  return (
    <nav className="navbar">
      {viewContact ? (
        <button
          type="button"
          className="backButton"
          onClick={() => setViewContact && setViewContact(false)}
        >
          ◁ Retour
        </button>
      ) : (
        <Image
          src="/logo/white_logo.svg"
          alt="vignerons"
          width={150}
          height={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,[...]"
        />
      )}
    </nav>
  );
}
