"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "./site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/80 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl"
          onClick={() => setOpen(false)}
        >
          <span className="text-brand-orange">{site.name.split(" ")[0]}</span>
          <span className="text-neutral-400"> {site.name.split(" ").slice(1).join(" ")}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex md:gap-0.5" aria-label="Utama">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active ? "bg-white/10 text-brand-orange" : "text-neutral-400 hover:bg-white/5 hover:text-white"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex rounded-lg border border-neutral-700 p-2 text-neutral-300 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-neutral-800 bg-surface px-4 py-4 md:hidden"
          role="dialog"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-lg px-3 py-3 text-neutral-300 hover:bg-white/5 hover:text-brand-orange"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
