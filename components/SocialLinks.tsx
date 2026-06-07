"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const iconMap: Record<(typeof siteConfig.social)[number]["icon"], LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

type SocialLinksProps = {
  compact?: boolean;
};

export default function SocialLinks({ compact = false }: SocialLinksProps) {
  const links = (
    <div
      className={[
        "flex flex-wrap items-center gap-3",
        compact ? "justify-center lg:justify-start" : "justify-center",
      ].join(" ")}
    >
      {siteConfig.social.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className={[
              "focus-ring group inline-flex items-center justify-center rounded-lg border border-brand-primary/15 bg-white text-brand-secondary shadow-card transition hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-primary hover:text-white",
              compact ? "h-10 w-10" : "h-12 w-12",
            ].join(" ")}
          >
            <Icon size={compact ? 18 : 20} strokeWidth={2.2} />
          </Link>
        );
      })}
    </div>
  );

  if (compact) {
    return links;
  }

  return (
    <section className="bg-brand-mist py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase text-brand-primary">
            Social
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-normal text-brand-secondary sm:text-5xl">
            Connect with Heuvia
          </h2>
          <div className="mt-9">{links}</div>
        </motion.div>
      </div>
    </section>
  );
}
