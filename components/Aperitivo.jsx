export default function Aperitivo({
  titolo,
  sottotitolo,
  testoBevande,
  nomeBevanda,
  iconaBevanda,
  testoSalsa,
  salse,
  salseVegetariano,
  falafel,
  falafelVegetariano,
  pane,
  prezzo,
  immagineTopSx,
  immagineTopDx,
  immagineBottomSx,
  immagineBottomDx
}) {

  return (
    <div className="relative" >
      {/* <div className="absolute top-0 left-[10vw]">
        <img src={immagineTopSx} alt="" className="opacity-35 md:opacity-100 h-auto w-60" />
      </div> */}
      <div className="absolute top-[15vh] md:top-0 right-[10vw] md:right-[20vw]">
        <img src={immagineTopDx} alt="" className="opacity-0 md:opacity-100 h-48 w-auto" />
      </div>
      {/* <div className="absolute bottom-[40vh] md:bottom-[20vh] md:left-[20vw]">
        <img src={immagineBottomSx} alt="" className="opacity-35 md:opacity-100 h-36 w-auto" />
      </div> */}
      <div className="absolute bottom-[10vh] right-[10vw]">
        <img src={immagineBottomDx} alt="" className="opacity-0 md:opacity-100 h-48 w-auto" />
      </div>


      <div className="container mx-auto p-4 space-y-2 md:space-y-2 ">

        <div className="space-y-2 md:marker:pt-2">
          <h1 className="text-32  font-bold">{titolo}</h1>
          <h2 className="text-22 ">{sottotitolo}</h2>
        </div>

        <ul className=" text-15 md:text-22 space-y-4">
          {nomeBevanda.map((bevanda, index) => (
            <li key={index} className={`flex justify-start items-start gap-2s md:gap-10 space-x-6`}>
              <div>{bevanda.nome_bevanda}</div>
              {bevanda.icona?.url && <img src={bevanda.icona.url} alt="" className="w-auto h-12" />}
            </li>
          ))}
        </ul>
        <div className=" text-15 md:text-22">+</div>

        <p className="text-17">{testoSalsa}</p>
        <ul className=" text-15 md:text-22">
          {salse.map((item, index) => (
            <li key={index} className="flex items-start justify-start space-x-2 md:space-x-6">
              <div>
                {item.nome_salsa}
              </div>
              <img src={salseVegetariano} alt="" className="h-6 w-6" />
            </li>
          ))}
        </ul>
        <div className=" text-15 md:text-22">+</div>

        <ul className=" text-15 md:text-22">
          {falafel.map((item, index) => (
            <li key={index} className="flex items-start justify-start space-x-2 md:space-x-6">
              <div>
                {item.nome_falafel}
              </div>
              <img src={falafelVegetariano} alt="" className="h-6 w-6" />
            </li>
          ))}
        </ul>
        <div className=" text-15 md:text-22">+</div>
        <p className=" text-15 md:text-22">{pane}</p>
        <div className=" text-15 md:text-22">=</div>
        <p className=" text-15 md:text-22 font-bold">{prezzo}</p>
      </div>
    </div>

  );
}
