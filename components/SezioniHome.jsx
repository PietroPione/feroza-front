import React from "react";

export default function SezioniHome({ items }) {
  return (
    <div className="container">
      {items.map((item, index) => (
        <div key={index} className="flex space-x-20 my-4">
          {item.foto?.url && (
            <img
              src={item.foto.url}
              alt={item.titolo}
              className="h-96 w-auto"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold">{item.titolo}</h2>
            <p>{item.spiega_servizio}</p>
            <button className="btn-primary">{item.testo_tasto}</button>
          </div>
          {item.disegnino?.url && (
            <img
              src={item.disegnino.url}
              alt="Disegnino"
              className="h-96 w-auto"
            />
          )}
        </div>
      ))}
    </div>
  );
}
