import Link from "next/link";
import ButtonPrimary from "@/components/buttonPrimary";

export default function MangiareHome({ catering }) {
    return (
        <section className="py-10 bg-primary">
            <div className="container">

                <h2 className="text-46 md:text-60 uppercase font-bold md:*:text-center mb-6">{catering.titolo}</h2>

                <div className="flex flex-col md:flex-row justify-between">
                    {/* Catering */}
                    <div className=" p-6 rounded-lg  space-y-4">
                        <div>

                            <h3 className="text-36 text-white font-semibold">{catering.titolo_catering}</h3>
                            <p className="text-white">{catering.spiega_catering}</p>
                        </div>
                        <ButtonPrimary
                            url={catering.link_catering.url}
                            testo={catering.testo_tasto_catering}

                            uppercase
                        />
                    </div>

                    {/* Al locale */}
                    <div className=" p-6 rounded-lg  space-y-4">
                        <div>
                            <h3 className="text-36 text-white font-semibold">{catering.titolo_locale}</h3>
                            <p className="text-white">{catering.spiega_locale}</p>
                        </div>
                        <ButtonPrimary
                            url={catering.link_locale.url}
                            testo={catering.testo_tasto_locale}

                            uppercase
                        />
                    </div>

                    {/* Da asporto */}
                    <div className=" p-6 rounded-lg  space-y-4">
                        <div>

                            <h3 className="text-36 text-white font-semibold">{catering.titolo_asporto}</h3>
                            <p className="text-white">{catering.spiega_asporto}</p>
                        </div>

                        <ButtonPrimary
                            url={catering.link_tasto_asporto.url}
                            testo={catering.testo_tasto_asporto}

                            uppercase
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
