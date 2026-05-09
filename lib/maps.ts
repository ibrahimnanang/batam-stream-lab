import { site } from "@/lib/site";

export function googleMapsEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed&hl=en`;
}
