"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function WhatsAppButton({ label }: { label?: string }) {
  return (
    <motion.a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl shadow-black/40 ring-4 ring-[#25D366]/30"
      aria-label={label ?? "WhatsApp"}
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M16 3c-7.18 0-13 5.82-13 13 0 2.3.62 4.53 1.8 6.53L5 29l6.73-2.01A12.93 12.93 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.53c-1.93 0-3.82-.53-5.53-1.52l-.4-.23-4.06 1.21 1.21-4.06-.26-.43A10.93 10.93 0 015.06 16c0-6 4.93-10.93 10.93-10.93S26.93 10 26.93 16 22 26.93 16 26.93zm6.43-8.16c-.35-.18-2.08-1.03-2.4-1.15-.32-.12-.55-.18-.78.18-.23.35-.9 1.15-1.1 1.38-.2.23-.4.26-.75.09-.35-.18-1.47-.54-2.8-1.72-1.04-.92-1.74-2.05-1.95-2.4-.2-.35-.02-.54.15-.71.15-.15.35-.4.52-.6.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.18-.78-1.88-1.07-2.57-.28-.68-.57-.59-.78-.6h-.66c-.23 0-.6.09-.91.43-.32.35-1.21 1.18-1.21 2.88 0 1.7 1.24 3.35 1.41 3.58.17.23 2.44 3.72 5.91 5.22.83.36 1.48.57 1.98.73.83.26 1.59.22 2.19.13.67-.1 2.08-.85 2.37-1.67.29-.82.29-1.53.2-1.67-.09-.15-.32-.23-.67-.41z" />
      </svg>
    </motion.a>
  );
}
