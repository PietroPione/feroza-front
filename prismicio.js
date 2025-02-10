import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "./slicemachine.config.json";

// Il nome del repository
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

// Definisci le rotte (se necessarie)
const routes = [
  // Esempio di una route per una homepage
  // {
  //   type: "homepage",
  //   path: "/",
  // },
  // Aggiungi altre route se necessario
];

/**
 * Crea un client per il progetto.
 *
 * @param {prismicNext.CreateClientConfig} config - Configurazione per il client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  // Abilita la visualizzazione in anteprima se necessario
  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};

// Usa questa funzione in altre parti del tuo progetto per ottenere il client
