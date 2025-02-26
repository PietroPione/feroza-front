"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { createClient } from "@/prismicio";
import Link from "next/link";
import Image from "next/image";
import FineMenu from "@/components/FineMenu";
import { useContext, useEffect, useState } from "react";

export default function LandingMenu() {
  const { language } = useContext(LanguageContext);
  const [menuData, setMenuData] = useState({ data: { slices: [] } });
  const [fineMenu, setFineMenu] = useState({ data: { slices: [] } });

  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      const response = await client.getByType("menu", { lang: language });
      if (response?.results.length > 0) {
        setMenuData(response.results[0]);
      }
      const fineMenuResponse = await client.getByType("conclusione_menu", { lang: language });
      if (fineMenuResponse?.results.length > 0) {
        setFineMenu(fineMenuResponse.results[0]);
      }
    };
    fetchData();
  }, [language]);

  const navigazionemenuSlice = menuData.data.slices.find(
    (slice) => slice.slice_type === "navigazione_menu"
  );
  const navigazioneMenu = navigazionemenuSlice?.primary?.navigazionemenu || [];
  const fineMenuSlices = fineMenu.data.slices.filter(slice => slice.slice_type === "conclusione_menu") || [];
  const coperto = fineMenuSlices[0]?.primary?.coperto;
  const altre_info = fineMenuSlices[0]?.primary?.altre_info || [];

  return (
    <div className="container space-y-10 pb-10 md:py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {navigazioneMenu.map((item, index) => (
          item.external_link ? (
            <Link
              key={index}
              href={item.link.url}
              className="group block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="aspect-square rounded-full flex flex-col md:gap-y-4 justify-center items-center border border-primary p-4 group-hover:bg-gray-200 h-full"> {/*Aggiunto justify-center*/}
                {item.icona?.url && (
                  <div className="flex justify-center items-center">
                    <Image
                      src={item.icona.url}
                      alt={item.icona.alt || item.titolo}
                      width={200}
                      height={200}
                      className="w-auto h-20 md:h-28 lg:h-48 object-contain"
                    />
                  </div>
                )}
                <div className="flex items-center justify-center w-full mt-2">
                  <h2 className="text-22 md:text-32 leading-none text-center font-semibold group-hover:underline">
                    {item.titolo}
                  </h2>
                </div>
              </div>
            </Link>
          ) : (
            <Link key={index} href={item.link.url} className="group block">
              <div className="aspect-square rounded-full flex flex-col justify-center items-center lg:gap-y-4 border border-primary p-4 group-hover:bg-gray-200 h-full"> {/*Aggiunto justify-center*/}
                {item.icona?.url && (
                  <div className="flex justify-center items-center">
                    <Image
                      src={item.icona.url}
                      alt={item.icona.alt || item.titolo}
                      width={200}
                      height={200}
                      className="w-auto h-20 md:h-32 lg:h-48 object-contain"
                    />
                  </div>
                )}
                <div className="flex items-center justify-center w-full mt-2">
                  <h2 className="text-22 md:text-32 leading-none text-center font-semibold group-hover:underline">
                    {item.titolo}
                  </h2>
                </div>
              </div>
            </Link>
          )
        ))}
      </div>
      <FineMenu coperto={coperto} altre_info={altre_info} />
    </div>
  );
}