export function formatData(data) {
    if (!data) return { giorno: "", meseNome: "", annoAbbreviato: "" };

    const [anno, mese, giorno] = data.split("-");
    const mesi = [
        "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
    ];

    const meseNome = mesi[parseInt(mese) - 1];
    const annoAbbreviato = anno.slice(-2);

    return { giorno, meseNome, annoAbbreviato };
}

export function isEventoPassato(dataEvento) {
    if (!dataEvento) return false;

    const oggi = new Date();
    const [anno, mese, giorno] = dataEvento.split("-").map(Number); // Converti in numeri
    const dataEventoDate = new Date(anno, mese - 1, giorno); // Mese è 0-based

    return dataEventoDate < oggi;
}