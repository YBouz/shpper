"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, Globe, ChevronDown } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-lg">
      <Container>
        <div className="flex h-18 items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/brand/logo-yellow.png"
              alt="Shpper"
              width={140}
              height={44}
              className="h-11 w-auto"
              sizes="140px"
              priority
            />
          </Link>

          {/* Desktop Nav — centered */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground"
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
              className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
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
            <SheetTrigger className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted lg:hidden">
              <Menu className="size-5" />
              <span className="sr-only">{t("menu")}</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetTitle className="sr-only">{t("menu")}</SheetTitle>
              <div className="flex flex-col gap-2 pt-8">
                <Image
                  src="/images/brand/logo-yellow.png"
                  alt="Shpper"
                  width={120}
                  height={38}
                  className="mb-6 ms-4 h-10 w-auto"
                  sizes="120px"
                />
                <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.key}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  ))}
                </nav>
                <div className="mt-4 flex flex-col gap-3 px-4">
                  <button
                    onClick={() => {
                      switchLocale();
                      setOpen(false);
                    }}
                    className="flex items-center gap-2 rounded-xl py-2.5 text-sm font-medium text-foreground/70"
                  >
                    <Globe className="size-4" />
                    {locale === "en" ? "العربية" : "English"}
                  </button>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.shpper.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-secondary text-base font-semibold text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/90"
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
