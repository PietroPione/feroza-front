import { createClient } from "@/prismicio";
import DrinkList from "@/components/DrinkList";
import Aperitivo from "@/components/Aperitivo";
import { info } from "autoprefixer";
import PiattoMulti from "@/components/PiattoMulti";

export default async function MenuPage() {
  const client = createClient();

  // Recupera la drink list
  const drinkResponse = await client.getByType("drinklist");
  const drinklist = drinkResponse.results[0];

  // Recupera l'aperitivo
  const aperitivoResponse = await client.getByType("aperitivo");
  const aperitivo = aperitivoResponse.results[0];

  // Recupera l'infoPiattoMulti
  const piattoMultiResponse = await client.getByType("piattomulti");
  const piattoMulti = piattoMultiResponse.results[0];

  if (!drinklist && !aperitivo) {
    return <p>Nessun contenuto trovato</p>;
  }

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

  // Dati per InfoPiattoMulti
  const piattoMultiSlice = piattoMulti?.data.slices.find(slice => slice.slice_type === "info_piatto_multi");
  const infoPiattoMulti = piattoMultiSlice.primary?.infopiattomulti || [];

  // Recupera tutte le slice di tipo "ripetibile_menu"
  const ripetibileMenuSlices = piattoMulti?.data.slices.filter(slice => slice.slice_type === "ripetibile_menu") || [];

  const titoliSezione = ripetibileMenuSlices.map(slice => slice.primary.titolosezione || "");
  const immaginiSezione = ripetibileMenuSlices.map(slice => slice.primary.immagine_sezione?.url || "");
  const traduzioniSezione = ripetibileMenuSlices.map(slice => slice.primary.traduzione_titolo || "");
  const elementiMenu = ripetibileMenuSlices.map(slice => slice.primary.elementi_menu || []);


  return (
    <div className="space-y-10">
      {infoPiattoMulti && <PiattoMulti infoPiatti={infoPiattoMulti} titoliSezione={titoliSezione} traduzioniSezione={traduzioniSezione} immaginiSezione={immaginiSezione} elementiMenu={elementiMenu} />}
      {drinklist && <DrinkList titolo={titoloDrink} testo={testoDrink} cocktails={cocktails} drinkBottomSx={drinkBottomSx} drinkBottomMid={drinkBottomMid} drinkBottomDx={drinkBottomDx} drinkTopSx={drinkTopSx} drinkTopMid={drinkTopMid} drinkTopDx={drinkTopDx} />}
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

    </div>
  );
}
