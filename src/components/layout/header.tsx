"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, Globe } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Container } from "@/components/shared/container";

const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/faq", key: "faq" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const switchLocale = () => {
    const next = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: next });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur-lg">
      <Container>
        <div className="flex h-18 items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/brand/logo-yellow.png"
              alt="Shpper"
              width={130}
              height={40}
              className="h-8 w-auto"
              sizes="130px"
              priority
              style={{ height: "auto", maxHeight: 32 }}
            />
          </Link>

          {/* Desktop Nav — centered */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-secondary text-secondary-foreground"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={switchLocale}
              className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Globe className="size-4" />
              {locale === "en" ? "العربية" : "EN"}
            </button>
            <a
              href="https://play.google.com/store/apps/details?id=com.shpper.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full bg-secondary px-6 text-sm font-semibold text-secondary-foreground shadow-sm transition-all hover:bg-secondary/90 hover:shadow-md"
            >
              {t("signup")}
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 lg:hidden">
              <Menu className="size-5" />
              <span className="sr-only">{t("menu")}</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 gap-0 border-white/10 bg-primary" showCloseButton={false}>
              <SheetTitle className="sr-only">{t("menu")}</SheetTitle>

              {/* Custom close button for dark bg */}
              <button
                onClick={() => setOpen(false)}
                className="absolute inset-e-3 top-3 flex size-9 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                <span className="sr-only">Close</span>
              </button>

              <div className="flex flex-col gap-2 pt-4">
                <Image
                  src="/images/brand/logo-yellow.png"
                  alt="Shpper"
                  width={120}
                  height={36}
                  className="mb-4 ms-4 w-24"
                  sizes="120px"
                  style={{ height: "auto" }}
                />
                <nav className="flex flex-col gap-1 px-2">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.key}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-secondary text-secondary-foreground"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  ))}
                </nav>
                <div className="mt-4 border-t border-white/10 px-4 pt-4">
                  <button
                    onClick={() => {
                      switchLocale();
                      setOpen(false);
                    }}
                    className="flex items-center gap-2 rounded-xl py-2.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
                  >
                    <Globe className="size-4" />
                    {locale === "en" ? "العربية" : "English"}
                  </button>
                </div>
                <div className="mt-auto px-4 pb-8">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.shpper.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-secondary text-base font-semibold text-secondary-foreground shadow-lg shadow-secondary/20 transition-colors hover:bg-secondary/90"
                  >
                    {t("signup")}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
