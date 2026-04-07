"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X, Globe } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/brand/logo-yellow.png"
              alt="Shpper"
              width={120}
              height={36}
              className="h-9 w-auto"
              sizes="120px"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={switchLocale}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Globe className="size-4" />
              {locale === "en" ? "العربية" : "English"}
            </button>
            <a
              href="https://apps.apple.com/us/app/shpper/id6450944256"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 items-center justify-center rounded-[min(var(--radius-md),12px)] border border-border bg-background px-2.5 text-[0.8rem] font-medium transition-colors hover:bg-muted hover:text-foreground"
            >
              {t("login")}
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.shpper.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 items-center justify-center rounded-[min(var(--radius-md),12px)] bg-secondary px-2.5 text-[0.8rem] font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
            >
              {t("signup")}
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-8 items-center justify-center rounded-lg transition-colors hover:bg-muted md:hidden"
            >
              <Menu className="size-5" />
              <span className="sr-only">{t("menu")}</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">{t("menu")}</SheetTitle>
              <div className="flex flex-col gap-6 pt-8">
                <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.key}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-muted ${
                        pathname === link.href
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 px-4">
                  <button
                    onClick={() => {
                      switchLocale();
                      setOpen(false);
                    }}
                    className="flex items-center gap-2 rounded-lg py-2 text-sm font-medium text-muted-foreground"
                  >
                    <Globe className="size-4" />
                    {locale === "en" ? "العربية" : "English"}
                  </button>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.shpper.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center rounded-lg bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
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
