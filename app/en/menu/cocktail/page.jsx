import { createClient } from "@/prismicio";
import ButtonPrimary from "@/components/buttonPrimary";
import DrinkList from "@/components/DrinkList";


export default async function CocktailPage() {
    const client = createClient();
    // Recupera la drink list
    const drinkResponse = await client.getByType("drinklist");
    const drinklist = drinkResponse.results[0];

    // Dati per DrinkList
    const drinkSlice = drinklist?.data.slices.find(slice => slice.slice_type === "drink_list");
    const titoloDrink = drinkSlice?.primary?.titolo || "Drink List";
    const testoDrink = drinkSlice?.primary?.testo || "";
    const cocktails = drinkSlice?.primary?.cocktail || [];
    const drinkTopSx = drinkSlice?.primary?.immagine_top_sx?.url;
    const drinkTopDx = drinkSlice?.primary?.immagine_top_dx?.url;
    const drinkTopMid = drinkSlice?.primary?.immagine_top_mid?.url;
    const drinkBottomSx = drinkSlice?.primary?.immagine_bottom_sx?.url;
    const drinkBottomMid = drinkSlice?.primary?.immagine_bottom_mid?.url;
    const drinkBottomDx = drinkSlice?.primary?.immagine_bottom_dx?.url;

    return (
        <div className="space-y-10 py-10">

            {drinklist && <DrinkList titolo={titoloDrink} testo={testoDrink} cocktails={cocktails} drinkBottomSx={drinkBottomSx} drinkBottomMid={drinkBottomMid} drinkBottomDx={drinkBottomDx} drinkTopSx={drinkTopSx} drinkTopMid={drinkTopMid} drinkTopDx={drinkTopDx} />}
            <div className="text-center">
                <ButtonPrimary url="/menu/" testo="Torna al menu" />
            </div>

        </div>
    );
}
