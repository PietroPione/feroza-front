import React from "react";
import ButtonPrimary from "./buttonPrimary";

export default function HeroHome({ items }) {
  return (
    <div className="relative h-[50vh] flex items-center px-8">
      <div className="container">

        {/* Testo */}
        <div className="max-w-lg text-center md:text-left space-y-6 relative z-10">
          <div className="space-y-6">
            <div className="text-46 leading-none md:text-60 font-bold">{items.testo}</div>
            <div className="text-32 leading-none">{items.spiega}</div>
          </div>
          <ButtonPrimary url={items.link_tasto?.text} testo={items.testo_tasto} externalLink />
        </div>
      </div>

      {/* Immagine di sfondo */}
      {items.immagine_background?.url && (
        <img
          src={items.immagine_background.url}
          alt={items.titolo}
          className="absolute right-0 top-0 h-full w-auto opacity-15 md:opacity-100"
        />
      )}
    </div>
  );
}
