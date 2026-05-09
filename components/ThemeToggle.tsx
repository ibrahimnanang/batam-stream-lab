"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({ lightLabel, darkLabel, srLabel }: { lightLabel: string; darkLabel: string; srLabel: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = (resolvedTheme ?? theme) !== "light";

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-midnight/10 bg-white/5 text-page-fg dark:border-white/10 dark:bg-white/[0.04]"
      aria-label={`${srLabel}: ${mounted ? (isDark ? lightLabel : darkLabel) : ""}`}
    >
      {mounted ? (
        isDark ? (
          <span className="text-lg" aria-hidden>
            ☀
          </span>
        ) : (
          <span className="text-lg" aria-hidden>
            ☾
          </span>
        )
      ) : (
        <span className="h-4 w-4 rounded-full bg-page-muted/40" />
      )}
    </motion.button>
  );
}
