/** Small shared string helpers (kept dependency-free). */
export const TODAY = new Date(2026, 10, 6).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
