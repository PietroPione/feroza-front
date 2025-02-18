"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const ToggleMenu = ({ nav = [] }) => {
    const [isOpen, setOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const nodeRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        handleResize(); // Controlla alla prima render
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (nodeRef.current && !nodeRef.current.contains(e.target)) {
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

    if (isDesktop) {
        return (
            <nav className="flex space-x-6">
                {nav.map((item, index) => (
                    <Link
                        key={index}
                        href={`${item.slug?.text ? item.slug.text : (item.link?.text || "")}`}
                        className="text-primary hover:underline text-lg"
                    >
                        {item.testo}
                    </Link>
                ))}
            </nav>
        );
    }

    return (
        <div ref={nodeRef} className="relative">
            {/* Bottone per aprire/chiudere il menu su mobile */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                role="button"
                aria-expanded={isOpen}
                aria-label="Toggle Navigation Menu"
                className="p-2 bg-primary text-white rounded"
            >
                Menu
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 bg-primary bg-opacity-100 text-secondary flex flex-col items-center justify-center">
                    <button
                        onClick={() => setOpen(false)}
                        aria-label="Close Navigation Menu"
                        className="absolute top-8 right-24 text-white text-4xl p-2"
                    >
                        x
                    </button>
                    <ul className="space-y-6">
                        {nav.map((item, index) => (
                            <li key={index} className="text-white">
                                <Link
                                    href={`${item.slug?.text ? item.slug.text : (item.link?.text || "")}`}
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
        </div>
    );
};

export default ToggleMenu;
