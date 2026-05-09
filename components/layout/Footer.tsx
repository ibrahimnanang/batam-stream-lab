import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { navPaths, site } from "@/lib/site";

const social = [
  { name: "Instagram", href: "https://instagram.com", icon: "IG" },
  { name: "TikTok", href: "https://tiktok.com", icon: "TT" },
  { name: "YouTube", href: "https://youtube.com", icon: "YT" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "in" },
];

export async function Footer() {
  const dict = await getDictionary();

  return (
    <footer className="border-t border-midnight/10 bg-midnight-card/80 dark:border-white/10 dark:bg-midnight-card/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-semibold text-page-fg">{site.name}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-page-muted">
              {dict.home.hero.sub}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-stream-violet to-stream-indigo px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
              >
                {dict.home.hero.ctaSecondary}
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-midnight/15 px-5 py-2.5 text-sm font-medium text-page-fg transition hover:border-stream-violet/50 dark:border-white/15"
              >
                {dict.home.hero.ctaPrimary}
              </Link>
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-stream-violet">{dict.footer.linksTitle}</p>
            <ul className="mt-4 space-y-2">
              {navPaths.map(({ href, key }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-page-muted transition hover:text-page-fg">
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-stream-violet">{dict.footer.socialTitle}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {social.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-xl border border-midnight/10 px-3 text-xs font-bold text-page-fg transition hover:border-stream-blue/50 hover:text-stream-blue dark:border-white/10"
                  >
                    <span className="sr-only">{s.name}</span>
                    <span aria-hidden>{s.icon}</span>
                  </a>
                </li>
              ))}
            </ul>
            <address className="mt-6 not-italic text-sm leading-relaxed text-page-muted">
              {site.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-midnight/10 pt-8 text-xs text-page-muted dark:border-white/10">
          <p>
            {dict.footer.copyright} {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
