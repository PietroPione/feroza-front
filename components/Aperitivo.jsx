export default function Aperitivo({
  titolo,
  sottotitolo,
  testoBevande,
  nomeBevanda,
  iconaBevanda,
  testoSalsa,
  salse,
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
      <div className="absolute top-0 left-[10vw]">
        <img src={immagineTopSx} alt="" className="h-auto w-60" />
      </div>
      <div className="absolute top-[10vw] right-[25vw]">
        <img src={immagineTopDx} alt="" className="h-24 w-auto" />
      </div>
      <div className="absolute bottom-[20vh] left-[20vw]">
        <img src={immagineBottomSx} alt="" className="h-36 w-auto" />
      </div>
      <div className="absolute bottom-10 right-[20vw]">
        <img src={immagineBottomDx} alt="" className="h-48 w-auto" />
      </div>


      <div className="container mx-auto p-4 space-y-6 text-center">

        <div className="space-y-2">
          <h1 className="text-32 text-center font-bold">{titolo}</h1>
          <h2 className="text-22 text-center">{sottotitolo}</h2>
        </div>

        <ul className="text-22 space-y-4">
          {nomeBevanda.map((bevanda, index) => (
            <li key={index} className={`flex justify-center items-center gap-10 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {bevanda.icona?.url && <img src={bevanda.icona.url} alt="" className="w-12 h-12" />}
              <span>{bevanda.nome_bevanda}</span>
            </li>
          ))}
        </ul>


        <p className="text-17">{testoSalsa}</p>
        <ul className="text-22">
          {salse.map((salsa, index) => (
            <li key={index}>{salsa.nome_salsa}</li>
          ))}
        </ul>


        <ul className="text-22">
          {falafel.map((item, index) => (
            <li key={index}>{item.nome_falafel}</li>
          ))}
        </ul>

        <p className="text-22">{pane}</p>

        <p className="text-22 font-bold">{prezzo}</p>
      </div>
    </div>

  );
}
