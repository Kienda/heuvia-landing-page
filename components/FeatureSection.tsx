"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BellRing,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  MessageSquareText,
  Star,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const iconMap: Record<(typeof siteConfig.features)[number]["icon"], LucideIcon> = {
  courses: GraduationCap,
  assignments: ClipboardList,
  grading: Star,
  schedule: CalendarDays,
  messaging: MessageSquareText,
  alerts: BellRing,
};

const iconTone: Record<(typeof siteConfig.features)[number]["icon"], string> = {
  courses: "bg-[#6e00c1]/10 text-[#6e00c1]",
  assignments: "bg-[#515d83]/10 text-[#515d83]",
  grading: "bg-[#935400]/10 text-[#935400]",
  schedule: "bg-[#6e00c1]/10 text-[#6e00c1]",
  messaging: "bg-[#dae1ff] text-[#4e5a80]",
  alerts: "bg-[#ba1a1a]/10 text-[#ba1a1a]",
};

export default function FeatureSection() {
  return (
    <section id="features" className="bg-[#f3f3f3] py-28 sm:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-[32px] font-semibold leading-[1.28] tracking-normal text-[#1a1c1c]">
            Centralized Command for Modern Education
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-[1.6] text-[#4c4354]">
            All your educational tools in one fluid interface. Designed to
            minimize friction and maximize productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[200px]">
          {siteConfig.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const isFeatured = "featured" in feature && feature.featured;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "glass-card group cursor-pointer rounded-2xl p-8 transition hover:border-[#6e00c1]/30",
                  isFeatured
                    ? "flex min-h-[340px] flex-col justify-between md:col-span-2 lg:row-span-2"
                    : feature.icon === "messaging"
                      ? "flex min-h-[180px] items-center gap-6 lg:col-span-2"
                      : "flex min-h-[180px] flex-col justify-between",
                ].join(" ")}
              >
                {isFeatured ? (
                  <>
                    <div className="flex items-start justify-between">
                      <div
                        className={[
                          "flex h-14 w-14 items-center justify-center rounded-xl",
                          iconTone[feature.icon],
                        ].join(" ")}
                      >
                        <Icon size={28} strokeWidth={2} />
                      </div>
                      <ArrowUpRight
                        size={24}
                        className="text-[#4c4354] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-normal text-[#1a1c1c]">
                        {feature.title}
                      </h3>
                      <p className="mt-3 max-w-[470px] text-base leading-[1.5] text-[#4c4354]">
                        {feature.description}
                      </p>
                    </div>
                  </>
                ) : feature.icon === "messaging" ? (
                  <>
                    <div
                      className={[
                        "flex h-14 w-14 shrink-0 items-center justify-center rounded-full",
                        iconTone[feature.icon],
                      ].join(" ")}
                    >
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium tracking-normal text-[#1a1c1c]">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm leading-[1.5] text-[#4c4354]">
                        {feature.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={[
                        "flex h-11 w-11 items-center justify-center rounded-lg",
                        iconTone[feature.icon],
                      ].join(" ")}
                    >
                      <Icon size={21} strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-medium tracking-normal text-[#1a1c1c]">
                      {feature.title}
                    </h3>
                  </>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
