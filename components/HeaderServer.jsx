"use client";

import { createClient } from "@/prismicio";
import HeaderClient from "@/components/HeaderClient";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext, useEffect, useState } from "react";

export default function HeaderServer() {
    const { language } = useContext(LanguageContext);
    const [headerData, setHeaderData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const client = createClient();
            const response = await client.getByType("header", { lang: language });
            if (response?.results.length > 0) {
                setHeaderData(response.results[0]);
            }
            setLoading(false);
        };
        fetchData();
    }, [language]);

    if (loading) {
        return (
            <header className="py-4">
                <div className="container space-y-4">
                    <div className="animate-pulse bg-white invisible h-16 rounded"></div>
                    <div className="animate-pulse bg-white invisible h-10 rounded"></div>
                </div>
            </header>
        );
    }

    if (!headerData) {
        return (
            <header className="py-4">
                <div className="container">Nessun dato trovato</div>
            </header>
        );
    }

    // Estrai il logo dai slices
    const logoSlice = headerData.data.slices.find(
        (slice) => slice.slice_type === "logo"
    );
    const logoUrl = logoSlice?.primary?.logo?.url || null;

    // Estrai le voci di menu dai slices
    const menuSlice = headerData.data.slices.find(
        (slice) => slice.slice_type === "menu"
    );
    const menuItems = menuSlice?.primary?.voci_menu || [];
    const immagineTopDx = menuSlice?.primary?.immagine_top_dx?.url || "";
    const immagineTopSx = menuSlice?.primary?.immagine_top_sx?.url || "";
    const immagineBottomDx = menuSlice?.primary?.immagine_bottom_dx?.url || "";
    const immagineBottomSx = menuSlice?.primary?.immagine_bottom_sx?.url || "";

    return (
        <HeaderClient
            logoUrl={logoUrl}
            menuItems={menuItems}
            immagineTopDx={immagineTopDx}
            immagineTopSx={immagineTopSx}
            immagineBottomDx={immagineBottomDx}
            immagineBottomSx={immagineBottomSx}
        />
    );
}