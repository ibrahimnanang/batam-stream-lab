"use client";

import { localeCookieName, type Locale } from "@/lib/i18n";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function LanguageSwitcher({
  locale,
  enLabel,
  idLabel,
}: {
  locale: Locale;
  enLabel: string;
  idLabel: string;
}) {
  const router = useRouter();

  const setLocale = (next: Locale) => {
    if (next === locale) return;
    document.cookie = `${localeCookieName()}=${next};path=/;max-age=31536000;SameSite=Lax`;
    router.refresh();
  };

  const btn =
    "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition sm:text-sm";

  return (
    <div
      className="flex rounded-xl border border-midnight/10 bg-white/5 p-1 dark:border-white/10 dark:bg-white/[0.04]"
      role="group"
      aria-label="Language"
    >
      <motion.button
        type="button"
        onClick={() => setLocale("en")}
        className={`${btn} ${locale === "en" ? "bg-stream-violet/25 text-white shadow-glow-sm" : "text-page-muted hover:text-page-fg"}`}
        whileTap={{ scale: 0.97 }}
      >
        <span aria-hidden>🇬🇧</span>
        {enLabel}
      </motion.button>
      <motion.button
        type="button"
        onClick={() => setLocale("id")}
        className={`${btn} ${locale === "id" ? "bg-stream-violet/25 text-white shadow-glow-sm" : "text-page-muted hover:text-page-fg"}`}
        whileTap={{ scale: 0.97 }}
      >
        <span aria-hidden>🇮🇩</span>
        {idLabel}
      </motion.button>
    </div>
  );
}
