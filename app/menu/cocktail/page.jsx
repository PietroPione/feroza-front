import { createClient } from "@/prismicio";
import ButtonPrimary from "@/components/buttonPrimary";
import DrinkList from "@/components/DrinkList";
import InfoFinaliCockatil from "@/components/InfoFinaliCocktail";

export default async function CocktailPage() {
    const client = createClient();

    // Recupera il documento principale
    const drinkResponse = await client.getByType("drinklist");
    const drinklist = drinkResponse.results[0];

    if (!drinklist) {
        return <div>Nessun dato trovato</div>;
    }

    // Recupera le slice
    const slices = drinklist?.data.slices || [];

    // Drink List
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

    // Info Finali Drink
    const infoFinaliDrinkSlice = slices.find(slice => slice.slice_type === "info_finali_drink");
    const immagineFinale = infoFinaliDrinkSlice?.primary?.immagine?.url || "";
    const chiusa = infoFinaliDrinkSlice?.primary?.chiusa || [];
    const testoFinale = infoFinaliDrinkSlice?.primary?.testo || [];


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
            {infoFinaliDrinkSlice && <InfoFinaliCockatil immagineFinale={immagineFinale} chiusa={chiusa} testoFinale={testoFinale} />}
            <div className="text-center">
                <ButtonPrimary url="/menu/" testo="Torna al menu" />
            </div>
        </div>
    );
}
