import { createClient } from "@/prismicio";
import PiattoMulti from "@/components/PiattoMulti";
import ButtonPrimary from "@/components/buttonPrimary";

export default async function ComponiPiatto() {
    const client = createClient();

    // Recupera l'infoPiattoMulti
    const piattoMultiResponse = await client.getByType("piattomulti");
    const piattoMulti = piattoMultiResponse.results[0];

    // Recupera tutte le slice di tipo "ripetibile_menu"
    const ripetibileMenuSlices = piattoMulti?.data.slices.filter(slice => slice.slice_type === "ripetibile_menu") || [];
    const titoliSezione = ripetibileMenuSlices.map(slice => slice.primary.titolosezione || "");
    const immaginiSezione = ripetibileMenuSlices.map(slice => slice.primary.immagine_sezione?.url || "");
    const traduzioniSezione = ripetibileMenuSlices.map(slice => slice.primary.traduzione_titolo || "");
    const elementiMenu = ripetibileMenuSlices.map(slice => slice.primary.elementi_menu || []);


    // Dati per InfoPiattoMulti
    const piattoMultiSlice = piattoMulti?.data.slices.find(slice => slice.slice_type === "info_piatto_multi");
    const infoPiattoMulti = piattoMultiSlice.primary?.infopiattomulti || [];

    return (
        <div className="space-y-10 py-10">

            {infoPiattoMulti && <PiattoMulti infoPiatti={infoPiattoMulti} titoliSezione={titoliSezione} traduzioniSezione={traduzioniSezione} immaginiSezione={immaginiSezione} elementiMenu={elementiMenu} />}
            <div className="text-center">
                <ButtonPrimary url="/menu/" testo="Torna al menu" />
            </div>

        </div>
    );
}
