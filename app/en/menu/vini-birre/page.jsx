import { createClient } from "@/prismicio";
import ButtonPrimary from "@/components/buttonPrimary";
import Vini from "@/components/Vini";
import Birre from "@/components/Birre";
import InfoFinaliVinoBirra from "@/components/InfoFinaliVinoBirra";

export default async function ViniBirrePage() {
    const client = createClient();

    // Recupera le info finali vino birra
    const infoFinaliResponse = await client.getByType("infofinalivinobirra");
    const infoFinali = infoFinaliResponse.results[0];

    // Recupera le info per le birre
    const birreResponse = await client.getByType("birre");
    const birre = birreResponse.results[0];

    // Recupera le info per i vini
    const viniResponse = await client.getByType("vini");
    const vini = viniResponse.results[0];

    // Recupera tutte le slice di tipo "conclusione_menu"
    const infoFinaliSlices = infoFinali?.data.slices.filter(slice => slice.slice_type === "info_finali_birre_vino") || [];
    const infoFinaliVino = infoFinaliSlices[0]?.primary?.info;
    const chiusa = infoFinaliSlices[0]?.primary?.chiusa || [];

    // Recupera tutte le slice di tipo "ripetibile_menu"
    const birreSlices = birre?.data.slices.filter(slice => slice.slice_type === "birre") || [];
    const birreInfoSlices = birre?.data.slices.filter(slice => slice.slice_type === "birre_info") || [];
    const titoloBirra = birreInfoSlices[0]?.primary.titolo
    const disclaimerBirra = birreInfoSlices[0]?.primary.disclaimer
    const birreData = birreSlices.map(slice => ({
        iconaPiccola: slice.primary.icona_piccola?.url || "",
        iconaGrande: slice.primary.icona_grande?.url || "",
        birre: slice.primary.birre.map(birra => ({
            nome: birra.nome || "",
            prezzoPiccolo: birra.prezzo_piccolo || "",
            prezzoGrande: birra.prezzo_grande || "",
            info: birra.info || ""
        }))
    }));

    // Recupera tutte le slice di tipo "ripetibile_menu"
    const viniSlices = vini?.data.slices.filter(slice => slice.slice_type === "vini") || [];
    const viniInfoSlices = vini?.data.slices.filter(slice => slice.slice_type === "vini_info") || [];
    const titoloVino = viniInfoSlices[0]?.primary.titolo
    const disclaimerVino = viniInfoSlices[0]?.primary.disclaimer
    const viniData = viniSlices.map(slice => ({
        iconaPiccola: slice.primary.icona_piccola?.url || "",
        iconaGrande: slice.primary.icona_grande?.url || "",
        vini: slice.primary.vini.map(birra => ({
            nome: birra.nome || "",
            prezzoPiccolo: birra.prezzo_piccolo || "",
            prezzoGrande: birra.prezzo_grande || "",
            info: birra.info || ""
        }))
    }));


    return (
        <div className="space-y-10 py-10">

            {vini && <Vini titoloVino={titoloVino} disclaimerVino={disclaimerVino} viniData={viniData}></Vini>}
            {birre && <Birre titoloBirra={titoloBirra} disclaimerBirra={disclaimerBirra} birreData={birreData}></Birre>}
            {infoFinali && (<InfoFinaliVinoBirra infoFinaliVino={infoFinaliVino} chiusa={chiusa}></InfoFinaliVinoBirra>)}
            <div className="text-center">
                <ButtonPrimary url="/menu/" testo="Torna al menu" />
            </div>

        </div>
    );
}
