"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X as CloseIcon } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-[rgba(13,27,61,0.08)] bg-white/70 shadow-sm backdrop-blur-md">
      <nav
        className="container-page flex h-20 items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link
          href={siteConfig.links.website}
          className="focus-ring flex items-center gap-3 rounded-lg"
        >
          <Image
            src="/logo.svg"
            alt="Heuvia logo"
            width={40}
            height={40}
            priority
            className="rounded-[4px]"
          />
          <span className="text-[32px] font-bold leading-none tracking-normal text-[#1a1c1c]">
            Heuvia
          </span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {siteConfig.nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "focus-ring rounded-sm py-1 text-sm font-semibold transition",
                index === 0
                  ? "border-b-2 border-brand-primary text-brand-primary"
                  : "text-[#4c4354] hover:text-brand-primary",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={siteConfig.links.webApp}
            className="focus-ring rounded-lg px-4 py-2.5 text-sm font-semibold text-[#4c4354] transition hover:text-brand-primary"
          >
            Login
          </Link>
          <Link
            href={siteConfig.links.webApp}
            className="focus-ring inline-flex items-center rounded-lg bg-brand-primary px-6 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(110,0,193,0.25)] transition hover:scale-105 active:scale-95"
          >
            Open Platform
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[rgba(13,27,61,0.12)] text-brand-secondary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon size={21} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-brand-primary/10 bg-white lg:hidden">
          <div className="container-page grid gap-2 py-5">
            {siteConfig.nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-lg px-3 py-3 text-sm font-semibold transition hover:bg-brand-soft hover:text-brand-primary",
                  index === 0 ? "text-brand-primary" : "text-brand-secondary/78",
                ].join(" ")}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link
                href={siteConfig.links.webApp}
                className="rounded-lg border border-brand-primary/15 px-4 py-3 text-center text-sm font-bold text-brand-secondary"
              >
                Login
              </Link>
              <Link
                href={siteConfig.links.webApp}
                className="rounded-lg bg-brand-primary px-4 py-3 text-center text-sm font-bold text-white"
              >
                Open Platform
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
