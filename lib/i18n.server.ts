import "server-only";

import { cookies } from "next/headers";
import type { Locale, Messages } from "./i18n.shared";
import { localeCookieName } from "./i18n.shared";

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  const v = jar.get(localeCookieName())?.value;
  if (v === "id" || v === "en") return v;
  return "en";
}

export async function getDictionary(): Promise<Messages> {
  const locale = await getLocale();
  if (locale === "id") {
    const mod = await import("@/messages/id.json");
    return mod.default as Messages;
  }
  const mod = await import("@/messages/en.json");
  return mod.default;
}
