import type en from "@/messages/en.json";

export type Locale = "en" | "id";

export type Messages = typeof en;

const COOKIE = "bsl-locale";

export function localeCookieName() {
  return COOKIE;
}
