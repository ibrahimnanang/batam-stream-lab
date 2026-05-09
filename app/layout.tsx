import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Syne } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AppProviders } from "@/components/providers/AppProviders";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getLocale } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Batam Stream Lab — Hybrid Event & Streaming Solutions",
    template: "%s — Batam Stream Lab",
  },
  description:
    "Professional hybrid events, live streaming, LED systems, and multimedia production from Batam — serving Indonesia and Singapore.",
  keywords: [
    "Hybrid Event Batam",
    "Live Streaming Batam",
    "Event Production Indonesia",
    "LED Wall Batam",
    "Webinar Production",
    "Virtual Event Organizer",
    "Multimedia Production Batam",
  ],
  openGraph: {
    title: "Batam Stream Lab — Hybrid Event & Streaming Solutions",
    description:
      "Broadcast studio aesthetic production partner for hybrid events, streaming, and LED experiences.",
    type: "website",
    locale: "en_US",
    siteName: "Batam Stream Lab",
  },
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const locale = await getLocale();

  return (
    <html lang={locale === "id" ? "id" : "en"} suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable} min-h-screen font-sans antialiased`}>
        <AppProviders>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="relative flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
