import type { NavItem } from "@/types";
import { coreServices } from "@/data/services";

const solutionLinks = coreServices.map((s) => ({
  label: s.title,
  to: `/solutions/${s.slug}`,
  description: s.shortDescription.split(",")[0] ?? s.shortDescription,
}));

export const navItems: readonly NavItem[] = [
  { label: "Home", to: "/" },
  { label: "IT Solutions", to: "/solutions", children: solutionLinks },
  {
    label: "CCTV & Security",
    to: "/solutions/cctv-security-dubai",
    children: [
      { label: "CCTV & Security Systems", to: "/solutions/cctv-security-dubai" },
      { label: "CCTV Installation Dubai", to: "/solutions/cctv-installation-dubai" },
      { label: "SIRA-Compliant CCTV", to: "/solutions/sira-approved-cctv-dubai" },
      { label: "CCTV Maintenance", to: "/solutions/cctv-maintenance-dubai" },
      { label: "Commercial CCTV", to: "/solutions/commercial-cctv-installation-dubai" },
      { label: "Residential CCTV", to: "/solutions/residential-cctv-installation-dubai" },
      { label: "CCTV AMC", to: "/solutions/cctv-amc-dubai" },
    ],
  },
  { label: "Networking", to: "/solutions/network-solutions-dubai" },
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];
