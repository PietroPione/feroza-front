export default function DrinkList({ titolo, testo, cocktails }) {
    return (
      <div className="container mx-auto p-4 space-y-6">
        <div className="space-y-2">

        <h1 className="text-3xl text-center font-bold">{titolo}</h1>
        <p className="text-lg text-center italic">{testo}</p>
        </div>
  
        <div className="space-y-6">
          {cocktails.map((drink, index) => (
            <div key={index} className=" p-4 space-y-2 flex justify-between">
                <div>
              <h2 className="text-xl font-semibold">{drink.nome_drink}</h2>
              {drink.iconcina && <span>🍸</span>}
              <p>{drink.ingredienti}</p>
                </div>
              <p className="font-bold">{drink.prezzo} €</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  