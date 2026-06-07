import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(13,27,61,0.08)] bg-[#f9f9f9] px-0 pb-12 pt-24">
      <div className="container-page">
        <div className="mb-16 grid grid-cols-1 gap-10 text-center md:grid-cols-4 md:text-left lg:grid-cols-6">
          <div className="md:col-span-4 lg:col-span-2">
            <Link
              href={siteConfig.links.website}
              className="focus-ring mb-6 inline-flex items-center justify-center gap-3 rounded-lg lg:justify-start"
            >
              <Image
                src="/logo.svg"
                alt="Heuvia logo"
                width={34}
                height={34}
                className="rounded-[4px]"
              />
              <span className="text-[32px] font-bold leading-none tracking-normal text-[#1a1c1c]">
                Heuvia
              </span>
            </Link>
            <p className="mx-auto mb-8 max-w-xs text-sm leading-[1.6] text-[#4c4354] lg:mx-0">
              © 2026 Heuvia LMS. Engineered for excellence. The
              next-generation platform for digital education.
            </p>
            <SocialLinks compact />
          </div>

          {siteConfig.footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-6 font-bold text-[#1a1c1c]">{group.title}</h4>
              <ul className="space-y-4 text-sm text-[#4c4354]">
                {group.links.map((item) => (
                  <li key={`${group.title}-${item.label}`}>
                    <Link
                      href={item.href}
                      className="transition hover:text-[#6e00c1]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[rgba(13,27,61,0.08)] pt-8 md:flex-row">
          <p className="text-center text-xs text-[#7e7386] md:text-left">
            © 2026 Heuvia. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#7e7386] md:justify-end">
            <Link href={siteConfig.links.website} className="hover:text-[#6e00c1]">
              Website
            </Link>
            <Link href={siteConfig.links.webApp} className="hover:text-[#6e00c1]">
              Web App
            </Link>
            <Link
              href={siteConfig.links.supportMailto}
              className="hover:text-[#6e00c1]"
            >
              {siteConfig.links.supportEmail}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
