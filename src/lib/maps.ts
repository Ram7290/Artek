/**
 * Public link to the office's Google Maps place page (confirmed by ARTEK).
 * Use this for "view on map" actions — users open the place, then press
 * Directions inside Maps.
 */
export const MAP_SHARE_URL = "https://maps.app.goo.gl/rEbbmziLxpduVfaq8";

/**
 * Google Maps embed for the verified place.
 */
const PLACE_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3097883622886!2d55.2886394!3d25.260162299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4314fc97957b%3A0xd029300221df3078!2sArtek%20Computers%20LLC%20%7C%20SIRA%20Approved%20CCTV%20Company%20in%20Dubai!5e0!3m2!1sen!2sae!4v1794468023218!5m2!1sen!2sae";

/**
 * Resolves an optional map embed URL. Returns null when no verified office
 * address exists (data/company.ts), in which case no map is shown.
 */
export function getMapEmbedUrl(address: string | null): string | null {
  if (!address) return null;
  return PLACE_EMBED_URL;
}
