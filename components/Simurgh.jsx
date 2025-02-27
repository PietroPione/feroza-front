import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

export default function Simurgh({ simurgh }) {
  return (
    <div className="mx-auto space-y-10 pt-40 md:mt-20 pb-20 md:pb-60 relative">
      {simurgh.map((slice, index) => {
        const {
          immagine_absolute_top,
          immagine_absolute_top_center,
          immagine_absolute_bottom,
          sezioni,
        } = slice.primary;

        return (
          <div key={index}>
            {/* Immagine in alto a sinistra */}
            {immagine_absolute_top?.url &&
              immagine_absolute_top.dimensions && (
                <Image
                  src={immagine_absolute_top.url}
                  alt={immagine_absolute_top.alt || ""}
                  width={immagine_absolute_top.dimensions.width}
                  height={immagine_absolute_top.dimensions.height}
                  className="absolute top-0 left-0 w-auto h-36 md:h-48"
                />
              )}

            {/* Immagine in alto, centrata */}
            {immagine_absolute_top_center?.url &&
              immagine_absolute_top_center.dimensions && (
                <Image
                  src={immagine_absolute_top_center.url}
                  alt={immagine_absolute_top_center.alt || ""}
                  width={immagine_absolute_top_center.dimensions.width}
                  height={immagine_absolute_top_center.dimensions.height}
                  className="absolute top-0 right-2 hidden md:block md:left-1/2 h-36 w-auto transform md:-translate-x-1/2"
                />
              )}

            {/* Contenuto delle sezioni */}
            {sezioni.map((sezione, subIndex) => {
              const hasImage =
                sezione.immagine &&
                sezione.immagine.url &&
                sezione.immagine.dimensions;

              return (
                <div
                  key={`${index}-${subIndex}`}
                  className={`container flex flex-col md:flex-row ${subIndex % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                    } items-center gap-8`}
                >
                  <div
                    className={`w-full text-17 md:text-22 ${hasImage ? "md:w-3/4" : "md:w-full text-center"
                      }`}
                  >
                    <PrismicRichText field={sezione.testo} />
                  </div>

                  {hasImage && (
                    <div className="flex justify-center items-center">
                      <div className="w-full">
                        <Image
                          src={sezione.immagine.url}
                          alt={sezione.immagine.alt || ""}
                          width={sezione.immagine.dimensions.width}
                          height={sezione.immagine.dimensions.height}
                          className="w-auto h-72 md:h-96"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Immagine in basso a destra */}
            {immagine_absolute_bottom?.url &&
              immagine_absolute_bottom.dimensions && (
                <Image
                  src={immagine_absolute_bottom.url}
                  alt={immagine_absolute_bottom.alt || ""}
                  width={immagine_absolute_bottom.dimensions.width}
                  height={immagine_absolute_bottom.dimensions.height}
                  className="absolute w-full h-auto bottom-0 right-0"
                />
              )}
          </div>
        );
      })}
    </div>
  );
}
