import { createClient } from "@/prismicio";
import ButtonPrimary from "@/components/buttonPrimary";
import Aperitivo from "@/components/Aperitivo";

export default async function AperitivoPage() {
    const client = createClient();

    // Recupera l'aperitivo
    const aperitivoResponse = await client.getByType("aperitivo");
    const aperitivo = aperitivoResponse.results[0];

    // Dati per Aperitivo
    const aperitivoSlice = aperitivo?.data.slices.find(slice => slice.slice_type === "aperitivo");
    const titoloAperitivo = aperitivoSlice?.primary?.titolo || "Aperitivo";
    const sottotitolo = aperitivoSlice?.primary?.sottotitolo || "";
    const testoBevande = aperitivoSlice?.primary?.testo_bevande || "";
    const nomeBevanda = aperitivoSlice?.primary?.nome_bevanda || [];
    const iconaBevanda = nomeBevanda.map(bevanda => bevanda.icona?.url);
    const testoSalsa = aperitivoSlice?.primary?.testo_salsa || "";
    const salse = aperitivoSlice?.primary?.salse || [];
    const salseVegetariano = salse.map(salse => salse.vegetariano?.url);
    const falafel = aperitivoSlice?.primary?.falafel || [];
    const falafelVegetariano = falafel.map(falafel => falafel.vegetariano?.url);
    const pane = aperitivoSlice?.primary?.pane || "";
    const prezzo = aperitivoSlice?.primary?.prezzo || "";
    const immagineTopSx = aperitivoSlice?.primary?.immagine_top_sx?.url;
    const immagineTopDx = aperitivoSlice?.primary?.immagine_top_dx?.url;
    const immagineBottomSx = aperitivoSlice?.primary?.immagine_bottom_sx?.url;
    const immagineBottomDx = aperitivoSlice?.primary?.immagine_bottom_dx?.url;


    return (
        <div className="space-y-10 py-10">

            {
                aperitivo && (
                    <Aperitivo
                        titolo={titoloAperitivo}
                        sottotitolo={sottotitolo}
                        testoBevande={testoBevande}
                        nomeBevanda={nomeBevanda}
                        iconaBevanda={iconaBevanda}
                        testoSalsa={testoSalsa}
                        salse={salse}
                        falafel={falafel}
                        falafelVegetariano={falafelVegetariano}
                        pane={pane}
                        prezzo={prezzo}
                        immagineTopDx={immagineTopDx}
                        immagineTopSx={immagineTopSx}
                        immagineBottomSx={immagineBottomSx}
                        immagineBottomDx={immagineBottomDx}
                        salseVegetariano={salseVegetariano}
                    />
                )
            }
            <div className="text-center">
                <ButtonPrimary url="/menu/" testo="Torna al menu" />
            </div>

        </div>
    );
}
