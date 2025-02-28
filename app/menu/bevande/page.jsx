"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { createClient } from "@/prismicio";
import ButtonPrimary from "@/components/buttonPrimary";
import Bevande from "@/components/Bevande";
import { useContext, useEffect, useState } from "react";

export default function BevandePage() {
    const { language } = useContext(LanguageContext);
    const [bevande, setBevande] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const client = createClient();
            const bevandeResponse = await client.getByType("bevande", {
                lang: language,
            });
            if (bevandeResponse?.results.length > 0) {
                setBevande(bevandeResponse.results[0]);
            }
            setLoading(false);
        };
        fetchData();
    }, [language]);

    if (loading) {
        return (
            <div className="space-y-10 py-10 min-h-[500px]">
                <div className="animate-pulse bg-white h-screen rounded"></div>

            </div>
        );
    }

    const bevandeSlices =
        bevande.data.slices.filter((slice) => slice.slice_type === "bevande") || [];
    const titoloBevande = bevandeSlices.map(
        (slice) => slice.primary.titolo_bevande || ""
    );
    const immagineBevande = bevandeSlices.map(
        (slice) => slice.primary.immagine_bevande?.url || ""
    );
    const listaBevande = bevandeSlices.map(
        (slice) => slice.primary.bevanda || []
    );

    // Oggetto di traduzione
    const testoBottone = {
        "it-it": "Torna al menu",
        "en-us": "Back to menu",
        // Aggiungi altre lingue se necessario
    };
    console.log("Language:", language);
    return (
        <div className="space-y-10 py-10 min-h-[500px]">
            <Bevande
                titoloBevande={titoloBevande}
                immagineBevande={immagineBevande}
                listaBevande={listaBevande}
            />
            <div className="text-center">
                <ButtonPrimary url="/menu/" testo={testoBottone[language]} />
            </div>
        </div>
    );
}