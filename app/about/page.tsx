import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

const valueIcons = ["◆", "◎", "◇", "✦"];

export default async function AboutPage() {
  const dict = await getDictionary();
  const a = dict.about;

  return (
    <div>
      <section className="border-b border-midnight/10 bg-hero-mesh py-14 dark:border-white/10 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stream-blue">{site.name}</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">{a.intro.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300/90">{a.intro.body}</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 dark:border-white/10 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeUp>
            <h2 className="font-display text-2xl font-bold text-page-fg sm:text-3xl">{a.vision.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-stream-violet">{a.vision.statement}</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-display text-2xl font-bold text-page-fg sm:text-3xl">{a.mission.title}</h2>
            <ul className="mt-4 space-y-3 text-page-muted">
              {a.mission.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                  <span className="mt-1 text-stream-orange">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      <section className="border-y border-midnight/10 bg-midnight-card/30 py-16 dark:border-white/10 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-page-fg sm:text-4xl">{a.values.title}</h2>
            <p className="mt-3 text-page-muted">{a.values.subtitle}</p>
          </FadeUp>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
            {a.values.items.map((v, i) => (
              <StaggerItem key={v.title}>
                <article className="gradient-border-mask h-full">
                  <div className="inner glass-panel flex h-full flex-col p-6">
                    <span className="text-2xl text-stream-blue" aria-hidden>
                      {valueIcons[i % valueIcons.length]}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-page-fg">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-page-muted">{v.body}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold text-page-fg sm:text-4xl">{a.team.title}</h2>
            <p className="mt-3 max-w-2xl text-page-muted">{a.team.subtitle}</p>
          </FadeUp>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {a.team.roles.map((role, i) => (
              <FadeUp key={role.title} delay={i * 0.05}>
                <article className="glass-panel h-full rounded-2xl p-6 transition hover:border-stream-violet/40">
                  <div className="h-1 w-14 rounded-full bg-gradient-to-r from-stream-violet to-stream-blue" />
                  <h3 className="mt-5 font-display text-lg font-semibold text-page-fg">{role.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-page-muted">{role.desc}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-midnight/10 pb-20 dark:border-white/10 sm:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold text-page-fg sm:text-4xl">{a.equipment.title}</h2>
            <p className="mt-3 max-w-2xl text-page-muted">{a.equipment.subtitle}</p>
          </FadeUp>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {a.equipment.items.map((item) => (
              <StaggerItem key={item}>
                <div className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-4">
                  <span className="h-2 w-2 rounded-full bg-stream-orange shadow-glow-sm" />
                  <span className="text-sm font-medium text-page-fg">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </div>
  );
}
