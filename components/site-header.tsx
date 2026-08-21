"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HearthMark } from "./hearth-mark";
import { STEAM_URL } from "@/lib/site";

const NAV = [
  { href: "/guide/", label: "Guide" },
  { href: "/tips/", label: "Tips" },
  { href: "/layout/", label: "Layout" },
  { href: "/tech-tree/", label: "Tech Tree" },
  { href: "/buildings/", label: "Buildings" },
  { href: "/best-settings/", label: "Settings" },
  { href: "/save-file-location/", label: "Saves" },
  { href: "/codes/", label: "Codes" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand">
          <HearthMark />
          <span>
            Hearth <span style={{ color: "var(--ash)" }}>&amp;</span> Hamlet
            <small>Guide</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Guides">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="header-cta"
          href={STEAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Steam ↗
        </a>
      </div>
    </header>
  );
}
