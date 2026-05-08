import type { Metadata } from "next";
import { ContactActions } from "@/components/ContactActions";
import { PageShell } from "@/components/PageShell";
import { site } from "@/components/site";

export const metadata: Metadata = {
  title: "Hubungi Kami",
};

const wa = "628112345678";

export default function ContactPage() {
  return (
    <div className="border-b border-neutral-800">
      <div className="border-b border-neutral-800 bg-grid-fade">
        <PageShell compact>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Mari diskusi</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Hubungi Kami</h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            Ceritakan kebutuhan teknis, jadwalkan kunjungan lapangan, atau minta revisi BOQ — tim sales engineer kami
            siap membantu.
          </p>
        </PageShell>
      </div>

      <PageShell>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-white">Kantor & operasional</h2>
            <address className="mt-6 space-y-4 not-italic text-neutral-400">
              <p>
                <span className="text-xs uppercase tracking-wider text-neutral-600">Alamat</span>
                <br />
                {site.address}
              </p>
              <p>
                <span className="text-xs uppercase tracking-wider text-neutral-600">Telepon</span>
                <br />
                <a className="text-white hover:text-brand-orange" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  {site.phone}
                </a>
              </p>
              <p>
                <span className="text-xs uppercase tracking-wider text-neutral-600">Email</span>
                <br />
                <a className="text-white hover:text-brand-orange" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>
                <span className="text-xs uppercase tracking-wider text-neutral-600">WhatsApp cepat</span>
                <br />
                <a
                  className="inline-flex text-brand-orange hover:text-white"
                  href={`https://wa.me/${wa}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat tim proyek →
                </a>
              </p>
            </address>

            <div className="mt-10 rounded-2xl border border-neutral-800 bg-surface-raised p-6">
              <p className="text-sm font-semibold text-white">Jam operasional</p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li className="flex justify-between">
                  <span>Senin–Jumat</span>
                  <span className="text-neutral-300">08.00 – 17.00 WIB</span>
                </li>
                <li className="flex justify-between">
                  <span>Hotline proyek</span>
                  <span className="text-neutral-300">24/7 (on-call)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-black/40 p-8">
            <h2 className="font-display text-xl font-semibold text-white">Form singkat</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Isi form berikut untuk membuka aplikasi email default Anda dengan pesan pra-format.
            </p>
            <div className="mt-8">
              <ContactActions />
            </div>
          </div>
        </div>
      </PageShell>
    </div>
  );
}
