import Image from "next/image";

export default function CardWine({ vino, vinoIndex }) {
    return (
        <div className="space-y-4 h-full flex flex-col justify-end"> {/* Aggiunto h-full e flex */}
            <div className="flex gap-4">
                <div className="min-w-[33vw] md:min-w-[15vw]">
                    <div className="flex font-semibold text-17">
                        <div>{vinoIndex + 1 + ". "}</div>
                        <div className="">{vino.nome_vino}</div>
                    </div>

                    <Image
                        src={vino.immagine_vino?.url}
                        alt={vino.nome_testuale || "Vino"}
                        width={300}
                        height={200}
                        className="w-96 h-auto"
                    />
                </div>
                <div className="flex flex-col justify-end space-y-4">
                    <div className="text-12 md:text-15 uppercase space-y-0">
                        <h3 className="font-semibold">{vino.nome_testuale}</h3>
                        <div>{vino.luogo}</div>
                        <div>{vino.uve}</div>
                    </div>
                    <div>{vino.desscrizione}</div>
                </div>
            </div>
        </div>
    );
}
