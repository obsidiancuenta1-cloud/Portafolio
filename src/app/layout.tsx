import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brayan | Full-Stack Jr. React + Node.js — UNH Huancavelica, Perú",
  description:
    "Portafolio de Brayan, estudiante último ciclo de Ing. de Sistemas UNH. Full-Stack Jr. React + Node.js. Tesis: sistema web prevención de anemia, Hospital de Pampas Tayacaja. Disponible Perú / remoto LATAM.",
  keywords: ["Full-Stack Jr", "React", "Node.js", "UNH", "Huancavelica", "Perú", "portafolio desarrollador"],
  authors: [{ name: "Brayan" }],
  openGraph: {
    title: "Brayan | Full-Stack Jr. React + Node.js",
    description: "UNH Huancavelica · React + Node.js · Sistema anemia Pampas Tayacaja · Disponible Perú/remoto",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
