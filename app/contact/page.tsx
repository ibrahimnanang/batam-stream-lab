import { ContactForm } from "@/components/contact/ContactForm";
import { FadeUp } from "@/components/motion/FadeUp";
import { getDictionary } from "@/lib/i18n";
import { googleMapsEmbedUrl } from "@/lib/maps";
import { site } from "@/lib/site";

const social = [
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "TikTok", href: "https://www.tiktok.com/" },
  { name: "YouTube", href: "https://www.youtube.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
];

export default async function ContactPage() {
  const dict = await getDictionary();
  const c = dict.contact;
  const mapSrc = googleMapsEmbedUrl();

  return (
    <div>
      <section className="border-b border-midnight/10 bg-hero-mesh py-14 dark:border-white/10 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">{c.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300/90">{c.subtitle}</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeUp>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-xl font-semibold text-page-fg">{c.company}</h2>
                <p className="mt-2 text-sm text-page-muted">
                  {c.establishedLabel}: {site.established}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-stream-violet">{c.addressLabel}</h3>
                <address className="mt-2 not-italic text-sm leading-relaxed text-page-muted">
                  {site.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-stream-violet">{c.hoursLabel}</h3>
                <p className="mt-2 whitespace-pre-line text-sm text-page-muted">{c.hoursValue}</p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-stream-violet">{c.socialTitle}</h3>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {social.map((s) => (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-midnight/15 px-4 py-2 text-xs font-semibold text-page-muted transition hover:border-stream-blue/60 hover:text-page-fg dark:border-white/10"
                      >
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.06}>
            <ContactForm labels={c.form} />
          </FadeUp>
        </div>
      </section>

      <section className="border-t border-midnight/10 pb-20 dark:border-white/10 sm:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-display text-2xl font-bold text-page-fg">{c.mapTitle}</h2>
          </FadeUp>
          <div className="mt-6 overflow-hidden rounded-3xl border border-midnight/10 shadow-xl dark:border-white/10">
            <iframe title="Google Maps" src={mapSrc} className="h-[340px] w-full border-0 sm:h-[420px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>
    </div>
  );
}
