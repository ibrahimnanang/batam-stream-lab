import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Layanan",
};

const services = [
  {
    title: "Energy audit & lux study",
    points: [
      "Pemetaan titik lux existing vs standar SNI/OHS",
      "Model ROI pergantian LED vs ballast konvensional",
      "Rekomendasi zoning cahaya & emergency lighting",
    ],
  },
  {
    title: "Engineering PLTS atap & ground mount",
    points: [
      "Simulasi PVsyst & shading analysis",
      "Single line diagram, protection coordination",
      "Koordinasi grid-tie PLN & export limiter",
    ],
  },
  {
    title: "Procurement & instalasi turn-key",
    points: [
      "Manajemen logistik modul & struktur BOM",
      "QC incoming test & flash test sampling",
      "Commissioning I-V curve, IR thermography, LOTO",
    ],
  },
  {
    title: "Managed service & guarantee",
    points: [
      "Remote monitoring inverter & yield loss alert",
      "Preventive maintenance bulanan/triwulanan",
      "Stock fast-moving spare parts regional",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="border-b border-neutral-800">
      <div className="border-b border-neutral-800 bg-grid-fade">
        <PageShell compact>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">End-to-end</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Layanan integrasi</h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            Kami membawa proyek dari survey awal hingga operasional harian—dengan dokumentasi test report yang siap
            diaudit internal maupun pihak ketiga.
          </p>
        </PageShell>
      </div>

      <PageShell>
        <div className="space-y-8">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="grid gap-6 rounded-3xl border border-neutral-800 bg-surface-raised p-8 md:grid-cols-[auto_1fr] md:items-start md:gap-10"
            >
              <span className="font-display text-4xl font-bold text-brand-orange/40 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold text-white">{s.title}</h2>
                <ul className="mt-4 space-y-3">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-neutral-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl border border-neutral-800 bg-black/50 p-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl font-semibold text-white">Butuh NDA & studi kelayakan GRATIS?</p>
            <p className="mt-2 text-sm text-neutral-400">Kirimkan single line map listrik & layout atap terbaru Anda.</p>
          </div>
          <Link
            href="/hubungi-kami"
            className="inline-flex shrink-0 rounded-full bg-brand-orange px-8 py-3 text-sm font-semibold text-black hover:bg-white"
          >
            Request workshop
          </Link>
        </div>
      </PageShell>
    </div>
  );
}
