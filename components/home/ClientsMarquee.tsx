"use client";

export function ClientsMarquee({ logos }: { logos: string[] }) {
  const loop = [...logos, ...logos];

  return (
    <div className="relative mt-10 overflow-hidden rounded-3xl border border-midnight/10 py-2 dark:border-white/10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f4f6ff] to-transparent dark:from-midnight" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f4f6ff] to-transparent dark:from-midnight" />
      <div className="flex w-max gap-12 py-4 pl-8 animate-marquee">
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap rounded-full border border-midnight/10 bg-white/70 px-6 py-2 text-sm font-semibold text-page-muted shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
