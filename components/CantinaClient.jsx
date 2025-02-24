"use client"; // Questo componente usa lo stato, quindi deve essere Client

import { useState } from "react";
import CantinaRipetibile from "@/components/CantinaRipetibile";
import HeroCantina from "@/components/HeroCantina";

export default function CantinaClient({ heroCantinaSlice, cantine, tastiSlice }) {
    const [filtro, setFiltro] = useState("tutti");

    // Filtra le cantine in base al filtro selezionato
    const cantineFiltrate = cantine.filter((slice) => {
        if (filtro === "tutti") return true;
        if (filtro === "internazionali") return slice.primary.cantina_internazionale === true;
        if (filtro === "italiani") return slice.primary.cantina_internazionale === false;
    });

    return (
        <div className="container mx-auto p-4 space-y-10 md:space-y-20">
            {heroCantinaSlice && <HeroCantina heroCantinaSlice={heroCantinaSlice} />}

            <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Tasto tutti */}
                <button
                    className={`aspect-square flex flex-col justify-center items-center border-primary p-4 group-hover:bg-white md:space-y-4 ${filtro === "tutti" ? "border-2" : "border"}`}
                    onClick={() => setFiltro("tutti")}
                >
                    {tastiSlice[0]?.primary?.immagine_tutti.url && (
                        <img
                            src={tastiSlice[0]?.primary?.immagine_tutti.url}
                            alt={tastiSlice[0]?.primary?.immagine_tutti.alt || tastiSlice[0]?.primary?.immagine_tutti.titolo}
                            className="h-1/2 w-auto hidden md:block" // Mostra solo su schermi medi o superiori
                        />
                    )}
                    <div className="flex items-center justify-center h-full w-full md:h-auto">
                        <h2 className="text-17 md:text-32 leading-none text-center font-semibold group-hover:underline">
                            {tastiSlice[0]?.primary?.testo_tutti}
                        </h2>
                    </div>
                </button>

                {/* Tasto internazionali */}
                <button
                    className={`aspect-square flex flex-col justify-center items-center border-primary p-4 group-hover:bg-white  md:space-y-4 ${filtro === "internazionali" ? "border-2" : "border"}`}
                    onClick={() => setFiltro("internazionali")}
                >
                    {tastiSlice[0]?.primary?.immagine_internazionali.url && (
                        <img
                            src={tastiSlice[0]?.primary?.immagine_internazionali.url}
                            alt={tastiSlice[0]?.primary?.immagine_internazionali.alt || tastiSlice[0]?.primary?.immagine_internazionali.titolo}
                            className="h-1/2 w-auto hidden md:block" // Mostra solo su schermi medi o superiori
                        />
                    )}
                    <div className="flex items-center justify-center h-full w-full md:h-auto">
                        <h2 className="text-17 md:text-32 leading-none text-center font-semibold group-hover:underline">
                            {tastiSlice[0]?.primary?.testo_internazionali}
                        </h2>
                    </div>
                </button>

                {/* Tasto nazionali */}
                <button
                    className={`aspect-square flex flex-col justify-center items-center border-primary p-4 group-hover:bg-white  md:space-y-4 ${filtro === "italiani" ? "border-2" : "border"}`}
                    onClick={() => setFiltro("italiani")}
                >
                    {tastiSlice[0]?.primary?.immagine_nazionali.url && (
                        <img
                            src={tastiSlice[0]?.primary?.immagine_nazionali.url}
                            alt={tastiSlice[0]?.primary?.immagine_nazionali.alt || tastiSlice[0]?.primary?.immagine_nazionali.titolo}
                            className="h-1/2 w-auto hidden md:block" // Mostra solo su schermi medi o superiori
                        />
                    )}
                    <div className="flex items-center justify-center h-full w-full md:h-auto">
                        <h2 className="text-17 flex justify-center items-center md:text-32 leading-none text-center font-semibold group-hover:underline">
                            {tastiSlice[0]?.primary?.testo_nazionali}
                        </h2>
                    </div>
                </button>
            </div>

            <div>
                {cantineFiltrate.length > 0 ? (
                    cantineFiltrate.map((slice, index) => (
                        <CantinaRipetibile slice={slice} key={index} />
                    ))
                ) : (
                    <p>Nessuna cantina disponibile per questa categoria.</p>
                )}
            </div>
        </div>
    );
}
