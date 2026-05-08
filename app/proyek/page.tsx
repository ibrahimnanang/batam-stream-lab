import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Proyek",
};

const projects = [
  {
    name: "Relamping CFL → LED — cluster ritel nasional",
    scope: "2.400 titik · 18 cabang",
    saving: "37% reduksi kWh",
    year: "2025",
  },
  {
    name: "PLTS atap 1,2 MWp — manufaktur otomotif",
    scope: "String monitoring · export limiter",
    saving: "Peak shaving 18%",
    year: "2024",
  },
  {
    name: "PJU solar hybrid — kawasan industri baru",
    scope: "120 unit all-in-one · SCADA",
    saving: "Off-grid 100% malam hari",
    year: "2024",
  },
  {
    name: "Highbay retrofit — cold storage 3PL",
    scope: "Sensor occupancy · -25°C rated",
    saving: "Payback 2,1 tahun",
    year: "2023",
  },
];

export default function ProjectsPage() {
  return (
    <div className="border-b border-neutral-800">
      <div className="border-b border-neutral-800 bg-grid-fade">
        <PageShell compact>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Referensi</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Proyek terpilih</h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            Cuplikan studi kasus dengan metrik yang telah disetujui klien untuk publikasi. Identitas brand dirahasiakan
            sesuai NDA bila diperlukan.
          </p>
        </PageShell>
      </div>

      <PageShell>
        <div className="overflow-hidden rounded-3xl border border-neutral-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-raised text-xs uppercase tracking-wider text-neutral-500">
              <tr>
                <th className="px-6 py-4 font-medium">Proyek</th>
                <th className="hidden px-6 py-4 font-medium sm:table-cell">Lingkup</th>
                <th className="px-6 py-4 font-medium">Hasil</th>
                <th className="hidden px-6 py-4 font-medium md:table-cell">Tahun</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 bg-black/30">
              {projects.map((p) => (
                <tr key={p.name} className="hover:bg-white/[0.02]">
                  <td className="px-6 py-5 font-medium text-white">{p.name}</td>
                  <td className="hidden px-6 py-5 text-neutral-400 sm:table-cell">{p.scope}</td>
                  <td className="px-6 py-5 text-brand-orange">{p.saving}</td>
                  <td className="hidden px-6 py-5 text-neutral-500 md:table-cell">{p.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-surface-raised p-8">
            <h2 className="font-display text-lg font-semibold text-white">Testimonial singkat</h2>
            <blockquote className="mt-4 text-neutral-400">
              “Tim commissioning mereka datang dengan check-list yang lebih rapi dari kontraktor EPC sebelumnya.
              Inverter kami akhirnya stabil setelah harmonic issue terselesaikan.”
            </blockquote>
            <p className="mt-4 text-sm font-medium text-brand-orange">— Plant Manager, F&amp;B NASDAQ-listed</p>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-brand-orange/40 bg-brand-orange/5 p-8">
            <p className="font-display text-lg font-semibold text-white">Punya tender RFQ aktif?</p>
            <p className="mt-2 text-sm text-neutral-400">
              Kami mendukung format dokumen LKPP, e-catalogue, maupun registrasi vendor pemerintah dan swasta.
            </p>
            <Link
              href="/hubungi-kami"
              className="mt-6 inline-flex w-fit rounded-full bg-brand-orange px-6 py-2.5 text-sm font-semibold text-black hover:bg-white"
            >
              Diskusikan BOQ
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  );
}
