"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { createClient } from "@/prismicio";
import ButtonPrimary from "@/components/buttonPrimary";
import DrinkList from "@/components/DrinkList";
import InfoFinaliCocktail from "@/components/InfoFinaliCocktail";
import { useContext, useEffect, useState } from "react";

export default function CocktailPage() {
    const { language } = useContext(LanguageContext);
    const [drinklist, setDrinklist] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const client = createClient();
            const drinkResponse = await client.getByType("drinklist", {
                lang: language,
            });
            if (drinkResponse?.results.length > 0) {
                setDrinklist(drinkResponse.results[0]);
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

    if (!drinklist) {
        return <div>Nessun dato trovato</div>;
    }

    const slices = drinklist?.data.slices || [];

    const drinkSlice = slices.find(slice => slice.slice_type === "drink_list");
    const titoloDrink = drinkSlice?.primary?.titolo || "Drink List";
    const testoDrink = drinkSlice?.primary?.testo || "";
    const cocktails = drinkSlice?.primary?.cocktail || [];
    const drinkTopSx = drinkSlice?.primary?.immagine_top_sx?.url;
    const drinkTopDx = drinkSlice?.primary?.immagine_top_dx?.url;
    const drinkTopMid = drinkSlice?.primary?.immagine_top_mid?.url;
    const drinkBottomSx = drinkSlice?.primary?.immagine_bottom_sx?.url;
    const drinkBottomMid = drinkSlice?.primary?.immagine_bottom_mid?.url;
    const drinkBottomDx = drinkSlice?.primary?.immagine_bottom_dx?.url;

    const infoFinaliDrinkSlice = slices.find(slice => slice.slice_type === "info_finali_drink");
    const immagineFinale = infoFinaliDrinkSlice?.primary?.immagine?.url || "";
    const chiusa = infoFinaliDrinkSlice?.primary?.chiusa || [];
    const testoFinale = infoFinaliDrinkSlice?.primary?.testo || [];

    const testoBottone = {
        "it-it": "Torna al menu",
        "en-us": "Back to menu",
        // Aggiungi altre lingue se necessario
    };

    return (
        <div className="space-y-10 py-10">
            {drinkSlice && (
                <DrinkList
                    titolo={titoloDrink}
                    testo={testoDrink}
                    cocktails={cocktails}
                    drinkBottomSx={drinkBottomSx}
                    drinkBottomMid={drinkBottomMid}
                    drinkBottomDx={drinkBottomDx}
                    drinkTopSx={drinkTopSx}
                    drinkTopMid={drinkTopMid}
                    drinkTopDx={drinkTopDx}
                />
            )}
            {infoFinaliDrinkSlice && <InfoFinaliCocktail immagineFinale={immagineFinale} chiusa={chiusa} testoFinale={testoFinale} />}
            <div className="text-center">
                <ButtonPrimary url="/menu/" testo={testoBottone[language]} />
            </div>
        </div>
    );
}