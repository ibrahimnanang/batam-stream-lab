import Link from "next/link";
import { navItems, site } from "./site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-surface-raised">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-semibold text-white">{site.name}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-400">{site.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/hubungi-kami"
                className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-brand-orange-deep"
              >
                Minta penawaran
              </Link>
              <Link
                href="/produk"
                className="rounded-full border border-neutral-600 px-5 py-2.5 text-sm font-medium text-neutral-200 hover:border-brand-orange hover:text-brand-orange"
              >
                Lihat katalog
              </Link>
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Tautan
            </p>
            <ul className="mt-4 space-y-2">
              {navItems.slice(1, 6).map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="text-sm text-neutral-400 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Kontak
            </p>
            <address className="mt-4 not-italic">
              <p className="text-sm text-neutral-400">{site.address}</p>
              <p className="mt-3 text-sm text-neutral-400">
                <span className="text-neutral-500">Tel: </span>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {site.phone}
                </a>
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                <span className="text-neutral-500">Email: </span>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-800 pt-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Hak cipta dilindungi.
          </p>
          <p>LED berkualitas · Panel surya tersertifikasi · Instalasi aman</p>
        </div>
      </div>
    </footer>
  );
}
