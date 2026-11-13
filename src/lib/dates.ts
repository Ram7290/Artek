/** Date formatting shared by blog listings and article headers. */

/** "18 Sep 2026" — stable between server prerender and client hydration. */
export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
