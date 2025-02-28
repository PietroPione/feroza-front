"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { createClient } from "@/prismicio";
import PiattoMulti from "@/components/PiattoMulti";
import ButtonPrimary from "@/components/buttonPrimary";
import { useContext, useEffect, useState } from "react";

export default function ComponiPiatto() {
    const { language } = useContext(LanguageContext);
    const [piattoMulti, setPiattoMulti] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const client = createClient();
            const piattoMultiResponse = await client.getByType("piattomulti", {
                lang: language,
            });
            if (piattoMultiResponse?.results.length > 0) {
                setPiattoMulti(piattoMultiResponse.results[0]);
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

    const ripetibileMenuSlices = piattoMulti?.data.slices.filter(slice => slice.slice_type === "ripetibile_menu") || [];
    const titoliSezione = ripetibileMenuSlices.map(slice => slice.primary.titolosezione || "");
    const immaginiSezione = ripetibileMenuSlices.map(slice => slice.primary.immagine_sezione?.url || "");
    const traduzioniSezione = ripetibileMenuSlices.map(slice => slice.primary.traduzione_titolo || "");
    const elementiMenu = ripetibileMenuSlices.map(slice => slice.primary.elementi_menu || []);

    const piattoMultiSlice = piattoMulti?.data.slices.find(slice => slice.slice_type === "info_piatto_multi");
    const infoPiattoMulti = piattoMultiSlice?.primary?.infopiattomulti || [];

    const testoBottone = {
        "it-it": "Torna al menu",
        "en-us": "Back to menu",
        // Aggiungi altre lingue se necessario
    };

    return (
        <div className="space-y-10 py-10">
            {infoPiattoMulti && <PiattoMulti infoPiatti={infoPiattoMulti} titoliSezione={titoliSezione} traduzioniSezione={traduzioniSezione} immaginiSezione={immaginiSezione} elementiMenu={elementiMenu} />}
            <div className="text-center">
                <ButtonPrimary url="/menu/" testo={testoBottone[language]} />
            </div>
        </div>
    );
}