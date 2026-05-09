import Image from "next/image";
import Link from "next/link";
import { getDictionary, getLocale } from "@/lib/i18n";
import { navPaths, site } from "@/lib/site";
import { HeaderChrome } from "./HeaderChrome";

export async function Header() {
  const dict = await getDictionary();
  const locale = await getLocale();
  const links = navPaths.map(({ href, key }) => ({ href, label: dict.nav[key] }));

  return (
    <HeaderChrome
      locale={locale}
      lang={dict.lang}
      theme={dict.theme}
      accessibility={dict.accessibility}
      links={links}
      brand={
        <Link href="/" className="group flex shrink-0 items-center gap-2.5" aria-label={`${site.name} home`}>
          {/*
            PLACE YOUR SVG LOGO HERE
            /public/logo.svg
          */}
          <span className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/15">
            <Image src={site.logoPath} alt="" width={36} height={36} priority className="h-9 w-9 object-cover" />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-page-fg sm:text-base">{site.name}</span>
        </Link>
      }
    />
  );
}
