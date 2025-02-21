import Image from "next/image";

export default function HeroCantina({ heroCantinaSlice }) {
    return (
        <div className="relative min-h-[50vh] flex items-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-x-0 md:gap-x-20 gap-y-10 md:gap-y-0">
                <div className="space-y-4 md:max-w-[55vw] md:space-y-6">
                    <h1 className="text-40 leading-none md:text-60 font-bold uppercase">{heroCantinaSlice.titolo}</h1>
                    <p className="text-17 md:text-22">{heroCantinaSlice.spiega}</p>

                </div>
                {heroCantinaSlice.immagine?.url && (
                    <div className="flex items-center justify-center">
                        <Image
                            src={heroCantinaSlice.immagine.url}
                            alt={heroCantinaSlice.immagine?.alt || "Immagine della cantina"}
                            width={300}
                            height={200}
                            className="h-96 w-auto"
                        />
                    </div>
                )}
            </div>

        </div>
    );
}
