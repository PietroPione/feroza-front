"use client";

import { useState, useEffect, useRef, useContext } from "react";
import { createClient } from "@/prismicio";
import { LanguageContext } from "@/context/LanguageContext";

export default function CookiePopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [cookieData, setCookieData] = useState(null);
    const popupRef = useRef(null);
    const { language } = useContext(LanguageContext);

    const handleClosePopup = () => { // Sposta la dichiarazione qui
        setIsVisible(false);
        localStorage.setItem("cookiePopupSeen", "true");
    };

    useEffect(() => {
        const fetchData = async () => {
            const client = createClient();
            const response = await client.getByType("cookiebanner", { lang: language });
            if (response?.results.length > 0) {
                setCookieData(response.results[0].data.slices[0].primary);
            }
        };
        fetchData();
    }, [language]);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem("cookiePopupSeen");
        setIsVisible(!hasSeenPopup);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                handleClosePopup();
            }
        };

        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [popupRef, isVisible]);

    if (!isVisible || !cookieData) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 z-50"
        >
            <div
                ref={popupRef}
                className="bg-primary p-6  w-full "
                onClick={(e) => e.stopPropagation()}
            >
                <div className="container">
                    <h2 className="text-15 text-white md:text-22 font-semibold mb-2">{cookieData.titolo}</h2>
                    <p className="text-12 md:text-15 text-white mb-4">{cookieData.testo}</p>
                    <a
                        href={cookieData.link_tasto.url}
                        className="inline-block w-auto max-w-max px-8 py-4 border-2 transition text-white bg-secondary rounded-full hover:bg-primary uppercase font-semibold underline"
                        onClick={handleClosePopup}
                    >
                        {cookieData.testo_tasto}
                    </a>
                </div>
            </div>
        </div>
    );
}