import { createClient } from "@/prismicio";
import Instajs from "@/components/Instajs";
import Link from "next/link";
import Image from "next/image";
import ButtonPrimary from "@/components/buttonPrimary";

export default async function Contatti() {
    const client = createClient();

    // Recupera il documento del custom type "contatti"
    const response = await client.getByType("contatti");
    const contatti = response.results[0];

    if (!contatti) {
        return <div className="container">Nessun dato disponibile</div>;
    }

    const mappedSlices = contatti.data.slices.map((slice) => ({
        type: slice.slice_type,
        primary: slice.primary,
    }));

    const contattiSlices = mappedSlices.find(slice => slice.type === "prenota_tavolo")?.primary;

    return (
        <div className="container mx-auto p-4">
            {contattiSlices && (
                <div className="flex flex-col md:flex-row min-h-[33vh] justify-between mt-8 relative">
                    <div className="flex-1 flex items-center justify-center space-y-0 md:space-y-4">
                        <div>
                            <h1 className="text-32 font-bold uppercase">{contattiSlices.titolo}</h1>
                            <p className="text-17">{contattiSlices.spiega}</p>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center md:justify-end relative">
                        <ButtonPrimary
                            url={contattiSlices.link_tasto?.text}
                            testo={contattiSlices.testo_tasto}
                            externalLink
                            uppercase
                        />
                        {contattiSlices.immagine_top_dx?.url && (
                            <div className="absolute top-0 right-0">
                                <Image
                                    src={contattiSlices.immagine_top_dx.url}
                                    alt={contattiSlices.immagine_top_dx.alt || "Immagine"}
                                    width={300}
                                    height={200}
                                    className="rounded-lg w-24 md:w-36 h-auto"
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}

            <Instajs />
        </div>
    );
}
