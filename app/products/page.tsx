import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { getDictionary } from "@/lib/i18n";

export default async function ProductsPage() {
  const dict = await getDictionary();
  const p = dict.products;

  return (
    <div>
      <section className="border-b border-midnight/10 bg-hero-mesh py-14 dark:border-white/10 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">{p.header.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300/90">{p.header.subtitle}</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
          {p.detail.map((block, index) => (
            <FadeUp key={block.title} delay={(index % 4) * 0.04}>
              <article className="gradient-border-mask">
                <div className="inner glass-panel relative overflow-hidden p-6 sm:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,rgba(124,58,237,0.12),transparent_45%)]" />
                  <div className="relative flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-stream-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-2 font-display text-2xl font-semibold text-page-fg">{block.title}</h2>
                    </div>
                    <ul className="mt-4 max-w-md space-y-2 text-page-muted lg:mt-8">
                      {block.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm leading-relaxed sm:text-base">
                          <span className="text-stream-blue">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="border-y border-midnight/10 bg-midnight-card/25 py-16 dark:border-white/10 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold text-page-fg sm:text-4xl">{p.workflow.title}</h2>
          </FadeUp>
          <div className="relative mt-12">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-stream-violet via-stream-blue to-stream-orange md:block" />
            <Stagger className="space-y-8">
              {p.workflow.steps.map((step, i) => (
                <StaggerItem key={step.title}>
                  <div className="relative flex flex-col gap-3 md:flex-row md:gap-10">
                    <div className="flex items-center gap-4 md:w-48 md:shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stream-violet/40 bg-stream-violet/15 text-sm font-bold text-stream-violet">
                        {i + 1}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-page-fg md:hidden">{step.title}</h3>
                    </div>
                    <div className="glass-panel flex-1 rounded-2xl p-5 md:p-6">
                      <h3 className="hidden font-display text-lg font-semibold text-page-fg md:block">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-page-muted md:mt-1">{step.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-stream-blue/25 bg-gradient-to-br from-stream-blue/10 via-midnight-card to-midnight-raised p-8 sm:flex-row sm:items-center sm:p-10">
              <h2 className="font-display text-2xl font-bold text-page-fg sm:text-3xl">{p.cta.title}</h2>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-gradient-to-r from-stream-violet to-stream-indigo px-8 py-3 text-sm font-semibold text-white shadow-glow"
              >
                {p.cta.button}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
