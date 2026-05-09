"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export function ContactForm({
  labels,
}: {
  labels: {
    name: string;
    company: string;
    email: string;
    phone: string;
    eventType: string;
    message: string;
    submit: string;
    success: string;
    placeholderEvent: string;
  };
}) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-midnight/15 bg-white/80 px-4 py-3 text-sm text-page-fg outline-none transition placeholder:text-page-muted/60 focus:border-stream-violet/60 focus:ring-2 focus:ring-stream-violet/20 dark:border-white/10 dark:bg-midnight-raised/40";

  return (
    <motion.form
      layout
      onSubmit={onSubmit}
      className="glass-panel space-y-4 rounded-3xl p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-page-muted">
          {labels.name}
          <input className={`${field} mt-2`} name="name" required />
        </label>
        <label className="block text-sm font-medium text-page-muted">
          {labels.company}
          <input className={`${field} mt-2`} name="company" />
        </label>
        <label className="block text-sm font-medium text-page-muted">
          {labels.email}
          <input className={`${field} mt-2`} name="email" type="email" required />
        </label>
        <label className="block text-sm font-medium text-page-muted">
          {labels.phone}
          <input className={`${field} mt-2`} name="phone" type="tel" />
        </label>
      </div>
      <label className="block text-sm font-medium text-page-muted">
        {labels.eventType}
        <input className={`${field} mt-2`} name="eventType" placeholder={labels.placeholderEvent} />
      </label>
      <label className="block text-sm font-medium text-page-muted">
        {labels.message}
        <textarea className={`${field} mt-2 min-h-[140px]`} name="message" required />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-stream-violet to-stream-indigo py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 sm:w-auto sm:px-10"
      >
        {labels.submit}
      </button>
      {sent ? (
        <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-stream-blue">
          {labels.success}
        </motion.p>
      ) : null}
    </motion.form>
  );
}
