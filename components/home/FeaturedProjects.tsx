"use client";

import { motion, PanInfo, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const placeholders = [
  "https://picsum.photos/seed/batam-stream-1/1600/900",
  "https://picsum.photos/seed/batam-stream-2/1600/900",
  "https://picsum.photos/seed/batam-stream-3/1600/900",
  "https://picsum.photos/seed/batam-stream-4/1600/900",
  "https://picsum.photos/seed/batam-stream-5/1600/900",
];

export function FeaturedProjects({
  title,
  subtitle,
  slides,
}: {
  title: string;
  subtitle: string;
  slides: { title: string; category: string; desc: string }[];
}) {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const length = slides.length;

  const next = useCallback(() => setIdx((i) => (i + 1) % length), [length]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + length) % length), [length]);

  useEffect(() => {
    if (reduce || length <= 1) return;
    const id = window.setInterval(next, 6000);
    return () => clearInterval(id);
  }, [length, next, reduce]);

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) next();
    if (info.offset.x > 50) prev();
  };

  const s = slides[idx];
  const imgSrc = placeholders[idx % placeholders.length] ?? placeholders[0];

  return (
    <section className="border-t border-midnight/10 py-16 dark:border-white/10 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl font-bold text-page-fg sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-page-muted">{subtitle}</p>
        </motion.div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-midnight/10 bg-midnight-card/50 dark:border-white/10">
          <motion.div
            key={idx}
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.14}
            onDragEnd={onDragEnd}
            initial={reduce ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-0 md:grid-cols-2 md:gap-10 md:p-8"
          >
            <div className="relative aspect-video w-full overflow-hidden md:rounded-2xl">
              {/*
                PLACE YOUR PROJECT IMAGE URL HERE
                Aspect ratio recommended: 16:9
                Example:
                https://your-image-link.com/image.jpg
              */}
              <Image
                src={imgSrc}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx === 0}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-midnight-deep/80 via-transparent to-stream-violet/20" />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-0 md:py-6">
              <p className="text-xs font-bold uppercase tracking-widest text-stream-blue">{s?.category}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-page-fg sm:text-3xl">{s?.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-page-muted sm:text-base">{s?.desc}</p>
              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-full border border-midnight/15 px-4 py-2 text-sm font-medium text-page-fg dark:border-white/15"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full border border-midnight/15 px-4 py-2 text-sm font-medium text-page-fg dark:border-white/15"
                  aria-label="Next"
                >
                  →
                </button>
              </div>
              <div className="mt-4 flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIdx(i)}
                    className={`h-1 flex-1 max-w-[40px] rounded-full transition ${i === idx ? "bg-stream-violet" : "bg-page-muted/30"}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
