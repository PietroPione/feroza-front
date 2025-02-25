/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.prismic.io"],
  },
  i18n: {
    locales: ["en-us", "it-it"], // Lingue disponibili
    defaultLocale: "it-it", // La lingua predefinita deve essere inclusa in 'locales'
  },
};

export default nextConfig;
