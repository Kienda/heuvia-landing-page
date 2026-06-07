"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function StatsSection() {
  return (
    <section className="bg-[#f9f9f9] py-28 sm:py-32">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-12">
          {siteConfig.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold leading-none tracking-normal text-[#6e00c1] lg:text-5xl">
                {stat.value}
              </div>
              <p className="text-xs font-semibold uppercase tracking-normal text-[#4c4354]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
