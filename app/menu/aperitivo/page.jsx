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

    const aperitivoSlice = aperitivo?.data.slices.find(slice => slice.slice_type === "aperitivo");
    const titoloAperitivo = aperitivoSlice?.primary?.titolo || "Aperitivo";
    const sottotitolo = aperitivoSlice?.primary?.sottotitolo || "";
    const testoBevande = aperitivoSlice?.primary?.testo_bevande || "";
    const nomeBevanda = aperitivoSlice?.primary?.nome_bevanda || [];
    const iconaBevanda = nomeBevanda.map(bevanda => bevanda.icona?.url);
    const testoSalsa = aperitivoSlice?.primary?.testo_salsa || "";
    const salse = aperitivoSlice?.primary?.salse || [];
    const salseVegetariano = salse.map(salse => salse.vegetariano?.url);
    const falafel = aperitivoSlice?.primary?.falafel || [];
    const falafelVegetariano = falafel.map(falafel => falafel.vegetariano?.url);
    const pane = aperitivoSlice?.primary?.pane || "";
    const prezzo = aperitivoSlice?.primary?.prezzo || "";
    const immagineTopSx = aperitivoSlice?.primary?.immagine_top_sx?.url;
    const immagineTopDx = aperitivoSlice?.primary?.immagine_top_dx?.url;
    const immagineBottomSx = aperitivoSlice?.primary?.immagine_bottom_sx?.url;
    const immagineBottomDx = aperitivoSlice?.primary?.immagine_bottom_dx?.url;

    const testoBottone = {
        "it-it": "Torna al menu",
        "en-us": "Back to menu",
        // Aggiungi altre lingue se necessario
    };

    return (
        <div className="space-y-10 py-10">
            {aperitivo && (
                <Aperitivo
                    titolo={titoloAperitivo}
                    sottotitolo={sottotitolo}
                    testoBevande={testoBevande}
                    nomeBevanda={nomeBevanda}
                    iconaBevanda={iconaBevanda}
                    testoSalsa={testoSalsa}
                    salse={salse}
                    falafel={falafel}
                    falafelVegetariano={falafelVegetariano}
                    pane={pane}
                    prezzo={prezzo}
                    immagineTopDx={immagineTopDx}
                    immagineTopSx={immagineTopSx}
                    immagineBottomSx={immagineBottomSx}
                    immagineBottomDx={immagineBottomDx}
                    salseVegetariano={salseVegetariano}
                />
            )}
            <div className="text-center">
                <ButtonPrimary url="/menu/" testo={testoBottone[language]} />
            </div>
        </div>
    );
}