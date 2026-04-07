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
    "Experience personalized global shopping with Shpper. Connect with travelers worldwide and access unique products seamlessly.",
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
      "Connect with travelers worldwide. Access unique products from anywhere through a simple, modern, and trustworthy experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shpper — Your Global Personal Shopper",
    description:
      "Connect with travelers worldwide. Access unique products seamlessly.",
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
