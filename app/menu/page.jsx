import { createClient } from "@/prismicio";
import DrinkList from "@/components/DrinkList";

export default async function MenuPage() {
  const client = createClient();
  const response = await client.getByType("drinklist");
  const drinklist = response.results[0];

  if (!drinklist) {
    return <p>Drink list non trovata</p>;
  }

  const drinkSlice = drinklist.data.slices.find(slice => slice.slice_type === "drink_list");
  const titolo = drinkSlice?.primary?.titolo || "Drink List";
  const testo = drinkSlice?.primary?.testo || "";
  const cocktails = drinkSlice?.primary?.cocktail || [];

  return <DrinkList titolo={titolo} testo={testo} cocktails={cocktails} />;
}
