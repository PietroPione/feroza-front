import ButtonPrimary from "./buttonPrimary";

export default function Vini({ titoloVino, disclaimerVino, viniData, cantinaVino, spiegaVino, tastoAltriVino, linkAltriVino }) {
  // Se non c'è alcun dato, non renderizzare nulla
  if (!viniData || viniData.length === 0) return null;

  // Prendi il primo elemento della slice, che contiene le informazioni generali e l'array di vini
  const { iconaPiccola, iconaGrande, vini } = viniData[0];

  return (
    <div className="container mx-auto space-y-6">
      <div className="space-y-0 md:space-y-2">
        <div className="text-center text-32 font-bold">{titoloVino}</div>
        <div className="text-center text-22 text-gray-600 mb-4">{disclaimerVino}</div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-20  gap-y-10 md:gap-y-0">
        <div className="space-y-0 md:space-y-2 md:justify-start md:max-w-[50vw] flex flex-col text-center md:text-left">
          <div className="text-center md:text-left text-32 font-bold">{cantinaVino}</div>
          <div className="text-center md:text-left text-22 text-gray-600 mb-4">{spiegaVino}</div>
        </div>
        <div className="flex items-center justify-center">
          <ButtonPrimary url={linkAltriVino} testo={tastoAltriVino} uppercase />
        </div>
      </div>
      {/* Prima riga della griglia con le icone */}
      <div className="grid grid-cols-5 pb-2 font-bold">
        <div className="col-span-3"></div>
        <div className="text-center flex items-end">
          <img src={iconaPiccola} alt="Piccola" className="h-8 mx-auto" />
        </div>
        <div className="text-center">
          <img src={iconaGrande} alt="Grande" className="h-12 mx-auto" />
        </div>
      </div>

      {/* Righe per ogni vino */}
      {vini && vini.map((birra, index) => (
        <div key={index} className="grid grid-cols-5 py-2">
          <div className="flex flex-col space-y-0 md:space-y-2 col-span-3 ">
            <div className="text-17 md:text-22 font-semibold">
              {birra.nome}
            </div>
            <div className="text-gray-light text-12 md:text-17">({birra.info})</div>
          </div>
          <div className="text-17 md:text-22 text-center">{birra.prezzoPiccolo}</div>
          <div className="text-17 md:text-22 text-center">{birra.prezzoGrande}</div>

        </div>
      ))}
    </div>
  );
}
