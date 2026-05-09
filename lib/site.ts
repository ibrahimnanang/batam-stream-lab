export const site = {
  name: "Batam Stream Lab",
  legalName: "Batam Stream Lab",
  established: "2020",
  whatsappUrl: "https://s.id/273YE",
  addressLines: [
    "Buana Central Park, Clifton 32,",
    "Tembesi, Kota Batam,",
    "Kepulauan Riau, Indonesia",
  ],
  mapQuery: "Buana Central Park, Clifton 32, Tembesi, Kota Batam, Kepulauan Riau, Indonesia",
  /*
   * PLACE YOUR SVG LOGO HERE
   * /public/logo.svg
   */
  logoPath: "/logo.svg",
} as const;

export type NavKey = "home" | "about" | "products" | "faq" | "contact";

export const navPaths: { href: string; key: NavKey }[] = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/products", key: "products" },
  { href: "/faq", key: "faq" },
  { href: "/contact", key: "contact" },
];
