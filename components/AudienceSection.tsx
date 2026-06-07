"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const toneStyles = {
  primary: {
    pill: "bg-[#efdbff] text-[#6e00c1]",
    checkWrap: "bg-[#6e00c1]/10",
    check: "text-[#6e00c1]",
    overlay: "from-[#6e00c1]/20 to-[#515d83]/10",
  },
  secondary: {
    pill: "bg-[#dae1ff] text-[#39466a]",
    checkWrap: "bg-[#515d83]/10",
    check: "text-[#515d83]",
    overlay: "from-[#515d83]/20 to-[#6e00c1]/10",
  },
  tertiary: {
    pill: "bg-[#ffdcbf] text-[#6a3b00]",
    checkWrap: "bg-[#713f00]/10",
    check: "text-[#713f00]",
    overlay: "from-[#713f00]/18 to-[#6e00c1]/10",
  },
} as const;

export default function AudienceSection() {
  return (
    <section id="solutions" className="overflow-hidden bg-[#f9f9f9] py-28 sm:py-32">
      <div className="container-page space-y-28 lg:space-y-32">
        {siteConfig.audiences.map((audience, index) => {
          const tone = toneStyles[audience.tone];
          const reverse = "reverse" in audience && audience.reverse;

          return (
            <div
              key={audience.label}
              className="grid items-center gap-12 md:grid-cols-2 lg:gap-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={reverse ? "md:order-2" : undefined}
              >
                <span
                  className={[
                    "mb-6 inline-block rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-normal",
                    tone.pill,
                  ].join(" ")}
                >
                  {audience.label}
                </span>
                <h2 className="mb-7 text-[32px] font-semibold leading-[1.28] tracking-normal text-[#1a1c1c]">
                  {audience.title}
                </h2>
                <ul className="space-y-6">
                  {audience.bullets.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <div
                        className={[
                          "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                          tone.checkWrap,
                        ].join(" ")}
                      >
                        <Check size={15} strokeWidth={2.4} className={tone.check} />
                      </div>
                      <div>
                        <p className="font-semibold leading-6 text-[#1a1c1c]">
                          {item.title}
                        </p>
                        <p className="text-sm leading-[1.45] text-[#4c4354]">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "glass-card relative aspect-video overflow-hidden rounded-3xl shadow-[0_28px_70px_rgba(13,27,61,0.16)]",
                  reverse ? "md:order-1" : undefined,
                ].join(" ")}
              >
                <Image
                  src={audience.image}
                  alt={`${audience.label} using Heuvia`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-[0.72]"
                />
                <div
                  className={[
                    "absolute inset-0 bg-gradient-to-br mix-blend-overlay",
                    tone.overlay,
                  ].join(" ")}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
