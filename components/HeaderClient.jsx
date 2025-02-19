// components/HeaderClient.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import ToggleMenu from "./menu/ToggleMenu";
import LanguageSwitcher from "./LanguageSwitcher"; // Importa il componente

export default function HeaderClient({ logoUrl, menuItems }) {
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

            <nav className="flex items-center space-x-4">
                <ToggleMenu nav={menuItems} />
                {/* Aggiungi il LanguageSwitcher */}
                <LanguageSwitcher />
            </nav>
        </header>
    );
}
