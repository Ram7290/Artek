/** CSS animation helpers for the (skipped) map embed — placeholder kept for symmetry. */

/**
 * Resolves an optional map embed URL. ARTEK must first confirm a verified
 * office address; when `address` is null the contact page shows no map.
 */
export function getMapEmbedUrl(address: string | null): string | null {
  if (!address) return null;
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}
