/** Single source of truth for storefront location (maps, SEO, footer). */
export const SHOP_ADDRESS_LINE = "1573 S Main St, Yreka, CA 96097";

const encodedAddress = encodeURIComponent(SHOP_ADDRESS_LINE);

/** Opens Google Maps with turn-by-turn directions; works in the Maps app on phones when installed. */
export function getGoogleMapsDirectionsUrl(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
}

/** Standard embed query (no API key). Users can pan/zoom inside the iframe like Google Maps. */
export function getGoogleMapsEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
}
