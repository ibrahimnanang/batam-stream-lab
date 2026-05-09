"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ServiceGrid({
  items,
}: {
  items: { title: string; desc: string }[];
}) {
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <motion.article
          key={item.title}
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.45, delay: reduce ? 0 : i * 0.05 }}
          whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.35 } }}
          className="group gradient-border-mask h-full"
        >
          <div className="inner glass-panel relative h-full overflow-hidden p-6">
            <motion.div
              className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-stream-violet/20 blur-2xl transition group-hover:bg-stream-blue/25"
              layout
            />
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-stream-violet/80 to-transparent opacity-0 transition group-hover:opacity-100" />
            <h3 className="relative font-display text-lg font-semibold text-page-fg">{item.title}</h3>
            <p className="relative mt-3 text-sm leading-relaxed text-page-muted">{item.desc}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
