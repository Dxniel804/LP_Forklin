import type { Metadata } from "next";
import { Space_Grotesk, Montserrat, Instrument_Sans } from "next/font/google";
import "./globals.css";

// Wordmark "forklin" no header
const spaceGrotesk = Space_Grotesk({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["300", "400"],
});

// Nav, botões, corpo
const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["500", "600"],
});

// Headline e eyebrow itálico do hero
const instrumentSans = Instrument_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Forklin — Plataforma de sistemas para o seu negócio",
  description:
    "Forklin reúne, em um só lugar, os sistemas que o seu negócio precisa. Conheça o Diário Digital e os próximos módulos da plataforma.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${montserrat.variable} ${instrumentSans.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
