import type { Metadata } from "next";
import "./globals.css";

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://shpper.bouz.me");

export const metadata: Metadata = {
  title: {
    default: "Shpper — Your Global Personal Shopper",
    template: "%s | Shpper",
  },
  description:
    "Buy products from anywhere in the world, delivered by real travelers. Shpper is a peer-to-peer shopping platform based in Dubai connecting buyers with travelers globally.",
  metadataBase: new URL(BASE_URL),
  keywords: [
    "global shopping",
    "personal shopper",
    "peer to peer shipping",
    "travel shopping",
    "buy from abroad",
    "concierge service",
    "international shopping",
    "traveler marketplace",
    "Dubai shopping app",
    "shop from abroad",
    "traveler delivery",
    "sustainable shipping",
    "luxury concierge",
    "cross border shopping",
  ],
  authors: [{ name: "SHPPER Software Design FZCO" }],
  creator: "Shpper",
  publisher: "SHPPER Software Design FZCO",
  openGraph: {
    type: "website",
    siteName: "Shpper",
    locale: "en",
    title: "Shpper — Your Global Personal Shopper",
    description:
      "Buy products from anywhere in the world, delivered by real travelers. A peer-to-peer shopping platform based in Dubai.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shpper — Your Global Personal Shopper",
    description:
      "Buy products from anywhere in the world, delivered by real travelers. A peer-to-peer shopping platform based in Dubai.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
