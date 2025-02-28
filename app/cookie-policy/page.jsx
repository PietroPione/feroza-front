"use client";

import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext, useEffect, useState } from "react";

export default function CookiePolicy() {
    const { language } = useContext(LanguageContext);
    const [cookiePolicyData, setCookiePolicyData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const client = createClient();
            const response = await client.getByType("cookiepolicy", { lang: language });
            if (response?.results.length > 0) {
                setCookiePolicyData(response.results[0].data.slices[0].primary);
            }
            setLoading(false);
        };
        fetchData();
    }, [language]);

    if (loading) {
        return <div className="h-screen" />; // Modifica qui
    }

    if (!cookiePolicyData) {
        return <p>Cookie policy not found.</p>;
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">{cookiePolicyData.titolo}</h1>
            {cookiePolicyData.paragrafi && cookiePolicyData.paragrafi.map((paragrafo, index) => (
                <div key={index} className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">{paragrafo.titolo}</h2>
                    <PrismicRichText field={paragrafo.testo} />
                </div>
            ))}
        </div>
    );
}