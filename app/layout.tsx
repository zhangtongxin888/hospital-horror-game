import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop, AdsterraPopunderGate, AdsterraSocialBarGate, AdsterraStickyRail } from "@/components/ads";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "./_components/site-shell";
import { StructuredData } from "./_components/structured-data";
import { site } from "./_data/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  category: "games",
  keywords: [
    "Hospital Horror Game guide",
    "Hospital Horror Game Roblox",
    "Hospital Horror Game beginner guide",
    "Hospital Horror Game admin panel",
    "Hospital Horror Game anomaly",
    "Hospital Horror Game sandbox",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/game-icon.png", shortcut: "/game-icon.png", apple: "/game-icon.png" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.domain,
    title: "Hospital Horror Game Wiki — Start with the Doctor route",
    description: site.description,
    images: [{ url: `${site.domain}/og.png`, width: 1731, height: 909, alt: "Hospital Horror Game Beginner Guide night-shift case file" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Horror Game Wiki — Start with the Doctor route",
    description: site.description,
    images: [`${site.domain}/og.png`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090d12",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.domain,
    description: site.description,
  };
  const gameData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Hospital Horror Game!",
    url: site.officialGameUrl,
    gamePlatform: "Roblox",
    creator: { "@type": "Organization", name: site.creator },
  };

  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <AdsterraPopunderGate />
        <AdsterraSocialBarGate />
        <AdsterraStickyRail />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <StructuredData data={websiteData} />
        <StructuredData data={gameData} />
        <SiteHeader />
        <AdsterraArticleTop />
        {children}
        <AdsterraArticleMid />
        <AdsterraArticleBottom />
        <SiteFooter />
      </body>
    </html>
  );
}
