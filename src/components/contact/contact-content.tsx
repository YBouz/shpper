"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, MapPin, Send, Headphones } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/shared/social-icons";

const CONTACT_METHODS = [
  {
    key: "whatsapp",
    icon: MessageCircle,
    value: "+971 50 190 2914",
    href: "https://wa.me/+971501902914",
    color: "bg-green-500",
  },
  {
    key: "email",
    icon: Mail,
    value: "info@shpper.com",
    href: "mailto:info@shpper.com",
    color: "bg-blue-500",
  },
  {
    key: "address",
    icon: MapPin,
    valueKey: "addressValue",
    href: null,
    color: "bg-primary",
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
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
        <motion.div
          animate={{ x: [0, 15, -10, 0], y: [0, -20, 10, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute -inset-e-32 -top-32 size-100 rounded-full bg-secondary/8 blur-[100px]"
        />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.1 }}
              className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-secondary/20"
            >
              <Headphones className="size-8 text-secondary" />
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/60">
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
              <form
                className="mt-8 flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">{t("nameLabel")}</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      className="rounded-xl border-border bg-muted/50 transition-colors focus:bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">{t("emailLabel")}</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="rounded-xl border-border bg-muted/50 transition-colors focus:bg-background"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="subject">{t("subjectLabel")}</Label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    className="rounded-xl border-border bg-muted/50 transition-colors focus:bg-background"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">{t("messageLabel")}</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    required
                    className="rounded-xl border-border bg-muted/50 transition-colors focus:bg-background"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-secondary text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-colors hover:bg-secondary/90"
                >
                  <Send className="size-4" />
                  {t("sendButton")}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              {CONTACT_METHODS.map((method, index) => (
                <motion.div
                  key={method.key}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 transition-all hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5"
                >
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${method.color} text-white shadow-lg`}
                  >
                    <method.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t(method.key)}</h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.key === "whatsapp" ? "_blank" : undefined}
                        rel={
                          method.key === "whatsapp"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-1 text-sm text-muted-foreground transition-colors hover:text-secondary"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {t(method.valueKey)}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social */}
              <div className="mt-4 rounded-2xl border border-border bg-muted/30 p-6">
                <h3 className="mb-4 font-semibold">{t("followUs")}</h3>
                <div className="flex gap-3">
                  {SOCIALS.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex size-12 items-center justify-center rounded-2xl bg-background text-muted-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label={social.label}
                    >
                      <social.icon className="size-5" />
                    </motion.a>
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
