"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const ToggleMenu = ({ nav = [] }) => {
    const [isOpen, setOpen] = useState(false);
    const overlayRef = useRef();
    const buttonRef = useRef();

    // Disabilita lo scroll quando il menu è aperto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Chiude il menu se si clicca fuori dall'overlay e fuori dal toggle button
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                overlayRef.current &&
                !overlayRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        }
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <>
            {/* Pulsante toggle senza posizionamento assoluto */}
            <button
                ref={buttonRef}
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen((prev) => !prev);
                }}
                role="button"
                aria-expanded={isOpen}
                aria-label="Toggle Navigation Menu"
                className="z-[60] p-2 focus:outline-none" // Posizionamento rimosso
            >
                <div className="w-6 h-6 flex flex-col justify-between">
                    <span
                        className={`block h-1 transition-transform duration-300 ${isOpen ? "bg-white rotate-45 translate-y-2" : "bg-current"
                            }`}
                    ></span>
                    <span
                        className={`block h-1 transition-opacity duration-300 ${isOpen ? "bg-white opacity-0" : "bg-current opacity-100"
                            }`}
                    ></span>
                    <span
                        className={`block h-1 transition-transform duration-300 ${isOpen ? "bg-white -rotate-45 -translate-y-2" : "bg-current"
                            }`}
                    ></span>
                </div>
            </button>

            {/* Overlay del menu */}
            {isOpen && (
                <div
                    ref={overlayRef}
                    className="fixed inset-0 z-50 bg-primary text-secondary flex flex-col items-center justify-center"
                >
                    <ul className="space-y-6">
                        {nav.map((item, index) => (
                            <li key={index} className="text-white">
                                <Link
                                    href={item.slug?.text ? item.slug.text : item.link?.text || "#"}
                                    onClick={() => setOpen(false)}
                                    className="hover:underline text-white text-2xl"
                                >
                                    {item.testo}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default ToggleMenu;
