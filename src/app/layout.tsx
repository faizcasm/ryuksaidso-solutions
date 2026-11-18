import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://solutions.ryuksaidso.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "RYUKSAIDSO Solutions — Websites, Apps, Desktop Software, Bots & AI",
    template: "%s | RYUKSAIDSO Solutions",
  },
  description:
    "Professional website, mobile app, desktop software, bot & server, and AI automation development. Fixed-scope pricing from ₹10,000. Built by the RYUKSAIDSO team.",
  keywords: [
    "website development",
    "mobile app development",
    "desktop software",
    "discord bots",
    "telegram bots",
    "AI automation",
    "RYUKSAIDSO",
  ],
  openGraph: {
    title: "RYUKSAIDSO Solutions — Websites, Apps, Desktop Software, Bots & AI",
    description:
      "Professional website, mobile app, desktop software, bot & server, and AI automation development with fixed-scope pricing.",
    url: siteUrl,
    siteName: "RYUKSAIDSO Solutions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RYUKSAIDSO Solutions",
    description:
      "Website, mobile app, desktop software, bot & AI automation development — fixed-scope pricing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-bg text-text antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
