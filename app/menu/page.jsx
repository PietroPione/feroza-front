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

  // Estrai lo slice con il tipo "navigazione_menu"
  const navigazionemenuSlice = menuData.data.slices.find(
    (slice) => slice.slice_type === "navigazione_menu"
  );

  const navigazioneMenu = navigazionemenuSlice?.primary?.navigazionemenu || [];

  return (
    <div className="container py-10">
      {/* Aggiungiamo items-stretch per forzare l'altezza uguale */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4 items-stretch">
        {navigazioneMenu.map((item, index) => (
          <Link key={index} href={item.link.url} className="group block h-full">
            <div className="flex flex-col md:flex-row items-center gap-4 border border-primary px-4 py-6 space-y-4 justify-end md:justify-start group-hover:bg-gray-200 h-full">
              {item.icona?.url && (
                <img
                  src={item.icona.url}
                  alt={item.icona.alt || item.titolo}
                  className="h-auto w-full md:w-72"
                />
              )}
              {/* Div che contiene il testo, con flex-1 per occupare tutto lo spazio disponibile */}
              <div className="flex md:flex-1 md:items-center md:justify-center">
                <h2 className="text-22 md:text-32 leading-none text-center font-semibold group-hover:underline">
                  {item.titolo}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
