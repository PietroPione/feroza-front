// components/HeaderServer.jsx
import { createClient } from "@/prismicio";
import HeaderClient from "@/components/HeaderClient";

export default async function HeaderServer() {
    const client = createClient();
    const response = await client.getByType("header");

    if (!response || response.results.length === 0) {
        return <div>Nessun dato trovato</div>;
    }

    const headerData = response.results[0];

    // Estrai il logo dai slices
    const logoSlice = headerData.data.slices.find(
        (slice) => slice.slice_type === "logo"
    );
    const logoUrl = logoSlice?.primary?.logo?.url || null;

    // Estrai le voci di menu dai slices
    const menuSlice = headerData.data.slices.find(
        (slice) => slice.slice_type === "menu"
    );
    const menuItems = menuSlice?.primary?.voci_menu || [];
    return (
        <HeaderClient logoUrl={logoUrl} menuItems={menuItems} />
    );
}
