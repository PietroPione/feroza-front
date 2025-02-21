"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const ToggleMenu = ({ nav = [] }) => {
    const [isOpen, setOpen] = useState(false);
    const overlayRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

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
            {/* Pulsante toggle senza posizione fixed */}
            <button
                ref={buttonRef}
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen((prev) => !prev);
                }}
                role="button"
                aria-expanded={isOpen}
                aria-label="Toggle Navigation Menu"
                className={`p-2 focus:outline-none transition-opacity  ease-in-out 
                    ${isOpen ? "fixed z-50 top-4 left-1/2 -translate-x-1/2" : "relative z-30"}`}

            >
                <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 relative">
                    <span
                        className={`block w-8 h-1 rounded transition-transform duration-300 ${isOpen
                            ? "bg-white rotate-45 translate-y-3"
                            : "bg-current translate-y-0"
                            }`}
                    ></span>
                    <span
                        className={`block w-8 h-1 rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : "bg-current opacity-100"
                            }`}
                    ></span>
                    <span
                        className={`block w-8 h-1 rounded transition-transform duration-300 ${isOpen
                            ? "bg-white -rotate-45 -translate-y-2"
                            : "bg-current translate-y-0"
                            }`}
                    ></span>
                </div>
            </button>

            {/* Overlay del menu con transizione di opacità */}
            <div
                ref={overlayRef}
                className={`fixed inset-0 z-20 bg-primary text-secondary flex flex-col items-center justify-center transition-opacity duration-500 ${isOpen ? "opacity-100 visible fixed" : "opacity-0 invisible fixed"}`}
            >
                <ul className="space-y-6">
                    {nav.map((item, index) => (
                        <li key={index} className="text-white text-center uppercase text-22 font-semibold">
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
        </>
    );
};

export default ToggleMenu;
