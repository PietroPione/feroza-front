export default function Bevande({ titoloBevande, immagineBevande, listaBevande }) {
  return (
    <div className="container mx-auto p-4 md:p-0 space-y-10 md:space-y-20">
      {/* Ciclo per le sezioni ripetibili */}
      {titoloBevande.length > 0 &&
        titoloBevande.map((titolo, index) => (
          <div key={index}>
            <ul className="relative">

              {immagineBevande[index] && (
                <div className="flex items-center justify-center">

                  <img
                    src={immagineBevande[index]}
                    alt=""
                    className="static md:absolute md:top-[5vh] left-[50vw] w-auto h-48 my-4"
                  />
                </div>
              )}

              <div className="mb-8 space-y-10 md:space-y-0">
                <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-10 items-center">
                  <h2 className="text-32 font-bold">{titolo}</h2>
                </div>
              </div>

              {/* Ciclo sugli elementi del menu */}
              {listaBevande[index]?.map((item, idx) => (
                <li key={idx} className="py-2">
                  <div className="flex justify-between">
                    <div className="flex items-center justify-center space-x-2 max-w-[50vw] md:max-w-full">
                      <span className="font-semibold text-22">{item.nome}</span>
                    </div>
                    <span className="font-semibold text-22">{item.prezzo}</span>
                  </div>
                  <p className="text-sm">{item.dettagli}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
