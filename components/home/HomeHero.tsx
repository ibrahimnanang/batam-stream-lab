"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

function Particles({ count = 28 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;

  const items = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(Math.sin(i * 1.7) * 37 + 50).toFixed(1)}%`,
    top: `${(Math.cos(i * 1.3) * 40 + 50).toFixed(1)}%`,
    duration: 4 + (i % 5),
    delay: (i % 7) * 0.35,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((p) => (
        <motion.span
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-stream-blue/50"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.9, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function HomeHero({
  headline,
  sub,
  ctaPrimary,
  ctaSecondary,
}: {
  headline: string;
  sub: string;
  ctaPrimary: string;
  ctaSecondary: string;
}) {
  const reduce = useReducedMotion();
  const [videoVisible, setVideoVisible] = useState(true);

  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-hero-mesh">
      <div className="pointer-events-none absolute inset-0 scanline-overlay opacity-70" />

      {/* 
        PLACE YOUR HERO VIDEO HERE
        /public/videos/hero.mp4
      */}
      {videoVisible ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-45 dark:opacity-40"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoVisible(false)}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-b from-midnight-deep/40 via-midnight-deep/80 to-midnight-deep dark:from-midnight-deep/60 dark:via-midnight-deep/92 dark:to-midnight-deep" />

      <motion.div
        className="pointer-events-none absolute -left-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-stream-violet/25 blur-[120px]"
        animate={reduce ? undefined : { scale: [1, 1.08, 1], rotate: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 right-0 h-[360px] w-[360px] rounded-full bg-stream-blue/14 blur-[100px]"
        animate={reduce ? undefined : { y: [0, -26, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <GlowLines reduce={reduce} />

      <Particles />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <motion.p
          className="text-sm font-semibold uppercase tracking-[0.35em] text-stream-blue"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Batam Stream Lab
        </motion.p>
        <motion.h1
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-balance text-white sm:text-5xl lg:text-[3.35rem]"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {headline}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200/85"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          {sub}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/products"
            className="rounded-full bg-gradient-to-r from-stream-violet to-stream-indigo px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
          >
            {ctaPrimary}
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/25 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-stream-blue/70 hover:bg-white/10"
          >
            {ctaSecondary}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function GlowLines({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <motion.div
        className="absolute left-[6%] top-[38%] h-px w-[min(68vw,720px)] origin-left bg-gradient-to-r from-transparent via-stream-blue/90 to-transparent"
        initial={reduce ? false : { scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.85 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute left-[12%] top-[68%] h-px w-[min(58vw,600px)] origin-left bg-gradient-to-r from-stream-violet/30 via-stream-orange/80 to-transparent"
        initial={reduce ? false : { scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.65 }}
        transition={{ duration: 1.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
