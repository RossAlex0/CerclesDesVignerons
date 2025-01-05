import type { Metadata } from "next";

import "../styles/globals.css";
import Head from "next/head";

const preloadPicture = [
  { image: "/images/background_home.webp" },
  { image: "/images/bordeauxReg.webp" },
  { image: "/images/bourgogneReg.webp" },
  { image: "/images/champagneReg.webp" },
  { image: "/images/champagneReg.webp" },
  { image: "/images/rhoneReg.webp" },
];

export const metadata: Metadata = {
  title: "Cercle Des Vignerons",
  description:
    "Site officiel du Cercle des Vignerons de Saint-Émilion, Gironde. Découvrez les appellations viticoles de chaque région, avec une présentation détaillée des terroirs et des vins produits. Accédez également aux coordonnées pour entrer directement en contact.",
  openGraph: {
    title: "Cercle Des Vignerons",
    description:
      "Site officiel du Cercle des Vignerons de Saint-Émilion, Gironde. Découvrez les appellations viticoles de chaque région, avec une présentation détaillée des terroirs et des vins produits. Accédez également aux coordonnées pour entrer directement en contact.",
    images: preloadPicture.map((image) => image.image),
  },
  twitter: {
    title: "Cercle Des Vignerons",
    description:
      "Site officiel du Cercle des Vignerons de Saint-Émilion, Gironde. Découvrez les appellations viticoles de chaque région, avec une présentation détaillée des terroirs et des vins produits. Accédez également aux coordonnées pour entrer directement en contact.",
    images: preloadPicture.map((image) => image.image),
  },
  icons: {
    icon: "/logo/simple_white_logo.svg",
  },
  creator: "Rossignol Alex",
};

const personCDV = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Luc Lacombe",
      jobTitle: "Président Cercle Des Vignerons",
      telephone: "06 85 26 94 30",
      email: "cerclevigneron@aol.fr",
    },
    {
      "@type": "Person",
      name: "Yoan Lacombe",
      jobTitle: "Négociant en vins",
      email: "cerclevigneron@aol.fr",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personCDV) }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
