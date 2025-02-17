import { createClient } from "@/prismicio";
import Link from "next/link";
import Image from "next/image";

export default async function LandingMenu() {
  const client = createClient();
  const response = await client.getByType("menu");

  if (!response || response.results.length === 0) {
    return <div>Nessun dato trovato</div>;
  }

  const menuData = response.results[0];

  // Estrai lo slice che contiene la navigazione del menu.
  // Assumiamo che il tipo dello slice sia "navigazionemenu".
  const navigazionemenuSlice = menuData.data.slices.find(
    (slice) => slice.slice_type === "navigazione_menu"
  );

  // Se non troviamo il campo, impostiamo un array vuoto
  const navigazioneMenu = navigazionemenuSlice?.primary?.navigazionemenu || [];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-3xl font-bold mb-6">Menu Landing Page</h1>
      <div className="flex flex-col gap-4">
        {navigazioneMenu.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* Mostra l'icona se presente */}
            {item.icona?.url && (
              <Image
                src={item.icona.url}
                alt={item.icona.alt || item.titolo}
                width={50}
                height={50}
                priority
              />
            )}
            {/* Titolo della voce di menu */}
            <h2 className="text-xl font-medium">{item.titolo}</h2>
            {/* Link per la navigazione, se presente */}
            {item.link?.url && (
              <Link href={item.link.url}>
                <div className="text-primary underline">Vai</div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
