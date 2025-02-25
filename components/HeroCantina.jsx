import Image from "next/image";

export default function HeroCantina({ heroCantinaSlice }) {
    return (
        <div className="relative min-h-[50vh] flex items-center justify-between">
            <div className="flex flex-col md:flex-row justify-between items-center gap-x-0 md:gap-x-20 gap-y-10 md:gap-y-0">
                <div className="space-y-4 md:space-y-6  md:w-2/3">
                    <h1 className="text-40 leading-none md:text-60 font-bold uppercase">{heroCantinaSlice.titolo}</h1>
                    <p className="text-17 md:text-22">{heroCantinaSlice.spiega}</p>
                </div>
                {heroCantinaSlice.immagine?.url && (
                    <div className="flex items-end justify-end md:w-1/3">
                        <Image
                            src={heroCantinaSlice.immagine.url}
                            alt={heroCantinaSlice.immagine?.alt || "Immagine della cantina"}

                            width={300}
                            height={200}
                            className="h-full w-full aspect-auto"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}