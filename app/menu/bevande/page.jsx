"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { createClient } from "@/prismicio";
import ButtonPrimary from "@/components/buttonPrimary";
import Bevande from "@/components/Bevande";
import { useContext, useEffect, useState } from "react";

export default function BevandePage() {
    const { language } = useContext(LanguageContext);
    const [bevande, setBevande] = useState(null); // Inizializzato a null
    const [loading, setLoading] = useState(true); // Stato di caricamento

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Imposta il caricamento a true
            const client = createClient();
            const bevandeResponse = await client.getByType("bevande", { lang: language });
            if (bevandeResponse?.results.length > 0) {
                setBevande(bevandeResponse.results[0]);
            }
            setLoading(false); // Imposta il caricamento a false dopo il caricamento dei dati
        };
        fetchData();
    }, [language]);

    if (loading) {
        // Mostra un placeholder o uno scheletro durante il caricamento
        return (
            <div className="space-y-10 py-10 min-h-[500px]"> {/* Altezza minima */}
                {/* Scheletro per il componente Bevande */}
                <div className="animate-pulse bg-gray-100 h-64 rounded"></div>
                {/* Scheletro per il bottone */}
                <div className="text-center">
                    <div className="animate-pulse bg-gray-100 w-40 h-12 mx-auto rounded"></div>
                </div>
            </div>
        );
    }

    const bevandeSlices = bevande.data.slices.filter(slice => slice.slice_type === "bevande") || [];
    const titoloBevande = bevandeSlices.map(slice => slice.primary.titolo_bevande || "");
    const immagineBevande = bevandeSlices.map(slice => slice.primary.immagine_bevande?.url || "");
    const listaBevande = bevandeSlices.map(slice => slice.primary.bevanda || []);

    return (
        <div className="space-y-10 py-10 min-h-[500px]"> {/* Altezza minima */}
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