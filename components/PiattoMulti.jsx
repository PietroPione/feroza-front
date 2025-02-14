export default function PiattoMulti({ infoPiatti, titoliSezione, traduzioniSezione, immaginiSezione, elementiMenu }) {
  return (
    <div className="container space-y-20">
      {/* Ciclo per i piatti info */}
      <div className="text-center">
        {infoPiatti.map((info, index) => (
          <p
            key={index}
            className={`${info.bold ? "font-bold pt-2" : ""} ${info.small ? "text-16 pt-2" : "text-22"}`}
          >
            {info.testo}
          </p>
        ))}
      </div>

      {/* Ciclo per le sezioni ripetibili */}
      {titoliSezione.length > 0 && titoliSezione.map((titolo, index) => (
        <div key={index} className="mb-8 space-y-10 md:space-y-0">
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-10 items-center">
            <h2 className="text-32 font-bold order-2">{titolo}</h2>
            {immaginiSezione[index] && (
              <img
                src={immaginiSezione[index]}
                alt=""
                className="w-auto h-48 my-4 order-1 md:order-2"
              />
            )}

            {traduzioniSezione[index] && (
              <div className="text-26 font-semibold order-3 md:order-3">{traduzioniSezione[index]}</div>
            )}
          </div>

          {/* Ciclo sugli elementi del menu */}
          <ul>
            {elementiMenu[index]?.map((item, idx) => (
              <li key={idx} className="py-2">
                <div className="flex justify-between">
                  <div className="flex items-center justify-center space-x-2 max-w-[50vw] md:max-w-full">

                    <span className="font-semibold text-22">{item.nome_cibo}</span>
                    <div className="flex gap-2 text-xs mt-1">
                      {item.vegetariano && (
                        <img
                          src="https://images.prismic.io/feroza/Z6zegZbqstJ9-ioj_Veg.png?auto=format,compress"
                          alt="Vegetariano"
                          className="w-6 h-6"
                        />
                      )}
                      {item.piccante && (
                        <img
                          src="https://images.prismic.io/feroza/Z64erpbqstJ9-lsz_piccante.png?auto=format,compress"
                          alt="Piccante"
                          className="w-6 h-6"
                        />
                      )}
                    </div>
                  </div>
                  <span className="font-semibold text-22">{item.prezzo_cibo}</span>
                  <div className="font-semibold text-17 ">{item.traduzione_cibo}</div>
                </div>
                <p className="text-sm">{item.descrizione_cibo}</p>

              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
