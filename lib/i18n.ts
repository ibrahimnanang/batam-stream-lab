import { cookies } from "next/headers";
import type en from "@/messages/en.json";

export type Locale = "en" | "id";

export type Messages = typeof en;

const COOKIE = "bsl-locale";

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  const v = jar.get(COOKIE)?.value;
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

export function localeCookieName() {
  return COOKIE;
}
