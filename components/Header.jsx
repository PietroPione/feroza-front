import { createClient } from "@/prismicio";
import Link from "next/link";
import Image from "next/image";

export default async function Header() {
    const client = createClient();
    const response = await client.getByType("header");

    if (!response || response.results.length === 0) {
        return <div>Nessun dato trovato</div>;
    }

    const headerData = response.results[0];

    // Estrai il logo dai slices
    const logoSlice = headerData.data.slices.find(slice => slice.slice_type === "logo");
    const logoUrl = logoSlice?.primary?.logo?.url || null;

    // Estrai le voci di menu dai slices
    const menuSlice = headerData.data.slices.find(slice => slice.slice_type === "menu");
    const menuItems = menuSlice?.primary?.voci_menu || [];

    return (
        <header className="container py-10 flex flex-col md:flex-row space-y-6 justify-between items-center">
            <Link href="/">
                <div className="cursor-pointer">
                    {logoUrl && (
                        <Image
                            src={logoUrl}
                            alt="Logo"
                            width={150}
                            height={50}
                            priority
                        />
                    )}
                </div>
            </Link>

            <nav className="flex space-x-6">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link?.text || "#"}
                        className="text-primary text-lg font-medium hover:underline"
                    >
                        {item.testo}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
