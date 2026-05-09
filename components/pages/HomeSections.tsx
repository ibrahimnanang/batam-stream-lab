import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { AnimatedStats } from "@/components/home/AnimatedStats";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomeHero } from "@/components/home/HomeHero";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { getDictionary } from "@/lib/i18n";

/** Placeholder client names — unrelated to legacy Lumen / LED solar profile repos. */
const clientLogos = ["Astra Media", "Harbor Expo", "Studio Khatulistiwa", "Kepri Live", "Signalworks", "Citra Stage", "Orbit Events", "Batam Horizon"];

export async function HomeSections() {
  const dict = await getDictionary();
  const h = dict.home;

  return (
    <>
      <HomeHero headline={h.hero.headline} sub={h.hero.sub} ctaPrimary={h.hero.ctaPrimary} ctaSecondary={h.hero.ctaSecondary} />

      <section className="border-t border-midnight/10 py-16 dark:border-white/10 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stream-blue">{h.services.title}</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-page-fg sm:text-4xl">{h.services.subtitle}</h2>
          </FadeUp>
          <div className="mt-12">
            <ServiceGrid items={h.services.items} />
          </div>
        </div>
      </section>

      <section className="border-t border-midnight/10 bg-midnight-raised/35 py-16 dark:border-white/10 dark:bg-midnight-raised/20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-page-fg sm:text-4xl">{h.why.title}</h2>
            <p className="mt-3 text-lg text-page-muted">{h.why.subtitle}</p>
          </FadeUp>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr,auto] lg:items-start">
            <Stagger className="grid gap-5 sm:grid-cols-2">
              {h.why.points.map((p) => (
                <StaggerItem key={p.title}>
                  <article className="gradient-border-mask h-full">
                    <div className="inner glass-panel relative overflow-hidden p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-stream-violet/10 via-transparent to-stream-blue/5" />
                      <div className="relative">
                        <h3 className="font-display text-lg font-semibold text-page-fg">{p.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-page-muted">{p.body}</p>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
            <AnimatedStats stats={h.why.stats} />
          </div>
        </div>
      </section>

      <FeaturedProjects title={h.projects.title} subtitle={h.projects.subtitle} slides={h.projects.slides} />

      <section className="border-t border-midnight/10 py-16 dark:border-white/10 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center">
            <h2 className="font-display text-3xl font-bold text-page-fg sm:text-4xl">{h.clients.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-page-muted">{h.clients.subtitle}</p>
          </FadeUp>
        </div>
        <ClientsMarquee logos={clientLogos} />
      </section>

      <section className="border-t border-midnight/10 pb-16 dark:border-white/10 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl border border-stream-violet/30 bg-gradient-to-br from-stream-violet/25 via-midnight-card to-stream-indigo/40 px-8 py-12 shadow-glow sm:px-12 sm:py-14">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-stream-blue/25 blur-3xl" />
              <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{h.cta.title}</h2>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-stream-indigo shadow-lg transition hover:bg-stream-orange hover:text-white"
                >
                  {h.cta.button}
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
