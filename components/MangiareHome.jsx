import SimpleCard from "@/components/card/SimpleCard";

export default function MangiareHome({ catering }) {

    return (
        <section className="py-10 bg-primary">
            <div className="container">
                <h2 className="text-46 md:text-60 text-white uppercase font-bold md:*:text-center mb-6">{catering.titolo}</h2>
                <div className="flex flex-col md:flex-row justify-between">
                    {catering.metodi.map((metodo, index) => (
                        <SimpleCard
                            key={index}
                            titolo={metodo.titolo_metodo}
                            spiega={metodo.spiega_metodo}
                            testoTasto={metodo.testo_tasto}
                            url={metodo.link_tasto?.url}
                            externalLink={metodo.external_link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}