import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Produk",
};

const products = [
  {
    name: "LED Highbay Industri",
    tag: "Lampu gudang & manufaktur",
    spec: "120–200 lm/W · CRI 80+ · beam angle optik",
    badge: "Best seller",
  },
  {
    name: "Streetlight LED Smart",
    tag: "Penerangan jalan & kawasan",
    spec: "IP66 · surge 10kV · kontrol NEMA DALI",
    badge: "Smart city",
  },
  {
    name: "Panel Downlight Arsitektural",
    tag: "Hotel, ritel, perkantoran",
    spec: "UGR rendah · trimless option · emergency kit",
    badge: "Interior",
  },
  {
    name: "Modul Surya Mono PERC",
    tag: "Utility & rooftop skala menengah",
    spec: "440–600 Wp · PID free · 30 tahun linear power",
    badge: "Tier-1 OEM",
  },
  {
    name: "Hybrid Inverter 3-Fase",
    tag: "Backup produksi & peak shaving",
    spec: "50–110 kW · EPS mode · komunikasi SNMP",
    badge: "B2B",
  },
  {
    name: "Solar Streetlight All-in-One",
    tag: "Lampu PJU independen solar",
    spec: "Baterai LiFePO4 · sensor radar · CCTV ready",
    badge: "Off-grid",
  },
];

export default function ProductsPage() {
  return (
    <div className="border-b border-neutral-800">
      <div className="border-b border-neutral-800 bg-grid-fade">
        <PageShell compact>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Katalog utama</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Produk LED & solar</h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            Setiap SKU dilengkapi datasheet teknis, kurva fotometrik, dan roadmap kompatibilitas inverter. Custom BOM
            tersedia untuk tender dan proyek EPC.
          </p>
        </PageShell>
      </div>

      <PageShell>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl border border-neutral-800 bg-surface-raised p-6 transition hover:border-brand-orange/40"
            >
              <span className="inline-flex w-fit rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-semibold text-brand-orange">
                {p.badge}
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold text-white">{p.name}</h2>
              <p className="mt-1 text-sm text-neutral-500">{p.tag}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-400">{p.spec}</p>
              <Link
                href="/hubungi-kami"
                className="mt-6 inline-flex text-sm font-semibold text-brand-orange hover:text-white"
              >
                Minta spesifikasi lengkap →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-dashed border-brand-orange/40 bg-brand-orange/5 p-8 text-center sm:p-10">
          <p className="font-display text-lg font-semibold text-white">Butuh sample lapangan atau BOQ draft?</p>
          <p className="mt-2 text-sm text-neutral-400">
            Tim inside sales kami merespons rata-rata dalam 1×24 jam kerja.
          </p>
          <Link
            href="/hubungi-kami"
            className="mt-6 inline-flex rounded-full bg-brand-orange px-8 py-3 text-sm font-semibold text-black hover:bg-white"
          >
            Hubungi tim produk
          </Link>
        </div>
      </PageShell>
    </div>
  );
}
