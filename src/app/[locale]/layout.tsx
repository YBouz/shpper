import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { DM_Sans, Tajawal } from "next/font/google";
import { routing, RTL_LOCALES } from "@/i18n/routing";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "sonner";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isRtl = RTL_LOCALES.includes(locale);
  const fontClass = isRtl ? tajawal.variable : dmSans.variable;

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"} className="h-full">
      <body
        className={`${fontClass} font-sans min-h-full flex flex-col antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position={isRtl ? "bottom-left" : "bottom-right"} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
