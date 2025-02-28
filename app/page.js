"use client";

import { createClient } from "@/prismicio";
import HeroHome from "@/components/HeroHome";
import FerozaInfo from "@/components/FerozaInfo";
import Simurgh from "@/components/Simurgh";
import MangiareHome from "@/components/MangiareHome";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext, useEffect, useState } from "react";

export default function HomePage() {
  const { language } = useContext(LanguageContext);
  const [homepage, setHomepage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const client = createClient();
      const response = await client.getByType("feroza", { lang: language });
      if (response?.results.length > 0) {
        setHomepage(response.results[0]);
      }
      setLoading(false);
    };
    fetchData();
  }, [language]);

  if (loading) {
    return (
      <div className="container space-y-10 pb-10 md:py-10">
        <div className="animate-pulse bg-white invisible h-screen rounded"></div>
       
      </div>
    );
  }

  if (!homepage) {
    return <p>Documento homepage non trovato</p>;
  }

  const mappedSlices = homepage.data.slices.map((slice) => ({
    type: slice.slice_type,
    primary: slice.primary,
  }));

  const heroSlice = mappedSlices.find((slice) => slice.type === "hero");
  const ferozaSlices = mappedSlices.filter((slice) => slice.type === "feroza");
  const simurghSlices = mappedSlices.filter((slice) => slice.type === "simurgh");
  const cateringSlice = mappedSlices.find((slice) => slice.type === "catering");

  const heroHomeItems = heroSlice?.primary || {};
  const cateringItems = cateringSlice?.primary || {};

  return (
    <div>
      <HeroHome items={heroHomeItems} />
      {ferozaSlices && <FerozaInfo ferozaSlices={ferozaSlices} />}
      {cateringSlice && <MangiareHome catering={cateringItems} />}
      {simurghSlices && <Simurgh simurgh={simurghSlices} />}
    </div>
  );
}