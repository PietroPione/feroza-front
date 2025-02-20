// components/HeaderClient.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import ToggleMenu from "./menu/ToggleMenu";

export default function HeaderClient({ logoUrl, menuItems }) {
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
                            />
                        )}
                    </div>
                </Link>
            </div>

            <div className="md:absolute md:right-8">
                <ToggleMenu nav={menuItems} />
            </div>
        </header>
    );
}
