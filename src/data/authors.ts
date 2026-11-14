import type { Author } from "@/types";

/**
 * Article bylines.
 *
 * Launch state: the team byline only — no named individuals until ARTEK
 * confirms who writes and reviews articles (add an entry per person then,
 * with `image` pointing at a square portrait under /public/images/team/).
 */
export const authors: readonly Author[] = [
  {
    id: "artek-team",
    name: "ARTEK Engineering Team",
    role: "IT infrastructure & security engineers, Dubai",
    bio:
      "Practical guidance from the engineers who survey, install and maintain the systems — written for businesses evaluating the same decisions.",
  },
];

export const getAuthor = (id: string): Author | undefined =>
  authors.find((a) => a.id === id);
