import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { FadeUp } from "@/components/motion/FadeUp";
import { getDictionary } from "@/lib/i18n";

export default async function FaqPage() {
  const dict = await getDictionary();
  const f = dict.faq;

  return (
    <div>
      <section className="border-b border-midnight/10 bg-hero-mesh py-14 dark:border-white/10 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">{f.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300/90">{f.subtitle}</p>
          </FadeUp>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={f.items} />
        </div>
      </section>
    </div>
  );
}
