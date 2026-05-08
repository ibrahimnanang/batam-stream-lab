import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { site } from "@/components/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
};

const values = [
  {
    title: "Integritas produk",
    body: "Kami hanya memasarkan modul dengan sertifikasi listrik lengkap serta garansi distributor resmi.",
  },
  {
    title: "Kolaborasi berskala",
    body: "Dari SME hingga rantai industri: tim project kami memetakan BOM, SLA, hingga dokumentasi HSE.",
  },
  {
    title: "Komitmen lingkungan",
    body: "Setiap rollout LED & PLTS mencat baseline emisi bagi pelanggan yang ingin laporan ESG konkret.",
  },
];

export default function AboutPage() {
  return (
    <div className="border-b border-neutral-800">
      <div className="border-b border-neutral-800 bg-grid-fade">
        <PageShell compact>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Siapa kami</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Tentang {site.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            {site.legalName} adalah distributor dan integrator utama untuk sistem penerangan LED serta pembangkit
            listrik tenaga surya di Indonesia — fokus pada efisiensi, keandalan lapangan, dan layanan berkelanjutan.
          </p>
        </PageShell>
      </div>

      <PageShell>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-white">Cerita singkat</h2>
            <div className="mt-6 space-y-4 text-neutral-400">
              <p>
                Bermula dari konsultasi hemat energi bagi pabrik tekstil tahun 2012, kini kami melayani proyek
                nasional mencakup gudang logistik, ritel premium, serta kompleks industri terpadu yang memerlukan SLA
                cahaya aman tinggi dan backup energi bersih.
              </p>
              <p>
                In-house engineering menyatukan seleksi luminare, optic design, sampai harmonic analysis pada inverter
                agar rollout tidak mengganggu jaringan setempat Anda.
              </p>
              <p>
                Kami bukan sekadar menjual SKU—kami menuntaskan target lux, payback tahun, serta skenario rainy-day
                operasional fasilitas Anda.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-800 bg-surface-raised p-8">
            <dl className="space-y-6">
              <div className="flex justify-between gap-6 border-b border-neutral-800 pb-6">
                <dt className="text-sm text-neutral-500">Wilayah distribusi nasional</dt>
                <dd className="text-right font-display text-xl font-semibold text-white">Jabodetabek + 9 kota besar</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-neutral-800 pb-6">
                <dt className="text-sm text-neutral-500">Kapasitas modul tersebar terbesar</dt>
                <dd className="text-right font-display text-xl font-semibold text-white">82 MWp*</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-neutral-800 pb-6">
                <dt className="text-sm text-neutral-500">SKU LED aktif dalam katalog</dt>
                <dd className="text-right font-display text-xl font-semibold text-white">620+ merek gabungan</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-sm text-neutral-500">Tim commissioning</dt>
                <dd className="text-right font-display text-xl font-semibold text-white">
                  54 teknisi bersertifikat
                </dd>
              </div>
              <p className="text-xs text-neutral-600">*Kumulatif install sejak 2020 sampai dokumentasi lapangan internal.</p>
            </dl>
          </div>
        </div>

        <section className="mt-16 border-t border-neutral-800 pt-16">
          <h2 className="font-display text-2xl font-bold text-white">Nilai inti</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <article key={v.title} className="rounded-2xl border border-neutral-800 bg-black/40 p-6">
                <h3 className="font-display text-lg font-semibold text-brand-orange">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{v.body}</p>
              </article>
            ))}
          </div>
        </section>
      </PageShell>
    </div>
  );
}
