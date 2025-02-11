import { createClient } from "@/prismicio";

export default async function MenuPage() {
  const client = createClient();

  // Recupera il documento del custom type "drinklist"
  const response = await client.getByType("drinklist");
  const drinklist = response.results[0];

  if (!drinklist) {
    return <p>Drink list non trovata</p>;
  }

  // Estrarre i dati principali
  const drinkSlice = drinklist.data.slices.find(slice => slice.slice_type === "drink_list");
  const titolo = drinkSlice?.primary?.titolo || "Drink List";
  const testo = drinkSlice?.primary?.testo || "";
  const cocktails = drinkSlice?.primary?.cocktail || [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{titolo}</h1>
      <p className="text-lg">{testo}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {cocktails.map((drink, index) => (
          <div key={index} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{drink.nome_drink}</h2>
            {drink.iconcina && <span>🍸</span>}

            <p>{drink.ingredienti}</p>
            <p className="font-bold">{drink.prezzo}€</p>
          </div>
        ))}
      </div>
    </div>
  );
}
