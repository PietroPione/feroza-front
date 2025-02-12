import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
