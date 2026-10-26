import type { Metadata } from "next";
import { DM_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "IKO+ STUDIO — Páginas Web y Soluciones Digitales",
  description:
    "Páginas web, landing pages y soluciones digitales para pequeños negocios y emprendedores en Lima, Perú. Diseño y desarrollo a medida.",
  keywords: [
    "páginas web",
    "landing page",
    "desarrollo web",
    "diseño web",
    "soluciones digitales",
    "Lima",
    "Perú",
  ],
  authors: [{ name: "IKO+ STUDIO" }],
  openGraph: {
    title: "IKO+ STUDIO — Páginas Web y Soluciones Digitales",
    description:
      "Páginas web y soluciones digitales para pequeños negocios y emprendedores. Lima, Perú.",
    type: "website",
    locale: "es_PE",
    siteName: "IKO+ STUDIO",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-[family-name:var(--font-dm-sans)] bg-blanco text-negro min-h-screen flex flex-col antialiased">
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
