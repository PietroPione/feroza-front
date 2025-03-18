import Image from "next/image";

export default function Aperitivo({ slice }) {
  const { titolo, sottotitolo, prezzo, immagine_bottom_dx, portate, allineato_a_sinistra } =
    slice.primary;

  const textAlignClass = allineato_a_sinistra ? "text-left items-start" : "text-center items-center";

  return (
    <div className="relative">
      <div className={`container mx-auto p-4 space-y-10 flex flex-col ${textAlignClass}`}>
        <div className={`leading-none space-y-6 md:pt-2 ${textAlignClass}`}>
          <div className="space-y-2">
            <h1 className="text-32 font-bold">{titolo}</h1>
            <h2 className="text-26">{sottotitolo}</h2>
          </div>
          <div className="text-22 font-bold">{prezzo}</div>
        </div>

        <ul className="text-15 md:text-22 space-y-4">
          {portate && Array.isArray(portate) && portate.map((item, index) => (
            <li
              key={index}
              className={`flex flex-col justify-center ${textAlignClass} gap-2 md:gap-6`}
            >
              <div>
                <div className="text-22 uppercase font-semibold">{item.alimento}</div>
                <div>{item.spiega}</div>
              </div>
              {index < portate.length - 1 && (
                <div className="text-15 md:text-22">+</div>
              )}
            </li>
          ))}
        </ul>
        <div className="md:absolute bottom-[0vh] right-[5vw]">
          {immagine_bottom_dx?.url && (
            <Image
              src={immagine_bottom_dx.url}
              alt={immagine_bottom_dx.alt || ""}
              width={immagine_bottom_dx.dimensions?.width || 300}
              height={immagine_bottom_dx.dimensions?.height || 300}
              className=" h-60 md:h-96 w-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
}