import { asImageSrc } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

export default function InfoFinaliVinoBirra({ infoFinaliVino, chiusa }) {
  return (
    <div className="container mx-auto p-4 md:p-0 space-y-10 md:space-y-6">
      {infoFinaliVino.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row gap-4 items-center ${index % 2 === 0 ? "md:flex-row-reverse text-left" : "text-left md:text-right"
            }`}
        >
          {item.immagine && (
            <img
              src={asImageSrc(item.immagine)}
              alt=""
              className="w-2/3 md:w-1/3"
            />
          )}
          <div className="pt-4 text-17 md:text-22 md:pt-0 md:w-2/3">
            {/* Passa l'intero campo rich text invece di iterare sui paragrafi */}
            <PrismicRichText field={item.testo} />
          </div>
        </div>
      ))}
      {chiusa && (
        <div className="text-center text-32">
          <PrismicRichText field={chiusa} />
        </div>
      )}
    </div>
  );
}
