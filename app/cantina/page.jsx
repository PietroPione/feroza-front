import { createClient } from "@/prismicio";
import HeroCantina from "@/components/HeroCantina";
import CantinaRipetibile from "@/components/CantinaRipetibile";

export default async function Cantina() {
    const client = createClient();

    // Recupera il documento del custom type "cantina"
    const response = await client.getByType("cantina");
    const cantina = response.results[0];

    if (!cantina) {
        return <div className="container">Nessun dato disponibile</div>;
    }

    const mappedSlices = cantina.data.slices.map((slice) => ({
        type: slice.slice_type,
        primary: slice.primary,
    }));

    // Trova le slice specifiche
    const heroCantinaSlice = mappedSlices.find(slice => slice.type === "hero_cantina")?.primary;
    const cantinaSlices = mappedSlices.filter(slice => slice.type === "cantina");
    return (
        <div className="container mx-auto p-4">
            {/* Sezione Hero Cantina */}
            {heroCantinaSlice && <HeroCantina heroCantinaSlice={heroCantinaSlice} />

            }

            {/* Mappa tutte le slice di tipo "cantina" */}
            {cantinaSlices.map((slice, index) => (
                <CantinaRipetibile slice={slice} key={index} />
            ))}
        </div>
    );
}
