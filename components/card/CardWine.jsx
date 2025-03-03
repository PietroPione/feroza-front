import Image from "next/image";

export default function CardWine({ vino, vinoIndex }) {
    return (
        <div className="space-y-4 h-full flex flex-col justify-end"> {/* Aggiunto h-full e flex */}
            <div className="flex gap-4">
                <div className="min-w-[33vw] md:min-w-[15vw]">
                    <div className="flex font-semibold uppercase text-17 space-x-2">
                        <div>{vinoIndex + 1 + ". "}</div>
                        <div className="">{vino.nome_vino}</div>
                    </div>

                    {vino.immagine_vino && <Image
                        src={vino.immagine_vino?.url}
                        alt={vino.nome_testuale || "Vino"}
                        width={300}
                        height={200}
                        className="w-auto pt-4 h-60 md:h-80 "
                    />}
                </div>
                <div className="flex flex-col justify-end space-y-4">
                    {vino.tipologia && <h3 className="italic text-12">{vino.tipologia}</h3>}
                    <div className="space-y-0">

                        {vino.luogo && <div className="uppercase text-12 md:text-15 ">{vino.luogo}</div>}
                        {vino.uve && <div className="uppercase text-12 md:text-15 ">{vino.uve}</div>}
                    </div>
                    <div>{vino.desscrizione}</div>
                </div>
            </div>
        </div>
    );
}
