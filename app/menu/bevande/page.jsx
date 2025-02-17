import { createClient } from "@/prismicio";
import ButtonPrimary from "@/components/buttonPrimary";
import Bevande from "@/components/Bevande";


export default async function BevandePage() {
    const client = createClient();

    // Recupera le bevande
    const bevandeResponse = await client.getByType("bevande");
    const bevande = bevandeResponse.results[0];

    // Recupera tutte le slice di tipo "bevande"
    const bevandeSlices = bevande?.data.slices.filter(slice => slice.slice_type === "bevande") || [];

    const titoloBevande = bevandeSlices.map(slice => slice.primary.titolo_bevande || "");
    const immagineBevande = bevandeSlices.map(slice => slice.primary.immagine_bevande?.url || "");
    const listaBevande = bevandeSlices.map(slice => slice.primary.bevanda || []);

    return (
        <div className="space-y-10 py-10">

            {bevande && (<Bevande titoloBevande={titoloBevande} immagineBevande={immagineBevande} listaBevande={listaBevande}></Bevande>)}
            <div className="text-center">
                <ButtonPrimary url="/menu/" testo="Torna al menu" />
            </div>

        </div>
    );
}
