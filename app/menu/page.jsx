import { createClient } from "@/prismicio";
import Link from "next/link";
import Image from "next/image";
import FineMenu from "@/components/FineMenu";

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

  // Recupera le fine menu
  const fineMenuResponse = await client.getByType("conclusione_menu");
  const fineMenu = fineMenuResponse.results[0];

  // Recupera tutte le slice di tipo "conclusione_menu"
  const fineMenuSlices = fineMenu?.data.slices.filter(slice => slice.slice_type === "conclusione_menu") || [];
  const coperto = fineMenuSlices[0]?.primary?.coperto;
  const altre_info = fineMenuSlices[0]?.primary?.altre_info || [];

  return (
    <div className="container space-y-10 pb-10 md:py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {navigazioneMenu.map((item, index) => (
          <Link key={index} href={item.link.url} className="group block">
            <div className="aspect-square flex flex-col justify-between items-center border border-primary p-4 group-hover:bg-gray-200 h-full">
              {item.icona?.url && (
                <img
                  src={item.icona.url}
                  alt={item.icona.alt || item.titolo}
                  className="h-1/2 w-auto"
                />
              )}
              <div className="flex items-center justify-center h-1/2 w-full">
                <h2 className="text-22 md:text-32 leading-none text-center font-semibold group-hover:underline">
                  {item.titolo}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {fineMenu && (<FineMenu coperto={coperto} altre_info={altre_info}></FineMenu>)}
    </div>
  );
}
