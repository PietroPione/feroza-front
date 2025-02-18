import { createClient } from "@/prismicio";
import SezioniHome from "@/components/SezioniHome";
import HeroHome from "@/components/HeroHome";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

export default async function HomePage() {
  const client = createClient();

  // Recupera il documento del custom type "feroza"
  const response = await client.getByType("feroza");
  const homepage = response.results[0];

  if (!homepage) {
    return <p>Documento homepage non trovato</p>;
  }

  const mappedSlices = homepage.data.slices.map((slice) => ({
    type: slice.slice_type,
    primary: slice.primary,
  }));

  const heroSlice = mappedSlices.find((slice) => slice.type === "hero");
  const sezioniHomeSlice = mappedSlices.find((slice) => slice.type === "sezioni_home");
  const ferozaSlices = mappedSlices.filter((slice) => slice.type === "feroza");

  const sezioniHomeItems = sezioniHomeSlice?.primary?.sezioni_home || [];
  const heroHomeItems = heroSlice?.primary || [];

  return (
    <div>
      <HeroHome items={heroHomeItems} />
      <SezioniHome items={sezioniHomeItems} />

      {/* Sezioni Feroza */}
      <div className="container mx-auto py-10 space-y-10">
        {ferozaSlices.map((slice, index) =>
          slice.primary.sezioni.map((sezione, subIndex) => (
            <div
              key={`${index}-${subIndex}`}
              className={`flex flex-col md:flex-row ${
                subIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <PrismicRichText field={sezione.testo} />
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src={sezione.immagine.url}
                  alt={sezione.immagine.alt || ""}
                  width={sezione.immagine.dimensions.width}
                  height={sezione.immagine.dimensions.height}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
