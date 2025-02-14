import { asImageSrc } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

export default function InfoFinaliVinoBirra({ infoFinaliVino, chiusa }) {
  return (
    <div className="container mx-auto p-4 md:p-0 text-center space-y-6">
      {infoFinaliVino.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
        >
          {item.immagine && (
            <img
              src={asImageSrc(item.immagine)}
              alt=""
              className="w-1/2 md:w-1/3"
            />
          )}
          <div className="w-1/2 md:w-2/3">
            {item.testo.map((paragrafo, pIndex) => (
              <p key={pIndex} className="text-17">
                {paragrafo.text}
              </p>
            ))}
          </div>
        </div>
      ))}
      {chiusa && <PrismicRichText field={chiusa} />}
    </div>
  );
}
