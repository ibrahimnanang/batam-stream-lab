"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

function easeOutCubic(t: number) {
  const p = 1 - Math.max(0, Math.min(1, t));
  return 1 - p * p * p;
}

function CountUp({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? target : 0);

  useEffect(() => {
    if (reduce) {
      setN(target);
      return;
    }
    let cancelled = false;
    const started = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      if (cancelled) return;
      const progress = easeOutCubic((now - started) / duration);
      setN(Math.round(target * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [reduce, target]);

  return (
    <>
      {n}
      {suffix}
    </>
  );
}

function StatHeading({ value }: { value: string }) {
  const reduce = useReducedMotion();

  const m = /^(\d+)(%)$/.exec(value);
  if (m) {
    return (
      <span className="font-display text-4xl font-bold text-page-fg">
        <CountUp target={Number(m[1])} suffix="%" />
      </span>
    );
  }

  if (/^\d+$/.test(value) && !/^\d{4}$/.test(value)) {
    const n = Number(value);
    return (
      <span className="font-display text-4xl font-bold text-page-fg">
        {reduce ? value : <CountUp target={n} />}
      </span>
    );
  }

  return <span className="font-display text-4xl font-bold text-page-fg">{value}</span>;
}

export function AnimatedStats({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-4 sm:max-w-none">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel rounded-2xl p-5 text-center"
        >
          <StatHeading value={s.value} />
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-page-muted">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
