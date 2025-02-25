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

    // Trova le slice corrette
    const prenotaSlices = mappedSlices.find(slice => slice.type === "prenota_tavolo")?.primary;
    const socialSlices = mappedSlices.find(slice => slice.type === "social")?.primary;
    const contattiSlices = mappedSlices.find(slice => slice.type === "contatti")?.primary;

    return (
        <div className="container mx-auto p-4">
            {/* Sezione Contatti */}
            {contattiSlices && (
                <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
                    <div className="space-y-2 md:space-y-4">
                        {/* Mail */}
                        <div>

                            <div className="text-17 md:text-22">
                                {contattiSlices.testo_mail}
                            </div>

                            <Link href={contattiSlices.mail_link.url} target="_blank">
                                <div className="text-22 md:text-36 text-primary hover:underline font-semibold">
                                    {contattiSlices.mail}
                                </div>
                            </Link>

                        </div>
                        {/* Telefono */}
                        <div>
                            <div className="text-17 md:text-22">{contattiSlices.testo_telefono}</div>
                            <Link href={contattiSlices.link_telefono.url} target="_blank">
                                <div className="text-22 md:text-36 text-primary hover:underline font-semibold">{contattiSlices.numero_telefono}</div>
                            </Link>
                        </div>
                        {/* Indirizzo */}
                        <div>
                            <div className="text-17 md:text-22">{contattiSlices.titolo_indirizzo}</div>
                            <Link href={contattiSlices.link_indirizzo.url} target="_blank">
                                <div className="text-22 md:text-36 text-primary hover:underline font-semibold">{contattiSlices.testo_indirizzo}</div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={contattiSlices.immagine_mappa.url}
                            alt={contattiSlices.imamgine_mappa?.alt || "Mappa Feroza"}
                            width={300}
                            height={200}
                            className=" w-[33vh] md:w-[50vh] h-auto"
                        />
                    </div>
                </div>
            )}
            {/* Sezione Prenota Tavolo */}
            {prenotaSlices && (
                <div className="flex flex-col md:flex-row min-h-[33vh] justify-between mt-8 relative">
                    <div className="flex-1 flex items-center justify-center md:justify-start space-y-0 md:space-y-4">
                        <div className="space-y-4">
                            <h1 className="text-40 leading-none md:text-60 font-bold uppercase">{prenotaSlices.titolo}</h1>
                            <p className="text-17">{prenotaSlices.spiega}</p>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center md:justify-end relative">
                        <ButtonPrimary
                            url={prenotaSlices.link_tasto?.text}
                            testo={prenotaSlices.testo_tasto}
                            externalLink
                            uppercase
                        />
                        {prenotaSlices.immagine_top_dx?.url && (
                            <div className="absolute top-0 right-0">
                                <Image
                                    src={prenotaSlices.immagine_top_dx.url}
                                    alt={prenotaSlices.immagine_top_dx.alt || "Immagine"}
                                    width={300}
                                    height={200}
                                    className="rounded-lg w-24 md:w-36 h-auto"
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Sezione Social */}
            {socialSlices && (
                <div className="flex flex-col space-y-6 md:space-y-0 items-start justify-between mt-8">
                    <h2 className="text-40 md:text-60 font-bold uppercase">{socialSlices.titolo}</h2>
                    <div className="flex w-full justify-center md:justify-start items-center">
                        <ButtonPrimary
                            url={socialSlices.link_bottone?.url}
                            testo={socialSlices.tasto_bottone}
                            externalLink
                            uppercase
                            buttonSecondary
                        />
                    </div>
                </div>
            )}

            <Instajs token={socialSlices.token} />
        </div>
    );
}
