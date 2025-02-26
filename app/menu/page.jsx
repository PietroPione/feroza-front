"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { createClient } from "@/prismicio";
import Link from "next/link";
import Image from "next/image";
import FineMenu from "@/components/FineMenu";
import { useContext, useEffect, useState } from "react";

export default function LandingMenu() {
  const { language } = useContext(LanguageContext); // Recupera la lingua attuale
  const [menuData, setMenuData] = useState(null);
  const [fineMenu, setFineMenu] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();

      // Ottieni il menu con la lingua attiva
      const response = await client.getByType("menu", { lang: language });

      if (!response || response.results.length === 0) {
        setMenuData(null);
        return;
      }

      const menu = response.results[0];
      setMenuData(menu);

      // Recupera fine menu
      const fineMenuResponse = await client.getByType("conclusione_menu", { lang: language });
      setFineMenu(fineMenuResponse.results[0] || null);
    };

    fetchData();
  }, [language]); // Ricarica i dati quando cambia la lingua

  if (!menuData) {
    return <div>Nessun dato trovato</div>;
  }

  const navigazionemenuSlice = menuData.data.slices.find(
    (slice) => slice.slice_type === "navigazione_menu"
  );

  const navigazioneMenu = navigazionemenuSlice?.primary?.navigazionemenu || [];

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
                <Image
                  src={item.icona.url}
                  alt={item.icona.alt || item.titolo}
                  width={100}
                  height={100}
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
      {fineMenu && (<FineMenu coperto={coperto} altre_info={altre_info} />)}
    </div>
  );
}
