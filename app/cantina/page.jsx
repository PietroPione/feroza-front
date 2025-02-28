"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { createClient } from "@/prismicio";
import CantinaClient from "@/components/CantinaClient";
import { useContext, useEffect, useState } from "react";

export default function Cantina() {
    const { language } = useContext(LanguageContext);
    const [cantina, setCantina] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const client = createClient();
            const response = await client.getByType("cantina", {
                lang: language,
            });
            if (response?.results.length > 0) {
                setCantina(response.results[0]);
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

    if (!cantina) {
        return <div className="container">Nessuna cantina disponibile</div>;
    }

    const mappedSlices = cantina.data.slices.map((slice) => ({
        type: slice.slice_type,
        primary: slice.primary,
    }));

    const heroCantinaSlice = mappedSlices.find(slice => slice.type === "hero_cantina")?.primary || null;
    const cantinaSlices = mappedSlices.filter(slice => slice.type === "cantina");
    const tastiSlice = mappedSlices.filter(slice => slice.type === "tasti");

    return (
        <CantinaClient heroCantinaSlice={heroCantinaSlice} cantine={cantinaSlices} tastiSlice={tastiSlice} />
    );
}