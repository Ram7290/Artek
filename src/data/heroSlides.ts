import type { HeroSlide } from "../types/index.ts";

/**
 * Five-slide hero carousel content.
 *
 * ⚠ IMAGES: these are licensed-free representative stock photographs
 * (source: Unsplash CDN, downloaded locally). They demonstrate the design
 * intent only — they are NOT ARTEK project photos and must not be presented
 * as ARTEK work. Replace files in /public/images/hero/ with ARTEK project
 * photography or licensed stock of the same dimensions (1600×1200, 4:3)
 * when available. Alt text is deliberately descriptive, not attributive.
 */
export const heroSlides: readonly HeroSlide[] = [
  {
    id: "cctv",
    category: "Video Surveillance",
    title: "Intelligent CCTV Solutions",
    description: "Advanced surveillance solutions for homes and businesses.",
    image: "/images/hero/slide1-cctv.webp",
    imageAlt:
      "Professional vandal dome security camera installed on a building exterior",
    width: 1600,
    height: 1200,
  },
  {
    id: "biometrics",
    category: "Biometric Systems",
    title: "Smarter Attendance Management",
    description: "Modern biometric technology for workplace access and attendance.",
    image: "/images/hero/slide2-biometric.webp",
    imageAlt:
      "Person using biometric fingerprint technology in a professional environment",
    width: 1600,
    height: 1200,
  },
  {
    id: "access-control",
    category: "Access Control",
    title: "Secure Every Entry Point",
    description: "Smart access management for controlled and secure environments.",
    image: "/images/hero/slide3-access.webp",
    imageAlt: "Secure entrance of a modern corporate building",
    width: 1600,
    height: 1200,
  },
  {
    id: "intercom",
    category: "Video Intercom",
    title: "Connected Entry Solutions",
    description: "Convenient communication and visitor management.",
    image: "/images/hero/slide4-entry.webp",
    imageAlt: "Modern residential entrance with video intercom access",
    width: 1600,
    height: 1200,
  },
  {
    id: "networking",
    category: "IT Infrastructure",
    title: "Reliable Network Infrastructure",
    description: "Technology infrastructure that keeps businesses connected.",
    image: "/images/hero/slide5-network.webp",
    imageAlt: "Organised server racks and network cabling in a data center",
    width: 1600,
    height: 1200,
  },
];

/** The LCP-critical first-slide image, preloaded at build time. */
export const heroPreloadImage = heroSlides[0];
