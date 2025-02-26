import { createClient } from "@/prismicio";
import HeroHome from "@/components/HeroHome";
import FerozaInfo from "@/components/FerozaInfo";
import Simurgh from "@/components/Simurgh";
import MangiareHome from "@/components/MangiareHome";

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

  const heroSlice = mappedSlices.find((slice) => slice.type === "hero");
  const sezioniHomeSlice = mappedSlices.find((slice) => slice.type === "sezioni_home");
  const ferozaSlices = mappedSlices.filter((slice) => slice.type === "feroza");
  const simurghSlices = mappedSlices.filter((slice) => slice.type === "simurgh");
  const cateringSlice = mappedSlices.find((slice) => slice.type === "catering");

  const sezioniHomeItems = sezioniHomeSlice?.primary?.sezioni_home || [];
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
