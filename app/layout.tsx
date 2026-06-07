import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Heuvia | Learning Made Simple. Education Made Powerful.",
    template: "%s | Heuvia",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Heuvia",
    "academic LMS",
    "learning management system",
    "education platform",
    "student portal",
    "professor tools",
  ],
  authors: [{ name: "Heuvia" }],
  creator: "Heuvia",
  publisher: "Heuvia",
  alternates: {
    canonical: siteConfig.links.website,
  },
  icons: {
    icon: "/logo.svg",
    apple: "/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta
          property="og:title"
          content="Heuvia | Learning Made Simple. Education Made Powerful."
        />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.links.website} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content={`${siteConfig.links.website}/hero-showcase.png`}
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="288" />
        <meta
          property="og:image:alt"
          content="Heuvia platform dashboard preview"
        />
        <meta property="og:type" content="website" />
      </head>
      <body>{children}</body>
    </html>
  );
}
