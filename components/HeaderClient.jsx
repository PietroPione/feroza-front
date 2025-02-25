// components/HeaderClient.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import ToggleMenu from "./menu/ToggleMenu";

import LanguageSwitcher from "./LanguageSwitcher";

export default function HeaderClient({ logoUrl, menuItems, locales, currentLocale }) {
    return (
        <header className="container py-10 flex flex-col md:flex-row justify-between items-center relative">
            <div className="flex-1 flex justify-center">
                <Link href="/">
                    <div className="cursor-pointer">
                        {logoUrl && (
                            <Image
                                src={logoUrl}
                                alt="Logo"
                                width={150}
                                height={50}
                                priority
                                className="h-24 md:h-32 w-auto"
                            />
                        )}
                    </div>
                </Link>
            </div>
            <div className="static md:absolute md:my-auto md:right-4 flex items-center gap-4">
                <LanguageSwitcher locales={locales} currentLocale={currentLocale} />
                <ToggleMenu nav={menuItems} />
            </div>
        </header>
    );
}

