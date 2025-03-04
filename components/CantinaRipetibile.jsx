import ButtonPrimary from "./buttonPrimary";
import { PrismicRichText } from "@prismicio/react";
import CardWine from "./card/CardWine"

export default function CantinaRipetibile({ slice, index }) {
    console.log("slice", slice)
    return (
        <div className="relative flex items-center">
            <div key={index} className="my-10 md:my-16">
                <div className="space-y-4 md:space-y-6">
                    <div className="flex md:flex-row flex-col md:space-x-8 space-y-4 md:space-y-0 justify-between">
                        <h1 className={`text-40 leading-none md:text-60 font-bold uppercase text-white ${slice.primary.cantina_internazionale ? 'bg-secondary' : 'bg-primary'} p-4 md:w-[40vw] lg:w-[50vw]`}>{slice.primary.nome}</h1>
                        {/* Mostra il tasto "Scopri la cantina" */}
                        {slice.primary.tasto_cantina_testo && slice.primary.tasto_cantina_link && (
                            <div className="flex items-center justify-start md:justify-end">

                                <ButtonPrimary
                                    url={slice.primary.tasto_cantina_link}
                                    testo={slice.primary.tasto_cantina_testo}
                                    externalLink
                                    uppercase
                                    buttonSecondary={!slice.primary.cantina_internazionale}
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="w-full text-17 md:text-22 md:w-3/4 space-y-4">

                            {/* Aggiungi il payoff */}
                            <div>
                                {slice.primary.payoff && (
                                    <p className="text-17 md:text-22 italic">
                                        <span className="font-light ">{slice.primary.payoff.split(" ")[0]}</span>{" "}
                                        <span className="font-bold text-secondary">{slice.primary.payoff.split(" ").slice(1).join(" ")}</span>
                                    </p>
                                )}

                            </div>

                            {/* Mappa e visualizza i valori */}
                            <div>

                                {slice.primary.valori && slice.primary.valori.map((valore, idx) => (
                                    <div key={idx} className="text-17 md:text-22">
                                        {valore.valore.map((text, textIdx) => (
                                            text.type === "paragraph" && (
                                                <p key={textIdx}>{text.text}</p>
                                            )
                                        ))}
                                    </div>

                                ))}

                            </div>
                            <PrismicRichText field={slice.primary.descrizione} />
                        </div>

                    </div>

                </div>

                {/* Mostra i vini */}
                {slice.primary.vini && slice.primary.vini.length > 0 &&
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-20 md:gap-y-0">
                        {slice.primary.vini.map((vino, vinoIndex) => (
                            <CardWine key={vinoIndex} vino={vino} vinoIndex={vinoIndex} />
                        ))}

                    </div>
                }
            </div>
        </div>
    );
}
