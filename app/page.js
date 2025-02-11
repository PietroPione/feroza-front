import { createClient } from "@/prismicio";
import SezioniHome from "@/components/SezioniHome";
import HeroHome from "@/components/HeroHome";

export default async function HomePage() {
  const client = createClient();

  // Recupera il documento del custom type "feroza"
  const response = await client.getByType("feroza");
  const homepage = response.results[0];

  if (!homepage) {
    return <p>Documento homepage non trovato</p>;
  }

  const mappedSlices = homepage.data.slices.map((slice) => ({
    type: slice.slice_type,
    primary: slice.primary,
  }));


  const heroSlice = mappedSlices.find(
    (slice) => slice.type === "hero"
  );
  const sezioniHomeSlice = mappedSlices.find(
    (slice) => slice.type === "sezioni_home"
  );


  // Se la slice esiste, estraiamo l'array contenuto in primary.sezioni_home, altrimenti usiamo un array vuoto
  const sezioniHomeItems = sezioniHomeSlice?.primary?.sezioni_home || [];
  const heroHomeItems = heroSlice?.primary || [];

  return (
    <div>
      <HeroHome items={heroHomeItems}></HeroHome>
      {/* Utilizzo del componente SezioniHome passando i dati tramite prop */}
      <SezioniHome items={sezioniHomeItems} />
    </div>
  );
}
