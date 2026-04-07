"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/shared/social-icons";

const CONTACT_METHODS = [
  {
    key: "whatsapp",
    icon: MessageCircle,
    value: "+971 50 190 2914",
    href: "https://wa.me/+971501902914",
  },
  {
    key: "email",
    icon: Mail,
    value: "info@shpper.com",
    href: "mailto:info@shpper.com",
  },
  {
    key: "address",
    icon: MapPin,
    valueKey: "addressValue",
    href: null,
  },
] as const;

const SOCIALS = [
  { href: "https://www.instagram.com/shpperapp/", icon: InstagramIcon, label: "Instagram" },
  { href: "https://www.youtube.com/@shpperNET", icon: YoutubeIcon, label: "YouTube" },
];

export function ContactContent() {
  const t = useTranslations("Contact");

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 text-primary-foreground sm:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              {t("subtitle")}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold">{t("description")}</h2>
              <form className="mt-8 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">{t("nameLabel")}</Label>
                  <Input id="name" type="text" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">{t("emailLabel")}</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="subject">{t("subjectLabel")}</Label>
                  <Input id="subject" type="text" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">{t("messageLabel")}</Label>
                  <Textarea id="message" rows={5} required />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  <Send className="me-2 size-4" />
                  {t("sendButton")}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-8"
            >
              {CONTACT_METHODS.map((method) => (
                <div key={method.key} className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <method.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t(method.key)}</h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.key === "whatsapp" ? "_blank" : undefined}
                        rel={method.key === "whatsapp" ? "noopener noreferrer" : undefined}
                        className="mt-1 text-muted-foreground transition-colors hover:text-secondary"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-muted-foreground">
                        {t(method.valueKey)}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="mt-4">
                <h3 className="mb-4 font-semibold">{t("followUs")}</h3>
                <div className="flex gap-4">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-12 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label={social.label}
                    >
                      <social.icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
