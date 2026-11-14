import type { NavItem } from "@/types";

/**
 * Central navigation configuration — single source of truth for navbar links
 * (desktop + mobile menu). Update labels/destinations here only.
 */
export const navItems: readonly NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Company", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Products", to: "/products" },
  { label: "Insights", to: "/blog" },
  { label: "Contact", to: "/contact" },
];
