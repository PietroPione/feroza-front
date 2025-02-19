import { createClient } from "@prismicio/client";
import fs from "fs";

/** @returns {Promise<import('next').NextConfig>} */
export default async () => {
  const sm = JSON.parse(fs.readFileSync("./slicemachine.config.json", "utf-8"));
  const client = createClient(sm.repositoryName);
  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return {
    images: {
      domains: ["images.prismic.io"], // Aggiungi il dominio di Prismic
    },
    i18n: {
      locales,
      defaultLocale: locales[0], // Imposta la lingua predefinita come la prima nel repository
    },
  };
};
