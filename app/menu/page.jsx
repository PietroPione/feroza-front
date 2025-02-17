import { createClient } from "@/prismicio";
import DrinkList from "@/components/DrinkList";
import Aperitivo from "@/components/Aperitivo";
import { info } from "autoprefixer";
import PiattoMulti from "@/components/PiattoMulti";
import Bevande from "@/components/Bevande";
import FineMenu from "@/components/FineMenu";
import InfoFinaliVinoBirra from "@/components/InfoFinaliVinoBirra";
import Birre from "@/components/Birre";
import Vini from "@/components/Vini";

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

  // Recupera le bevande
  const bevandeResponse = await client.getByType("bevande");
  const bevande = bevandeResponse.results[0];

  // Recupera le fine menu
  const fineMenuResponse = await client.getByType("conclusione_menu");
  const fineMenu = fineMenuResponse.results[0];

  // Recupera le info finali vino birra
  const infoFinaliResponse = await client.getByType("infofinalivinobirra");
  const infoFinali = infoFinaliResponse.results[0];

  // Recupera le info per le birre
  const birreResponse = await client.getByType("birre");
  const birre = birreResponse.results[0];

  // Recupera le info per i vini
  const viniResponse = await client.getByType("vini");
  const vini = viniResponse.results[0];


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

  // Recupera tutte le slice di tipo "bevande"
  const bevandeSlices = bevande?.data.slices.filter(slice => slice.slice_type === "bevande") || [];

  const titoloBevande = bevandeSlices.map(slice => slice.primary.titolo_bevande || "");
  const immagineBevande = bevandeSlices.map(slice => slice.primary.immagine_bevande?.url || "");
  const listaBevande = bevandeSlices.map(slice => slice.primary.bevanda || []);

  // Recupera tutte le slice di tipo "conclusione_menu"
  const fineMenuSlices = fineMenu?.data.slices.filter(slice => slice.slice_type === "conclusione_menu") || [];
  const coperto = fineMenuSlices[0]?.primary?.coperto;
  const altre_info = fineMenuSlices[0]?.primary?.altre_info || [];

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
    <div className="space-y-10">
      {vini && <Vini titoloVino={titoloVino} disclaimerVino={disclaimerVino} viniData={viniData}></Vini>}
      {birre && <Birre titoloBirra={titoloBirra} disclaimerBirra={disclaimerBirra} birreData={birreData}></Birre>}
      {infoPiattoMulti && <PiattoMulti infoPiatti={infoPiattoMulti} titoliSezione={titoliSezione} traduzioniSezione={traduzioniSezione} immaginiSezione={immaginiSezione} elementiMenu={elementiMenu} />}
      {bevande && (<Bevande titoloBevande={titoloBevande} immagineBevande={immagineBevande} listaBevande={listaBevande}></Bevande>)}
      {fineMenu && (<FineMenu coperto={coperto} altre_info={altre_info}></FineMenu>)}
      {infoFinali && (<InfoFinaliVinoBirra infoFinaliVino={infoFinaliVino} chiusa={chiusa}></InfoFinaliVinoBirra>)}
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
