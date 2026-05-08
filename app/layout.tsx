import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/components/site";
import "./globals.css";

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — LED & Solar`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${dm.variable} ${outfit.variable} min-h-screen font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="relative flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
