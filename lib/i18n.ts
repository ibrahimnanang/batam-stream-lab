import "server-only";

export type { Locale, Messages } from "./i18n.shared";
export { localeCookieName } from "./i18n.shared";
export { getDictionary, getLocale } from "./i18n.server";
