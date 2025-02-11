import React from "react";
import ButtonPrimary from "./buttonPrimary";

export default function HeroHome({ items }) {
  return (
    <div className="container flex justify-between h-[50vh]">
<div className="justify-center flex flex-col space-y-6">
  <div className="spca-y-0">

<div className="text-60 font-bold">{items.testo}</div>
<div className="text-32">{items.spiega}</div>
  </div>
<ButtonPrimary url={items.link_tasto} testo={items.testo_tasto} />
</div>
{items.immagine_background?.url && (
            <img
              src={items.immagine_background.url}
              alt={items.titolo}
              className=" h-96 w-auto"
            />
          )}
    </div>
  );
}
