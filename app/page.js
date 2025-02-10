import { createClient } from "@/prismicio";
import SezioniHome from "@/components/SezioniHome";

export default async function HomePage() {
  const client = createClient();

  // Recupera il documento del custom type "feroza"
  const response = await client.getByType("feroza");
  const homepage = response.results[0];

  if (!homepage) {
    return <p>Documento homepage non trovato</p>;
  }

  // Mappiamo le slice per semplificarne l'accesso
  const mappedSlices = homepage.data.slices.map((slice) => ({
    type: slice.slice_type,
    primary: slice.primary,
  }));

  // Troviamo la slice di tipo "sezioni_home" (campo ripetibile)
  const sezioniHomeSlice = mappedSlices.find(
    (slice) => slice.type === "sezioni_home"
  );
  // Se la slice esiste, estraiamo l'array contenuto in primary.sezioni_home, altrimenti usiamo un array vuoto
  const sezioniHomeItems = sezioniHomeSlice?.primary?.sezioni_home || [];

  return (
    <div>
      {/* Utilizzo del componente SezioniHome passando i dati tramite prop */}
      <SezioniHome items={sezioniHomeItems} />
    </div>
  );
}
