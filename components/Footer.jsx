import { createClient } from "@/prismicio";
import Link from "next/link";
import Image from "next/image";
import ButtonPrimary from "./buttonPrimary";

export default async function Footer() {
    const client = createClient();
    const response = await client.getByType("footer");

    if (!response || response.results.length === 0) {
        return <div>Nessun dato trovato</div>;
    }

    const footerData = response.results[0];

    // Estrai il logo dai slices
    const logoSlice = footerData.data.slices.find(slice => slice.slice_type === "logo");
    const logoUrl = logoSlice?.primary?.logo?.url || null;

    // Estrai info generali
    const infoSlice = footerData.data.slices.find(slice => slice.slice_type === "info_footer");
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

    return (
        <footer className="bg-primary py-10 text-white space-y-4">
            <div className="flex flex-col md:flex-row justify-between container space-y-10 md:space-y-0">
                <div>
                    <div>

                        {/* Logo */}
                        {logoUrl && (
                            <img
                                src={logoUrl}
                                alt="Logo"
                                className="h-24 w-auto"

                            />
                        )}
                        <div className="text-26 font-semibold">{nomeRistorante}</div>
                    </div>

                    {/* Info generali */}
                    <Link href={linkMaps} target="_blank" className="hover:underline">
                        {indirizzo}
                    </Link>

                </div>

                {/* Orari */}
                <div className="space-y-4 flex flex-col">
                    <div className="text-22 font-semibold">
                        {titoloOrari}
                    </div>
                    <ul>
                        {orari.map((item, index) => (
                            <li key={index}>{item.giorno} {item.orari}</li>
                        ))}
                    </ul>
                </div>

                {/* Social */}
                <div className="space-y-4 flex flex-col">
                    <div className="text-22 font-semibold" >
                        {titoloSocial}
                    </div>
                    <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                            <Link key={index} href={social.link?.text || "#"}>
                                <img
                                    src={social.logo?.url || ""}
                                    alt={`Social ${index}`}
                                    className="h-12 w-auto hover:scale-110 hover:duration-300"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottone Prenota */}
                <div className="space-y-4 flex flex-col">
                    <div className="text-22 font-semibold">{prenotare}</div>
                    <ButtonPrimary url={buttonLink} testo={buttonText} externalLink />
                </div>
            </div>
            <div className="container flex space-x-10">
                <div className="text-10 ">{info}</div>
                <Link href={developer_link.text} target="_blank">
                    <div className="text-10 ">{developer}</div>
                </Link>
            </div>
        </footer>
    );
}
