import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { site } from "@/components/site";

const highlights = [
  {
    title: "Hemat energi hingga 80%",
    body: "Lampu LED kami menggunakan chip premium dengan efikasi tinggi untuk biaya operasional yang lebih rendah.",
  },
  {
    title: "Off-grid dengan solar hybrid",
    body: "Kombinasikan instalasi lampu luar ruang dengan pembangkit surya untuk area tanpa akses PLN stabil.",
  },
  {
    title: "Garansi & after-sales",
    body: "Dukungan teknisi resmi untuk pemasangan, commissioning, hingga pemeliharaan berkala.",
  },
];

const categories = [
  {
    title: "Lampu LED indoor",
    desc: "Downlight, panel, strip architectural, dan smart lighting untuk kantor & ritel.",
  },
  {
    title: "Lampu LED outdoor",
    desc: "Floodlight jalan, high mast, landscape, tahan cuaca IP65+.",
  },
  {
    title: "Panel surya & inverter",
    desc: "Modul mono PERC, string inverter, hybrid storage — dirancang sesuai beban.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid-fade bg-hero-glow">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Penerangan · Energi terbarukan
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-balance text-white sm:text-5xl lg:text-6xl">
                Cahaya cerdas.{" "}
                <span className="text-brand-orange">Energi yang bertanggung jawab.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">{site.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hubungi-kami"
                  className="rounded-full bg-brand-orange px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-brand-orange/20 transition hover:bg-brand-orange-deep"
                >
                  Konsultasi gratis
                </Link>
                <Link
                  href="/produk"
                  className="rounded-full border border-neutral-600 px-7 py-3 text-sm font-semibold text-white hover:border-brand-orange hover:text-brand-orange"
                >
                  Jelajahi produk
                </Link>
              </div>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-neutral-800 pt-10 sm:max-w-lg">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-neutral-500">Proyek selesai</dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-white">180+</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-neutral-500">Mitra B2B</dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-white">340+</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-neutral-500">Jam layanan</dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-white">24/7</dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-orange/20 via-transparent to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-surface-raised p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                      ⚡
                    </span>
                    <div>
                      <p className="font-semibold text-white">Audit kebutuhan cahaya</p>
                      <p className="mt-1 text-sm text-neutral-400">
                        Tim kami menghitung lux level, konsumsi listrik sebelum-upgrade, hingga payoff period.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 border-t border-neutral-800 pt-6">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                      ☀
                    </span>
                    <div>
                      <p className="font-semibold text-white">Simulasi PLTS atap</p>
                      <p className="mt-1 text-sm text-neutral-400">
                        Estimasi produksi kWh tahunan untuk gudang, pabrik, dan cluster perumahan.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/layanan"
                    className="block w-full rounded-2xl border border-dashed border-brand-orange/50 bg-brand-orange/5 px-4 py-4 text-center text-sm font-medium text-brand-orange hover:bg-brand-orange/10"
                  >
                    Lihat semua layanan →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      <section className="border-t border-neutral-800 bg-surface">
        <PageShell compact>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Mengapa memilih{" "}
            <span className="text-brand-orange">{site.name.split(" ").slice(-1)[0]}</span>?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <article
                key={h.title}
                className="rounded-2xl border border-neutral-800 bg-surface-raised p-6 transition hover:border-brand-orange/40"
              >
                <h3 className="font-display text-lg font-semibold text-white">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{h.body}</p>
              </article>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="border-t border-neutral-800 bg-surface-raised">
        <PageShell compact>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Portfolio</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">Lini produk utama</h2>
            </div>
            <Link href="/produk" className="text-sm font-medium text-brand-orange hover:text-brand-glow">
              Semua produk →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((c) => (
              <article
                key={c.title}
                className="group rounded-2xl border border-neutral-800 bg-black/40 p-6 transition hover:border-brand-orange/50"
              >
                <div className="h-1 w-12 rounded-full bg-brand-orange transition group-hover:w-full" />
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{c.desc}</p>
              </article>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="border-t border-neutral-800 bg-surface pb-16 sm:pb-24">
        <PageShell compact>
          <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-brand-orange/[0.12] via-surface to-surface p-8 sm:p-12">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Unduh panduan hemat energi industri
              </h2>
              <p className="mt-3 text-neutral-400">
                Checklist gratis untuk QA di lapangan dan indikator kapan pergantian ke LED serta PLTS tepat bagi
                fasilitas Anda.
              </p>
              <Link
                href="/hubungi-kami"
                className="mt-8 inline-flex rounded-full bg-brand-orange px-8 py-3 text-sm font-semibold text-black transition hover:bg-white"
              >
                Ajukan akses dokumentasi
              </Link>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  );
}
