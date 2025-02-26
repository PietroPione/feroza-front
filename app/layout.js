import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import HeaderServer from "@/components/HeaderServer";
import { LanguageProvider } from "@/context/LanguageContext";

const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Feroza",
  description: "Ristorante Afghano a Torino",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
      <LanguageProvider>
        <HeaderServer />
        <main>{children}</main>
        <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
