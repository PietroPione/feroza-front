"use client";

import { createClient } from "@/prismicio";
import Link from "next/link";
import ButtonPrimary from "./buttonPrimary";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext, useEffect, useState } from "react";

export default function Footer() {
    const { language } = useContext(LanguageContext);
    const [footerData, setFooterData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const client = createClient();
            const response = await client.getByType("footer", { lang: language });
            if (response?.results.length > 0) {
                setFooterData(response.results[0]);
            }
            setLoading(false);
        };
        fetchData();
    }, [language]);

    if (loading) {
        return (
            <footer className="bg-primary py-10 text-white">
                <div className="container space-y-4">
                    <div className="animate-pulse bg-white invisible h-20 rounded"></div>
                    <div className="animate-pulse bg-white invisible h-20 rounded"></div>
                    <div className="animate-pulse bg-white invisible h-20 rounded"></div>
                </div>
            </footer>
        );
    }

    if (!footerData) {
        return (
            <footer className="bg-primary py-10 text-white">
                <div className="container">Nessun dato trovato</div>
            </footer>
        );
    }

    // Estrai il logo dai slices
    const logoSlice = footerData.data.slices.find(
        (slice) => slice.slice_type === "logo"
    );
    const logoUrl = logoSlice?.primary?.logo?.url || null;

    // Estrai info generali
    const infoSlice = footerData.data.slices.find(
        (slice) => slice.slice_type === "info_footer"
    );
    const indirizzo = infoSlice?.primary?.indirizzo || "";
    const linkMaps = infoSlice?.primary?.link_mappa.text || [];
    const nomeRistorante = infoSlice?.primary?.nome_ristorante || [];
    const titoloOrari = infoSlice?.primary?.titolo_orari || [];
    const orari = infoSlice?.primary?.orari || [];
    const titoloSocial = infoSlice?.primary?.seguici || [];
    const socialLinks = infoSlice?.primary?.social || [];
    const prenotare = infoSlice?.primary?.riservare_tavolo || [];
    const buttonText = infoSlice?.primary?.testo_tasto || "";
    const buttonLink = infoSlice?.primary?.link_tasto?.text || "#";
    const info = infoSlice?.primary?.info || "";
    const developer = infoSlice?.primary?.credits || "";
    const developer_link = infoSlice?.primary?.link_credits || "";
    const telefonoTitolo = infoSlice?.primary?.telefono_titolo || "";
    const telefonoTesto = infoSlice?.primary?.telefono_testo || "";
    const telefonoLink = infoSlice?.primary?.telefono_link.url || "";
    const mailTitolo = infoSlice?.primary?.mail_titolo || "";
    const mailTesto = infoSlice?.primary?.mail_testo || "";
    const mailLink = infoSlice?.primary?.mail_link.url || "";
    const cookieTesto = infoSlice?.primary?.testo_cookie || "";
    const cookieLink = infoSlice?.primary?.link_cookie.url || "";

    return (
        <footer className="bg-primary py-10 text-white space-y-4">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"> {/* Modifica qui */}
                <div className="space-y-4">
                    <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
                        {logoUrl && (
                            <img src={logoUrl} alt="Logo" className="h-24 w-auto object-contain" />
                        )}
                        <div className="text-26 font-semibold">{nomeRistorante}</div>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <Link href={linkMaps} target="_blank" className="hover:underline">
                            {indirizzo}
                        </Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-4">
                        <div className="text-22 font-semibold">{telefonoTitolo}</div>
                        <Link href={telefonoLink}>{telefonoTesto}</Link>
                    </div>
                    <div className="space-y-4">
                        <div className="text-22 font-semibold">{mailTitolo}</div>
                        <Link href={mailLink}>{mailTesto}</Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="text-22 font-semibold">{titoloOrari}</div>
                    <ul>
                        {orari.map((item, index) => (
                            <li key={index}>
                                {item.giorno} {item.orari}
                            </li>
                        ))}
                    </ul>
                </div>



                <div className="space-y-4">
                    <div className="text-22 font-semibold">{titoloSocial}</div>
                    <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                            <Link key={index} href={social.link?.text || "#"}>
                                <img
                                    src={social.logo?.url || ""}
                                    alt={`Social ${index}`}
                                    className="h-12 w-auto object-contain"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="text-22 font-semibold">{prenotare}</div>
                    <ButtonPrimary url={buttonLink} testo={buttonText} externalLink />
                </div>
            </div>
            <div className="container flex flex-col md:flex-row md:space-x-10 mt-8">
                <div className="text-10 ">{info}</div>
                <Link href={developer_link.text} target="_blank">
                    <div className="text-10 ">{developer}</div>
                </Link>
                <Link href={cookieLink} target="_blank">
                    <div className="text-10 ">{cookieTesto}</div>
                </Link>
            </div>
        </footer>
    );
}