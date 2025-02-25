import { createClient } from "@/prismicio";
import CardEventi from "@/components/card/CardEventi";
import { isEventoPassato } from "@/utils";

export default async function Eventi() {
    const client = createClient();

    // Recupera il documento del custom type "eventi"
    const response = await client.getByType("eventi");
    const eventi = response.results[0];

    if (!eventi) {
        return <div className="container">Nessun evento disponibile</div>;
    }

    const mappedSlices = eventi.data.slices.map((slice) => ({
        type: slice.slice_type,
        primary: slice.primary,
    }));

    // Trova le slice corrette
    const heroEventiSlice = mappedSlices.find(slice => slice.type === "eventi_hero")?.primary;
    const eventiSlices = mappedSlices.filter(slice => slice.type === "eventi");


    return (
        <div className="container p-4 space-y-10">
            {heroEventiSlice && (
                <div className="space-y-4 md:space-y-6">
                    <h1 className="text-40 md:text-60 font-bold uppercase">{heroEventiSlice.titolo}</h1>
                    <p className="text-17 md:text-22">{heroEventiSlice.spiega}</p>
                    {heroEventiSlice.immagine?.url && (
                        <Image
                            src={heroEventiSlice.immagine.url}
                            alt={heroEventiSlice.immagine.alt || "Hero Eventi"}
                            width={600}
                            height={400}
                            className="mx-auto rounded-lg"
                        />
                    )}
                </div>
            )}

            {/* Lista Eventi */}
            <div className="flex flex-col gap-y-10">
                {eventiSlices.length > 0 ? (
                    eventiSlices.map((slice, index) => (
                        slice.primary.eventi.map((evento, eventoIndex) => (
                            <CardEventi
                                evento={evento}
                                eventoIndex={eventoIndex}
                                passato={isEventoPassato(evento.data)} // Aggiungi la prop passato
                            />
                        ))
                    ))
                ) : (
                    <p className="col-span-full text-center">Nessun evento disponibile.</p>
                )}
            </div>
        </div>
    );
}
