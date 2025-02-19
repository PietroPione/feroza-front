// components/LanguageSwitcher.jsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    // Il percorso viene suddiviso in segmenti. Ad esempio: ['', 'it', 'menu']
    const segments = pathname.split("/");
    // Se il primo segmento dopo lo slash è 'it' o 'en'
    const currentLang = segments[1] || "it"; // Default a 'it' se non definito
    const newLang = currentLang === "it" ? "en" : "it";

    // Sostituisci il segmento della lingua con la nuova lingua
    segments[1] = newLang;
    const newPath = segments.join("/") || "/";

    return (
        <Link href={newPath}>
            <button className="px-4 py-2 bg-gray-200 rounded">
                {newLang.toUpperCase()}
            </button>
        </Link>
    );
}
