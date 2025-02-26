"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { createClient } from "@/prismicio";
import ButtonPrimary from "@/components/buttonPrimary";
import Bevande from "@/components/Bevande";
import { useContext, useEffect, useState } from "react";

export default function BevandePage() {
    const { language } = useContext(LanguageContext);  // Recupera la lingua attuale
    const [bevande, setBevande] = useState({ data: { slices: [] } });

    useEffect(() => {
        const fetchData = async () => {
            const client = createClient();

            // Recupera le bevande con la lingua attiva
            const bevandeResponse = await client.getByType("bevande", { lang: language });

            if (bevandeResponse?.results.length > 0) {
                setBevande(bevandeResponse.results[0]);
            }
        };

        fetchData();
    }, [language]); // Ricarica i dati quando cambia la lingua

    // Recupera tutte le slice di tipo "bevande"
    const bevandeSlices = bevande.data.slices.filter(slice => slice.slice_type === "bevande") || [];
    const titoloBevande = bevandeSlices.map(slice => slice.primary.titolo_bevande || "");
    const immagineBevande = bevandeSlices.map(slice => slice.primary.immagine_bevande?.url || "");
    const listaBevande = bevandeSlices.map(slice => slice.primary.bevanda || []);

    return (
        <div className="space-y-10 py-10">
            <Bevande
                titoloBevande={titoloBevande}
                immagineBevande={immagineBevande}
                listaBevande={listaBevande}
            />
            <div className="text-center">
                <ButtonPrimary url="/menu/" testo="Torna al menu" />
            </div>
        </div>
    );
}
