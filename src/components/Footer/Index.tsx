import Image from "next/image";
import useWindowWidth from "@/services/useWindowWidth";

import Contact from "@/components/Contact/index";
import contactsJson from "@/components/Contact/contact.json";

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
            {contactsJson.map(
              (c) =>
                c.title === "Adresse" && (
                  <address key={c.title}>{c.description}</address>
                )
            )}
          </div>
          <div className="div_min">
            <Image src="/icon/tel_white.svg" alt="tel" width={24} height={24} />
            {contactsJson.map(
              (c) =>
                c.title === "Téléphone" && (
                  <a key={c.title} href={`${c.type}:${c.description}`}>
                    {c.description}
                  </a>
                )
            )}
          </div>
          <div className="div_min">
            <Image
              src="/icon/mail_white.svg"
              alt="mail"
              width={24}
              height={24}
            />
            {contactsJson.map(
              (c) =>
                c.title === "Mail" && (
                  <a key={c.title} href={`${c.type}:${c.description}`}>
                    {c.description}
                  </a>
                )
            )}
          </div>
        </>
      )}
    </footer>
  );
}
