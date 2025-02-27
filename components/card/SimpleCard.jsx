import ButtonPrimary from "@/components/buttonPrimary";

export default function SimpleCard({ titolo, spiega, testoTasto, url, externalLink }) {
    return (
        <div className="py-6 flex flex-col items-center justify-center md:items-start md:justify-start rounded-lg space-y-6">
            <div >
                <h3 className="text-36 text-white font-semibold">{titolo}</h3>
                <p className="text-white">{spiega}</p>
            </div>
            <ButtonPrimary url={url} testo={testoTasto} uppercase externalLink={externalLink} />
        </div>
    );
}