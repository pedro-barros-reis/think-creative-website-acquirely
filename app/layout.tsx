import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/sections/shared/CtaSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Think Creative — Michigan-Based Marketing Agency",
    template: "%s — Think Creative",
  },
  description:
    "Michigan-based digital marketing agency with $200M+ in results, 1,000+ clients, and a 100% satisfaction track record. SEO, PPC, Facebook Ads, Web Development & Graphic Design.",
  openGraph: {
    siteName: "Think Creative",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
          {children}
        <CtaSection />
        <Footer />
      </body>
    </html>
  );
}
