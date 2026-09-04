import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetworkGlobe from "@/components/NetworkGlobe";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kovex.example"),
  title: {
    default: "Kovex · La tecnología que opera tu mesa",
    template: "%s · Kovex",
  },
  description:
    "Infraestructura tecnológica para brokers y mesas de inversión: plataforma de trading white label, telefonía en renta y CRM operativo.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Kovex",
    title: "Kovex · La tecnología que opera tu mesa",
    description:
      "Plataforma de trading white label, telefonía en renta y CRM operativo. Con tu marca.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <NetworkGlobe />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
