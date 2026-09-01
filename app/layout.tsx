import type { Metadata } from "next";
import { Fraunces, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AdsterraInPagePush } from "@/components/adsterra";
import { SITE_URL } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hearth and Hamlet Guide & Wiki",
    template: "%s | Hearth & Hamlet Guide",
  },
  description:
    "Fan-made Hearth and Hamlet guide hub: beginner walkthrough, town layouts, tech tree roadmap, buildings list, and best settings.",
  openGraph: {
    type: "website",
    siteName: "Hearth and Hamlet Guide",
    images: [
      {
        url: "/img/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Hearth and Hamlet Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/logo/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/logo/favicon_io/apple-touch-icon.png",
  },
  manifest: "/logo/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSerif.variable} ${plexMono.variable}`}
    >
      <body>
        <SiteHeader />
        <main id="main">{children}</main>
        <AdsterraInPagePush />
        <SiteFooter />
      </body>
    </html>
  );
}
