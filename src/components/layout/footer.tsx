import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/shared/container";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";
import { Separator } from "@/components/ui/separator";
import { InstagramIcon, YoutubeIcon, TikTokIcon } from "@/components/shared/social-icons";

const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/shpperapp/", icon: InstagramIcon, label: "Instagram" },
  { href: "https://www.youtube.com/@shpperNET", icon: YoutubeIcon, label: "YouTube" },
  { href: "https://www.tiktok.com/@shppernet", icon: TikTokIcon, label: "TikTok" },
];

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/brand/logo-white.png"
              alt="Shpper"
              width={120}
              height={36}
              className="h-9 w-auto"
              sizes="120px"
            />
            <p className="text-sm text-primary-foreground/70">{t("description")}</p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 transition-colors hover:text-secondary"
                  aria-label={social.label}
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Service */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              {t("service")}
            </h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">
                {t("home")}
              </Link>
              <Link href="/about" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">
                {t("about")}
              </Link>
              <Link href="/contact" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">
                {t("contact")}
              </Link>
            </nav>
          </div>

          {/* Resources + Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              {t("resources")}
            </h3>
            <nav className="flex flex-col gap-3">
              <Link href="/faq" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">
                {t("faq")}
              </Link>
            </nav>
            <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              {t("legal")}
            </h3>
            <nav className="flex flex-col gap-3">
              <Link href="/legal/privacy-policy" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">
                {t("privacyPolicy")}
              </Link>
              <Link href="/legal/cookie-policy" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">
                {t("cookiePolicy")}
              </Link>
              <Link href="/legal/terms-conditions" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">
                {t("termsConditions")}
              </Link>
            </nav>
          </div>

          {/* Download */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              {t("downloadApp")}
            </h3>
            <AppStoreButtons />
            <div className="mt-6">
              <Image
                src="/images/misc/payment-icons.png"
                alt="Accepted payment methods"
                width={240}
                height={32}
                className="h-8 w-auto opacity-70"
                sizes="240px"
              />
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        <p className="text-center text-sm text-primary-foreground/50">
          {t("copyright", { year: year.toString() })}
        </p>
      </Container>
    </footer>
  );
}
