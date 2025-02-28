export function formatData(data, language = "it-IT") {
    if (!data) return { giorno: "", meseNome: "", annoAbbreviato: "" };

    const [anno, mese, giorno] = data.split("-");
    const dataObj = new Date(anno, mese - 1, giorno);

    const meseNome = new Intl.DateTimeFormat(language, { month: "long" }).format(dataObj);
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