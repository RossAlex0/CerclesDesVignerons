import Image from "next/image";
import contact from "./contact.json";

export default function Contact() {
  return (
    <div>
      <section>
        {contact.map((c) => (
          <>
            <div>
              <h2>{c.title}</h2>
              {c.type === "adresse" ? (
                <address>{c.description}</address>
              ) : (
                <a
                  href={`${c.type === "mail" ? "mailto" : "tel"}:${
                    c.description
                  }`}
                >
                  {c.description}
                </a>
              )}
            </div>
          </>
        ))}
        <p>
          Luc Lacombe, président du Cercle des Vignerons et Yoan Lacombe
          négociant en vins, sont à votre disposition pour vous accompagner dans
          vos projets autour du vin.
        </p>
        <p>
          Nous serons ravis de répondre à toutes vos demandes. À bientôt autour
          d'un verre de vin d'exception ! 🍷
        </p>
      </section>
      <section>
        <div>
          <Image
            src="/logo/white_logo.svg"
            alt="vignerons"
            width={200}
            height={200}
          />
        </div>
      </section>
    </div>
  );
}
