
export default function DrinkList({ titolo, testo, cocktails, drinkTopSx, drinkTopMid, drinkTopDx, drinkBottomSx, drinkBottomMid, drinkBottomDx }) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0">
        <img src={drinkTopSx} alt="" className="opacity-35 md:opacity-100 h-auto w-20 md:w-40" />
      </div>
      <div className="absolute top-[20vh] md:top-[10vh] left-[50vw]">
        <img src={drinkTopMid} alt="" className="opacity-35 md:opacity-100 h-auto w-40 md:w-50" />
      </div>
      <div className="absolute top-[10vh] md:top-0 right-0">
        <img src={drinkTopDx} alt="" className="opacity-35 md:opacity-100 h-auto w-20 md:w-40" />
      </div>
      <div className="absolute bottom-[30vh] md:bottom-[10vw] left-0">
        <img src={drinkBottomSx} alt="" className="opacity-35 md:opacity-100 h-40 md:h-60 w-auto" />
      </div>
      <div className="absolute bottom-[20vw] md:bottom-[5vw] left- md:left-[30vw]">
        <img src={drinkBottomMid} alt="" className="opacity-35 md:opacity-100 h-auto w-40" />
      </div>
      <div className="absolute bottom-0 right-[5vw] md:right-[10vw]">
        <img src={drinkBottomDx} alt="" className="opacity-35 md:opacity-100 h-auto w-40 md:w-60" />
      </div>
      <div className="container mx-auto p-4 space-y-6">
        <div className="space-y-2">

          <h1 className="text-32 text-center font-bold">{titolo}</h1>
          <p className="text-22 text-center italic">{testo}</p>
        </div>

        <div className="space-y-6">
          {cocktails.map((drink, index) => (
            <div key={index} className=" p-4 space-y-2 flex justify-between">
              <div className="max-w-[75vw]">
                <div className="flex space-x-2">

                  <h2 className="text-15 md:text-22 font-semibold">{drink.nome_drink}</h2>
                  {drink.iconcina && <div className="flex items-center justify-center">🎬</div>}
                </div>
                <p className="text-12 md:text-17">{drink.ingredienti}</p>
              </div>
              <p className="font-bold text-15 md:text-22">{drink.prezzo} €</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
