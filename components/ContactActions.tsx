"use client";

import { FormEvent, useState } from "react";
import { site } from "./site";

export function ContactActions() {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    if (!email || !message) {
      setStatus("Email dan pesan wajib diisi.");
      return;
    }
    const subject = encodeURIComponent(`[Website] Pesan dari ${name || "pengunjung"}`);
    const body = encodeURIComponent(
      `Nama: ${name}\nPerusahaan: ${company}\nEmail: ${email}\n\nPesan:\n${message}`,
    );
    setStatus(null);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-neutral-400">Nama</span>
          <input
            name="name"
            className="mt-2 w-full rounded-xl border border-neutral-700 bg-black/50 px-4 py-3 text-white outline-none ring-brand-orange/40 placeholder:text-neutral-600 focus:border-brand-orange focus:ring-2"
            placeholder="Nama lengkap"
            autoComplete="name"
          />
        </label>
        <label className="block text-sm">
          <span className="text-neutral-400">Perusahaan</span>
          <input
            name="company"
            className="mt-2 w-full rounded-xl border border-neutral-700 bg-black/50 px-4 py-3 text-white outline-none ring-brand-orange/40 placeholder:text-neutral-600 focus:border-brand-orange focus:ring-2"
            placeholder="Opsional"
            autoComplete="organization"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="text-neutral-400">Email</span>
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-xl border border-neutral-700 bg-black/50 px-4 py-3 text-white outline-none ring-brand-orange/40 placeholder:text-neutral-600 focus:border-brand-orange focus:ring-2"
          placeholder="nama@perusahaan.com"
          autoComplete="email"
        />
      </label>
      <label className="block text-sm">
        <span className="text-neutral-400">Pesan / kebutuhan proyek</span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y rounded-xl border border-neutral-700 bg-black/50 px-4 py-3 text-white outline-none ring-brand-orange/40 placeholder:text-neutral-600 focus:border-brand-orange focus:ring-2"
          placeholder="Ceritakan scope proyek, timeline, dan preferensi kontak..."
        />
      </label>
      {status ? <p className="text-sm text-amber-400">{status}</p> : null}
      <button
        type="submit"
        className="w-full rounded-full bg-brand-orange py-3.5 text-sm font-semibold text-black transition hover:bg-white sm:w-auto sm:px-10"
      >
        Buka aplikasi email
      </button>
      <p className="text-xs text-neutral-500">
        Form ini menyiapkan email di perangkat Anda. Tanpa backend, tidak ada data yang tersimpan di server kami.
      </p>
    </form>
  );
}
