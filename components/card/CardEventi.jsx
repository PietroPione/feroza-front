import Image from "next/image";
import { formatData } from "@/utils";
import { PrismicRichText } from "@prismicio/react";

export default function CardEventi({ evento, eventoIndex, passato }) {
    const dataFormattata = formatData(evento.data);

    return (
        <div key={`${eventoIndex}`} className={`relative flex flex-col md:flex-row border p-0 rounded-3xl border-primary shadow-md overflow-hidden ${passato ? 'opacity-50' : ''}`}>

            <div className="relative w-full h-60 md:w-1/4 md:h-auto order-1 md:order-2">
                {evento.immagine?.url && (
                    <Image
                        src={evento.immagine.url}
                        alt={evento.immagine.alt || "Evento"}
                        fill
                        className={`object-cover object-center absolute inset-0 ${passato ? 'grayscale' : ''}`}
                    />
                )}
            </div>

            <div className="md:w-1/4 flex items-center justify-center order-2 md:order-1">
                <div className="my-2 md:my-4 flex flex-col items-center justify-center">
                    <div className={`font-bold text-60 ${passato ? '' : 'text-primary'}`}>{dataFormattata.giorno}</div>
                    <div className="italic space-x-2">
                        <span>{dataFormattata.meseNome}</span>
                        <span>{dataFormattata.annoAbbreviato}</span>
                    </div>
                    {
                        evento.orario && <div className="font-semibold text-26 pt-2"> h. {evento.orario}</div>
                    }


                    {passato && <p className="mt-2 text-22 leading-none text-red-500">Evento passato</p>}
                </div>
            </div>

            <div className="md:w-2/4 flex flex-col justify-between p-6 md:pt-6 order-3 md:order-3">
                <div className="space-y-2">
                    <h2 className="text-22 md:text-26 font-semibold">{evento.nome_evento}</h2>
                    <PrismicRichText field={evento.spiega} />
                </div>
            </div>

        </div>
    );
}
