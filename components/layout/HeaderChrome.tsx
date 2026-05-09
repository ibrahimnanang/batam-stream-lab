"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n.shared";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";

type Lang = { enShort: string; idShort: string };
type ThemeDict = { light: string; dark: string; toggle: string };
type A11y = { openMenu: string; closeMenu: string; mainNav: string; mobileNav: string };

export function HeaderChrome({
  brand,
  links,
  locale,
  lang,
  theme,
  accessibility,
}: {
  brand: ReactNode;
  links: { href: string; label: string }[];
  locale: Locale;
  lang: Lang;
  theme: ThemeDict;
  accessibility: A11y;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-[100] border-b transition-colors duration-300 ${
        scrolled
          ? "border-midnight/10 bg-white/85 shadow-lg shadow-stream-violet/5 dark:border-white/10 dark:bg-midnight/75"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">{brand}</div>

        <nav aria-label={accessibility.mainNav} className="hidden flex-1 justify-center md:flex md:gap-1">
          {links.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-stream-violet/20 text-page-fg shadow-glow-sm"
                    : "text-page-muted hover:bg-white/5 hover:text-page-fg"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher locale={locale} enLabel={lang.enShort} idLabel={lang.idShort} />
          </div>
          <ThemeToggle lightLabel={theme.light} darkLabel={theme.dark} srLabel={theme.toggle} />
          <button
            type="button"
            className="inline-flex rounded-xl border border-midnight/10 p-2 text-page-fg dark:border-white/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? accessibility.closeMenu : accessibility.openMenu}</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-midnight/10 bg-white/95 dark:border-white/10 dark:bg-midnight/95 md:hidden"
          role="dialog"
        >
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label={accessibility.mobileNav}>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-page-muted transition hover:bg-stream-violet/10 hover:text-page-fg"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher locale={locale} enLabel={lang.enShort} idLabel={lang.idShort} />
            </div>
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
}
