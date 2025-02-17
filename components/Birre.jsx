export default function Birre({ titoloBirra, disclaimerBirra, birreData }) {
  // Se non c'è alcun dato, non renderizzare nulla
  if (!birreData || birreData.length === 0) return null;

  // Prendi il primo elemento della slice, che contiene le informazioni generali e l'array di birre
  const { iconaPiccola, iconaGrande, birre } = birreData[0];

  return (
    <div className="container mx-auto space-y-6">
      <div className="space-y-0 md: space-y-2">
        <div className="text-center text-32 font-bold">{titoloBirra}</div>
        <div className="text-center text-22 text-gray-600 mb-4">{disclaimerBirra}</div>
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

      {/* Righe per ogni birra */}
      {birre && birre.map((birra, index) => (
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
