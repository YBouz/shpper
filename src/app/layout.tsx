import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Shpper — Your Global Personal Shopper",
    template: "%s | Shpper",
  },
  description:
    "Experience personalized global shopping with Shpper. Connect with travelers worldwide and access unique products seamlessly.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://shpper.com"
  ),
  openGraph: {
    type: "website",
    siteName: "Shpper",
    locale: "en",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
