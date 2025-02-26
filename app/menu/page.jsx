"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { createClient } from "@/prismicio";
import Link from "next/link";
import Image from "next/image";
import FineMenu from "@/components/FineMenu";
import { useContext, useEffect, useState } from "react";

export default function LandingMenu() {
  const { language } = useContext(LanguageContext); // Recupera la lingua attuale
  const [menuData, setMenuData] = useState({ data: { slices: [] } });
  const [fineMenu, setFineMenu] = useState({ data: { slices: [] } });

  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();

      // Ottieni il menu con la lingua attiva
      const response = await client.getByType("menu", { lang: language });

      if (response?.results.length > 0) {
        setMenuData(response.results[0]);
      }

      // Recupera fine menu
      const fineMenuResponse = await client.getByType("conclusione_menu", { lang: language });

      if (fineMenuResponse?.results.length > 0) {
        setFineMenu(fineMenuResponse.results[0]);
      }
    };

    fetchData();
  }, [language]); // Ricarica i dati quando cambia la lingua

  const navigazionemenuSlice = menuData.data.slices.find(
    (slice) => slice.slice_type === "navigazione_menu"
  );

  const navigazioneMenu = navigazionemenuSlice?.primary?.navigazionemenu || [];

  // Recupera tutte le slice di tipo "conclusione_menu"
  const fineMenuSlices = fineMenu.data.slices.filter(slice => slice.slice_type === "conclusione_menu") || [];
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
                  width={200}
                  height={200}
                  className="w-auto h-24 md:h-60"
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
      <FineMenu coperto={coperto} altre_info={altre_info} />
    </div>
  );
}
