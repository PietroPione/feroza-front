import React from "react";
import ButtonPrimary from "./buttonPrimary";

export default function SezioniHome({ items }) {
  return (
    <div className="container">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between gap-x-20 my-4">
          {item.foto?.url && (
            <img
              src={item.foto.url}
              alt={item.titolo}
              className={`${item.testo_a_sinistra ? 'order-2' : 'order-1'} h-96 w-auto`}
            />
          )}
          <div className={`${item.testo_a_sinistra ? 'order-1' : 'order-2'} flex`}>
            <div className="space-y-4">

              <h2 className="text-2xl font-bold text-gray-dark">{item.titolo}</h2>
              <p className="text-gray-light">{item.spiega_servizio}</p>
              <ButtonPrimary url={item.link_tasto} testo={item.testo_tasto} buttonSecondary></ButtonPrimary>
            </div>
            {item.disegnino?.url && (
              <img
                src={item.disegnino.url}
                alt="Disegnino"
                className="h-96 w-auto"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
