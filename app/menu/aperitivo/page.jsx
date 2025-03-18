"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { createClient } from "@/prismicio";
import ButtonPrimary from "@/components/buttonPrimary";
import Aperitivo from "@/components/Aperitivo";
import { useContext, useEffect, useState } from "react";

export default function AperitivoPage() {
    const { language } = useContext(LanguageContext);
    const [aperitivo, setAperitivo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const client = createClient();
            const aperitivoResponse = await client.getByType("aperitivo", {
                lang: language,
            });
            if (aperitivoResponse?.results.length > 0) {
                setAperitivo(aperitivoResponse.results[0]);
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

    const aperitivoSlice = aperitivo?.data.slices.find(
        (slice) => slice.slice_type === "aperitivo"
    );

    const testoBottone = {
        "it-it": "Torna al menu",
        "en-us": "Back to menu",
        // Aggiungi altre lingue se necessario
    };

    return (
        <div className="space-y-10 pb-10 md:py-10">
            {aperitivoSlice && <Aperitivo slice={aperitivoSlice} />}
            <div className="text-center">
                <ButtonPrimary url="/menu/" testo={testoBottone[language]} />
            </div>
        </div>
    );
}