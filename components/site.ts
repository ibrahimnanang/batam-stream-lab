export const site = {
  name: "Lumen Cahaya Nusantara",
  legalName: "PT Lumen Cahaya Nusantara",
  tagline: "Solusi lampu LED & panel surya profesional untuk rumah dan bisnis",
  phone: "+62 811-2345-678",
  email: "hello@lumencahaya.id",
  address: "Kawasan Industri Greenland, Bekasi Selatan — Indonesia",
};

export type NavKey =
  | "home"
  | "about"
  | "products"
  | "services"
  | "projects"
  | "faq"
  | "contact";

export const navItems: {
  href: string;
  label: string;
  key: NavKey;
}[] = [
  { href: "/", label: "Beranda", key: "home" },
  { href: "/tentang-kami", label: "Tentang Kami", key: "about" },
  { href: "/produk", label: "Produk", key: "products" },
  { href: "/layanan", label: "Layanan", key: "services" },
  { href: "/proyek", label: "Proyek", key: "projects" },
  { href: "/faq", label: "FAQ", key: "faq" },
  { href: "/hubungi-kami", label: "Hubungi Kami", key: "contact" },
];
