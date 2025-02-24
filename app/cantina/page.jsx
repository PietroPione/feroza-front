import { createClient } from "@/prismicio";
import CantinaClient from "@/components/CantinaClient";

export default async function Cantina() {
    const client = createClient();
    const response = await client.getByType("cantina");

    if (!response.results.length) {
        return <div className="container">Nessuna cantina disponibile</div>;
    }

    const cantina = response.results[0];
    const mappedSlices = cantina.data.slices.map((slice) => ({
        type: slice.slice_type,
        primary: slice.primary,
    }));

    const heroCantinaSlice = mappedSlices.find(slice => slice.type === "hero_cantina")?.primary || null;
    const cantinaSlices = mappedSlices.filter(slice => slice.type === "cantina");
    const tastiSlice = mappedSlices.filter(slice => slice.type === "tasti");

    return (
        <CantinaClient heroCantinaSlice={heroCantinaSlice} cantine={cantinaSlices} tastiSlice={tastiSlice} />
    );
}
