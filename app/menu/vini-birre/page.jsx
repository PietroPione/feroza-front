"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { createClient } from "@/prismicio";
import ButtonPrimary from "@/components/buttonPrimary";
import Vini from "@/components/Vini";
import Birre from "@/components/Birre";
import InfoFinaliVinoBirra from "@/components/InfoFinaliVinoBirra";
import { useContext, useEffect, useState } from "react";

export default function ViniBirrePage() {
    const { language } = useContext(LanguageContext);
    const [loading, setLoading] = useState(true);
    const [infoFinali, setInfoFinali] = useState(null);
    const [birre, setBirre] = useState(null);
    const [vini, setVini] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const client = createClient();

            const infoFinaliResponse = await client.getByType("infofinalivinobirra", {
                lang: language,
            });
            setInfoFinali(infoFinaliResponse.results[0]);

            const birreResponse = await client.getByType("birre", { lang: language });
            setBirre(birreResponse.results[0]);

            const viniResponse = await client.getByType("vini", { lang: language });
            setVini(viniResponse.results[0]);

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

    const infoFinaliSlices =
        infoFinali?.data.slices.filter(
            (slice) => slice.slice_type === "info_finali_birre_vino"
        ) || [];
    const infoFinaliVino = infoFinaliSlices[0]?.primary?.info;
    const chiusa = infoFinaliSlices[0]?.primary?.chiusa || [];

    const birreSlices =
        birre?.data.slices.filter((slice) => slice.slice_type === "birre") || [];
    const birreInfoSlices =
        birre?.data.slices.filter((slice) => slice.slice_type === "birre_info") || [];
    const titoloBirra = birreInfoSlices[0]?.primary.titolo;
    const disclaimerBirra = birreInfoSlices[0]?.primary.disclaimer;
    const birreData = birreSlices.map((slice) => ({
        iconaPiccola: slice.primary.icona_piccola?.url || "",
        iconaGrande: slice.primary.icona_grande?.url || "",
        birre: slice.primary.birre.map((birra) => ({
            nome: birra.nome || "",
            prezzoPiccolo: birra.prezzo_piccolo || "",
            prezzoGrande: birra.prezzo_grande || "",
            info: birra.info || "",
        })),
    }));

    const viniSlices =
        vini?.data.slices.filter((slice) => slice.slice_type === "vini") || [];
    const viniInfoSlices =
        vini?.data.slices.filter((slice) => slice.slice_type === "vini_info") || [];
    const titoloVino = viniInfoSlices[0]?.primary.titolo;
    const disclaimerVino = viniInfoSlices[0]?.primary.disclaimer;
    const cantinaVino = viniInfoSlices[0]?.primary.titolo_visita_la_cantina;
    const spiegaVino = viniInfoSlices[0]?.primary.spiega_visita_la_cantina;
    const tastoAltriVino = viniInfoSlices[0]?.primary.tasto_altri_vini;
    const linkAltriVino = viniInfoSlices[0]?.primary.link_altri_vini.url;
    const viniData = viniSlices.map((slice) => ({
        iconaPiccola: slice.primary.icona_piccola?.url || "",
        iconaGrande: slice.primary.icona_grande?.url || "",
        vini: slice.primary.vini.map((birra) => ({
            nome: birra.nome || "",
            prezzoPiccolo: birra.prezzo_piccolo || "",
            prezzoGrande: birra.prezzo_grande || "",
            info: birra.info || "",
        })),
    }));

    const testoBottone = {
        "it-it": "Torna al menu",
        "en-us": "Back to menu",
        // Aggiungi altre lingue se necessario
    };

    return (
        <div className="space-y-10 py-10">
            {vini && (
                <Vini
                    titoloVino={titoloVino}
                    disclaimerVino={disclaimerVino}
                    viniData={viniData}
                    cantinaVino={cantinaVino}
                    spiegaVino={spiegaVino}
                    tastoAltriVino={tastoAltriVino}
                    linkAltriVino={linkAltriVino}
                />
            )}
            {birre && (
                <Birre
                    titoloBirra={titoloBirra}
                    disclaimerBirra={disclaimerBirra}
                    birreData={birreData}
                />
            )}
            {infoFinali && (
                <InfoFinaliVinoBirra infoFinaliVino={infoFinaliVino} chiusa={chiusa} />
            )}
            <div className="text-center">
                <ButtonPrimary url="/menu/" testo={testoBottone[language]} />
            </div>
        </div>
    );
}