"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) return null;

    // Usa le lingue definite in next.config.js
    const locales = ["en-us", "it-it"];
    const currentLocale = pathname.split("/")[1];

    return (
        <div className="flex gap-4">
            {locales.map((locale) => (
                <Link key={locale} href={`/${locale}${pathname.replace(/^\/[a-z]{2}-[a-z]{2}/, "")}`}>
                    <button
                        className={`px-4 py-2 border ${currentLocale === locale ? "bg-primary text-white" : "bg-gray-light"
                            }`}
                    >
                        {locale.toUpperCase()}
                    </button>
                </Link>
            ))}
        </div>
    );
}
