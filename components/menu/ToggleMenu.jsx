"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import Image from "next/image";

const ToggleMenu = ({ nav = [], immagineTopSx, immagineTopDx, immagineBottomSx, immagineBottomDx }) => {
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
            <button
                ref={buttonRef}
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen((prev) => !prev);
                }}
                role="button"
                aria-expanded={isOpen}
                aria-label="Toggle Navigation Menu"
                className={`p-2 focus:outline-none transition-opacity ease-in-out ${isOpen ? "fixed z-50 top-4 left-1/2 -translate-x-1/2" : "relative z-30"
                    }`}
            >
                <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 relative">
                    <span
                        className={`block w-8 h-1 rounded transition-transform duration-300 ${isOpen ? "bg-gray-dark rotate-45 translate-y-3" : "bg-current translate-y-0"
                            }`}
                    ></span>
                    <span
                        className={`block w-8 h-1 rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : "bg-current opacity-100"
                            }`}
                    ></span>
                    <span
                        className={`block w-8 h-1 rounded transition-transform duration-300 ${isOpen ? "bg-gray-dark -rotate-45 -translate-y-2" : "bg-current translate-y-0"
                            }`}
                    ></span>
                </div>
            </button>

            <div
                ref={overlayRef}
                className={`fixed inset-0 z-20 bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${isOpen ? "opacity-100 visible fixed" : "opacity-0 invisible fixed"
                    }`}
            >
                {/* Posizionamento immagini direttamente nel popup */}
                {immagineTopSx && (
                    <div className="absolute top-0 left-0">
                        <Image
                            src={immagineTopSx}
                            alt={"Immagine di contesto"}
                            width={300}
                            height={200}
                            className=" w-32 md:w-40 h-auto"
                        />
                    </div>
                )}
                {immagineTopDx && (
                    <div className="absolute top-0 right-0">
                        <Image
                            src={immagineTopDx}
                            alt={"Immagine di contesto"}
                            width={300}
                            height={200}
                            className=" w-32 md:w-40 h-auto"
                        />
                    </div>
                )}

                <div className="w-full h-full flex flex-col space-y-20 items-center justify-center">
                    <ul className="space-y-6">
                        {nav.map((item, index) => (
                            <li key={index} className=" text-center uppercase text-22 font-semibold">
                                <Link
                                    href={item.slug?.text ? item.slug.text : item.link?.text || "#"}
                                    onClick={() => setOpen(false)}
                                    className="hover:underline text-2xl"
                                >
                                    {item.testo}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="text-secondary">
                        <LanguageSwitcher onLanguageChange={() => setOpen(false)} />
                    </div>

                </div>

                {immagineBottomSx && (
                    <div className="absolute bottom-0 left-0">
                        <Image
                            src={immagineBottomSx}
                            alt={"Immagine di contesto"}
                            width={300}
                            height={200}
                            className=" w-32 md:w-40 h-auto"
                        />
                    </div>
                )}
                {immagineBottomDx && (
                    <div className="absolute bottom-0 right-0">
                        <Image
                            src={immagineBottomDx}
                            alt={"Immagine di contesto"}
                            width={300}
                            height={200}
                            className=" w-32 md:w-40 h-auto"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default ToggleMenu;