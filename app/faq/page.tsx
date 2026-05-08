import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "FAQ",
};

const faqs = [
  {
    q: "Berapa lama masa payback pergantian ke LED?",
    a: "Rata-rata klien B2B kami mencapai 1,8–3,5 tahun tergantung tarif dasar listrik dan jam operasional. Untuk industri 24/7, payback cenderung lebih cepat dibanding perkantoran standar.",
  },
  {
    q: "Apakah modul surya yang dijual memiliki warranty performa?",
    a: "Ya. Seluruh modul bermerek yang kami distribusikan mencantumkan garansi produk serta linear power warranty hingga 30 tahun dari pabrik, dengan dokumentasi QC incoming di gudang kami.",
  },
  {
    q: "Bisakah PLTS menghasilkan lebih sedikit dari simulasi awal?",
    a: "Faktor soiling, keterbatasan export PLN, dan degradasi tahun pertama dapat mempengaruhi yield. Oleh karena itu setiap PSA kami sertakan pula skenario sensitivitas curah minimum dan downtime inverter.",
  },
  {
    q: "Apakah Anda melayani proyek skala domestik?",
    a: "Kami utama melayani B2B/industri namun rollout residensial atas dasar sistem hybrid tertentu (misalnya all-in-one streetlight kampung atau paket mikro inverter) bisa didiskusikan lewat konsultasi awal.",
  },
  {
    q: "Bagaimana proses SLA perbaikan jika lampu gagal?",
    a: "Tiket after-sales bisa diajukan lewat WA grup proyek resmi Anda. SLA resmi bervariatif 24–72 jam untuk lokasi Jabodetabek dan 3–7 hari kerja untuk luar pulau, tergantung kontrak pemeliharaan.",
  },
  {
    q: "Apakah tersedia pembiayaan atau skema sewa energi?",
    a: "Kami bermitra dengan penyedia pembiayaan energi terbarukan untuk skema CAPEX maupun komersialisasi khusus (tergantung kelayakan kredit). Hubungi tim kami untuk matrix persyaratan terbaru.",
  },
];

export default function FaqPage() {
  return (
    <div className="border-b border-neutral-800">
      <div className="border-b border-neutral-800 bg-grid-fade">
        <PageShell compact>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Pertanyaan umum</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">FAQ</h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            Jawaban singkat untuk pertanyaan yang sering kami terima sebelum kick-off proyek. Untuk detail teknis
            spesifik, silakan hubungi engineer kami.
          </p>
        </PageShell>
      </div>

      <PageShell>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-neutral-800 bg-surface-raised px-5 py-1 open:border-brand-orange/40 open:bg-black/40"
            >
              <summary className="cursor-pointer list-none py-4 font-medium text-white marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-brand-orange transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="border-t border-neutral-800 pb-4 pt-3 text-sm leading-relaxed text-neutral-400">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-neutral-800 bg-gradient-to-r from-brand-orange/10 to-transparent p-8 text-center">
          <p className="font-display text-lg font-semibold text-white">Belum menemukan jawaban?</p>
          <p className="mt-2 text-sm text-neutral-400">
            Kirimkan pertanyaan teknis Anda — respons rata-rata kurang dari 1 hari kerja.
          </p>
          <Link
            href="/hubungi-kami"
            className="mt-6 inline-flex rounded-full bg-brand-orange px-8 py-3 text-sm font-semibold text-black hover:bg-white"
          >
            Tanya tim kami
          </Link>
        </div>
      </PageShell>
    </div>
  );
}
