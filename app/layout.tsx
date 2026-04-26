import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/sections/shared/CtaSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Set NEXT_PUBLIC_SITE_URL in .env to your production domain
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thinkcreative.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Think Creative — Michigan-Based Marketing Agency",
    template: "%s — Think Creative",
  },
  description:
    "Michigan-based digital marketing agency with $200M+ in results, 1,000+ clients, and a 100% satisfaction track record. SEO, PPC, Facebook Ads, Web Development & Graphic Design.",
  openGraph: {
    siteName: "Think Creative",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ThinkCreativeMI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Think Creative",
  description:
    "Michigan-based digital marketing agency specializing in SEO, PPC, Facebook Ads, Graphic Design, and Web Development.",
  url: SITE_URL,
  telephone: "+18106423556",
  address: {
    "@type": "PostalAddress",
    addressRegion: "MI",
    addressCountry: "US",
  },
  areaServed: "Michigan",
  serviceType: [
    "SEO",
    "PPC Advertising",
    "Facebook Ads",
    "Graphic Design",
    "Web Development",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div id="main-content">
        {children}
        </div>
        <CtaSection />
        <Footer />
      </body>
    </html>
  );
}
