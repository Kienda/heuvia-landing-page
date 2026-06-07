"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Rocket } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function CTASection() {
  return (
    <section className="relative bg-[#f9f9f9] px-0 py-28 text-center sm:py-32">
      <div className="absolute inset-0 bg-[#6e00c1]/5" />
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="container-page relative mx-auto max-w-3xl"
      >
        <h2 className="text-[40px] font-bold leading-[1.18] tracking-normal md:text-5xl">
          Ready to Transform Learning?
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.6] text-[#4c4354]">
          Join high-achieving institutions and individuals who have already
          leveled up their educational experience.
        </p>
        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
          <Link
            href={siteConfig.links.webApp}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl bg-[#6e00c1] px-10 py-5 text-base font-bold text-white shadow-[0_24px_46px_rgba(110,0,193,0.3)] transition hover:scale-105 active:scale-95"
          >
            <Rocket size={19} />
            Launch Heuvia Web
          </Link>
          <Link
            href={siteConfig.links.android}
            className="glass-card focus-ring inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-5 text-base font-bold text-[#1a1c1c] transition hover:bg-[#eeeeee]"
          >
            <Download size={19} />
            Download Mobile
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
