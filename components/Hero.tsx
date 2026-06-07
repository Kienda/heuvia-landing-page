"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Smartphone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f9f9f9] px-0 pb-28 pt-24 sm:pb-32 lg:pb-36 lg:pt-28"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[590px]"
        >
          <h1 className="text-[40px] font-bold leading-[1.16] tracking-normal text-[#1a1c1c] sm:text-[54px] lg:text-[64px] lg:leading-[1.09]">
            Learning Made Simple.{" "}
            <span className="text-[#6e00c1]">
              Education Made Powerful.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-[1.62] text-[#4c4354]">
            Empowering students, professors, and institutions with a seamless,
            elite learning management experience. Engineered for excellence,
            built for growth.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={siteConfig.links.webApp}
              className="focus-ring inline-flex items-center justify-center rounded-xl bg-[#6e00c1] px-8 py-4 text-sm font-bold text-white shadow-[0_18px_34px_rgba(110,0,193,0.22)] transition hover:scale-105 active:scale-95"
            >
              Open Web App
            </Link>
            <div className="flex gap-4">
              <Link
                href={siteConfig.links.android}
                className="glass-card focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold text-[#4c4354] transition hover:bg-[#eeeeee]"
              >
                <Play size={18} fill="currentColor" />
                Android
              </Link>
              <Link
                href={siteConfig.links.ios}
                className="glass-card focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold text-[#4c4354] transition hover:bg-[#eeeeee]"
              >
                <Smartphone size={18} />
                iPhone
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute left-1/2 top-1/2 -z-10 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(138,43,226,0.16),rgba(255,255,255,0)_66%)] blur-3xl" />
          <Image
            src="/hero-showcase.png"
            alt="Heuvia platform dashboard preview"
            width={1024}
            height={576}
            priority
            className="w-full rounded-2xl border border-[rgba(13,27,61,0.08)] shadow-[0_28px_70px_rgba(13,27,61,0.12)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
