"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { createClient } from "@/prismicio";
import Link from "next/link";
import Image from "next/image";
import FineMenu from "@/components/FineMenu";
import { useContext, useEffect, useState } from "react";

export default function LandingMenu() {
  const { language } = useContext(LanguageContext);
  const [menuData, setMenuData] = useState(null);
  const [fineMenu, setFineMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const client = createClient();
      const response = await client.getByType("menu", { lang: language });
      if (response?.results.length > 0) {
        setMenuData(response.results[0]);
      }
      const fineMenuResponse = await client.getByType("conclusione_menu", { lang: language });
      if (fineMenuResponse?.results.length > 0) {
        setFineMenu(fineMenuResponse.results[0]);
      }
      setLoading(false);
    };
    fetchData();
  }, [language]);

  if (loading) {
    return (
      <div className="container space-y-10 pb-10 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="aspect-square rounded-full  p-4 animate-pulse bg-white"
            ></div>
          ))}
        </div>
        <div className="animate-pulse bg-white h-20 rounded"></div>
      </div>
    );
  }

  const navigazionemenuSlice = menuData.data.slices.find(
    (slice) => slice.slice_type === "navigazione_menu"
  );
  const navigazioneMenu = navigazionemenuSlice?.primary?.navigazionemenu || [];
  const fineMenuSlices = fineMenu.data.slices.filter(
    (slice) => slice.slice_type === "conclusione_menu"
  );
  const coperto = fineMenuSlices[0]?.primary?.coperto;
  const altre_info = fineMenuSlices[0]?.primary?.altre_info || [];

  return (
    <div className="container space-y-10 pb-10 md:py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {navigazioneMenu.map((item, index) => (
          <Link
            key={index}
            href={item.link.url}
            className="group block"
            target={item.external_link ? "_blank" : ""}
            rel={item.external_link ? "noopener noreferrer" : ""}
          >
            <div className="aspect-square relative rounded-full flex flex-col justify-center items-center lg:gap-y-4  p-4 group-hover:bg-primary h-full">
              {item.icona?.url && (
                <div className="flex justify-center items-center">
                  <Image
                    src={item.icona.url}
                    alt={item.icona.alt || item.titolo}
                    width={200}
                    height={200}
                    className="w-auto h-20 md:h-32 lg:h-48 object-contain"
                    fetchPriority="high"
                  />
                  <Image
                    src={item.immagine_sfondo.url}
                    alt={item.immagine_sfondo.alt || item.titolo}
                    width={200}
                    height={200}
                    className="w-auto h-full absolute inset-0"

                  />
                </div>
              )}
              <div className="flex items-center justify-center w-full mt-2">
                <h2 className="text-17 lg:text-32 leading-none px-10 lg:px-20 text-center font-semibold group-hover:underline">
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