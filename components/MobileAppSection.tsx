"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function MobileAppSection() {
  return (
    <section
      id="mobile-apps"
      className="overflow-hidden bg-[#0c1a3c] py-28 text-white sm:py-32"
    >
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[40px] font-bold leading-[1.16] tracking-normal sm:text-[54px] lg:text-[64px] lg:leading-[1.1]">
            Learn Anywhere.
          </h2>
          <p className="mt-8 max-w-lg text-[18px] leading-[1.6] text-[#dae1ff]">
            The classroom in your pocket. Syncs seamlessly across all your
            devices, giving you the freedom to learn on the train, in the park,
            or at the library.
          </p>
          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href={siteConfig.links.android}
              className="focus-ring inline-flex items-center gap-3 rounded-lg bg-white px-5 py-4 text-sm font-bold text-[#0c1a3c] transition hover:scale-105 active:scale-95"
            >
              <Play size={19} fill="currentColor" />
              Google Play
            </Link>
            <Link
              href={siteConfig.links.ios}
              className="focus-ring inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-5 py-4 text-sm font-bold text-white transition hover:scale-105 hover:bg-white/15 active:scale-95"
            >
              <Apple size={19} />
              App Store
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8a2be2]/20 blur-3xl" />
          <Image
            src="/mobile-demo.png"
            alt="Heuvia mobile app shown on two phones"
            width={1024}
            height={768}
            className="mx-auto w-full max-w-[540px] rounded-sm drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
