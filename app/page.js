import { createClient } from "@/prismicio";
import SezioniHome from "@/components/SezioniHome";
import HeroHome from "@/components/HeroHome";
import FerozaInfo from "@/components/FerozaInfo";
import Simurgh from "@/components/Simurgh";
import Instajs from "@/components/Instajs";

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

  const sezioniHomeItems = sezioniHomeSlice?.primary?.sezioni_home || [];
  const heroHomeItems = heroSlice?.primary || [];

  const accessToken = "IGAAY9z2GUNzFBZAE84Y3l3cXFhX3h1d0QwVmY4UGhzZAUdTNVBSVlBGc2ZAPZAEZASRmNjNGhBTVp6QUFUZAUFYay1odW9LcVlUdzZAXQlVCVmRzMWdhd3FZAbUo3ejRuZAFdmM1RZAMTRWTE96OEVVNk5oY0NiOFJGdlY5LXp2cmJ0dGIzNAZDZD";


  return (
    <div>
      <HeroHome items={heroHomeItems} />
      {/* <SezioniHome items={sezioniHomeItems} /> */}
      {/* Sezioni Feroza */}
  {ferozaSlices && <FerozaInfo ferozaSlices={ferozaSlices}></FerozaInfo>}
  {simurghSlices && <Simurgh simurgh={simurghSlices}></Simurgh>}
  <div className="container">
  <Instajs></Instajs>
  </div>
    </div>
  );
}
