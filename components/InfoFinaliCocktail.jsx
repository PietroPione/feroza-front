import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";

export default function InfoFinaliCockatil({ immagineFinale, chiusa, testoFinale }) {
  return (
    <div className="container mx-auto p-4 md:p-0 space-y-10 md:space-y-6">

      <div className={`flex flex-col md:flex-row gap-4 items-center 
        }`}
      >{immagineFinale && (
        <div className="flex md:w-1/3 justify-center">
          <Image
            src={immagineFinale}
            alt="Immagine finale"
            width={300}
            height={300}
            className="w-auto h-32 md:h-48 object-contain"
          />
        </div>
      )}

        {testoFinale && Array.isArray(testoFinale) && (
          <div className="pt-4 text-17 md:text-22 md:pt-0 md:w-2/3">
            <PrismicRichText field={testoFinale} />
          </div>
        )}

      </div>



      {chiusa && Array.isArray(chiusa) && (
        <div className="text-center text-32">
          <PrismicRichText field={chiusa} />
        </div>
      )}
    </div>
  );
}
