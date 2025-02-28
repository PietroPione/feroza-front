import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

export default function FerozaInfo({ ferozaSlices }) {
  return (
    <div className="container mx-auto py-10 space-y-10">
      {ferozaSlices.map((slice, index) =>
        slice.primary.sezioni.map((sezione, subIndex) => (
          <div
            key={`${index}-${subIndex}`}
            className={`flex flex-col md:flex-row ${subIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
          >
            <div className="w-full text-17 md:text-22 md:w-3/4">
              <PrismicRichText field={sezione.testo} />
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full">
                <Image
                  src={sezione.immagine.url}
                  alt={sezione.immagine.alt || ""}
                  width={sezione.immagine.dimensions.width}
                  height={sezione.immagine.dimensions.height}
                  className="w-auto h-72 md:h-96"
                  fetchpriority={index === 0 && subIndex === 0 ? "high" : "low"} // Aggiunta fetchpriority
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}