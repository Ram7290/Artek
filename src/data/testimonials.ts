import type { Testimonial } from "@/types";

/**
 * Client testimonials (homepage).
 *
 * PLACEHOLDER / DUMMY DATA — every entry below is fictional copy supplied as
 * scaffolding so the layout can be reviewed. Replace with real client quotes
 * (with permission) before production, and consider flagging each entry with
 * a verification status like `trustClaims` uses in src/data/company.ts.
 */
export const testimonials: readonly Testimonial[] = [
  {
    id: "t1",
    quote:
      "ARTEK upgraded our office CCTV and access control across two floors without disrupting a single workday. The SIRA paperwork was handled entirely by their team.",
    name: "Ahmed Al Farsi",
    role: "Facilities Manager",
    company: "Marina Gate Offices, Dubai",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Their support contract is worth every dirham. A network fault on a Thursday evening was fixed the same night — our operations never stopped.",
    name: "Priya Nair",
    role: "Operations Head",
    company: "Retail Chain, Deira",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Transparent quotation, branded equipment, and a clean installation. The after-sales service visits have kept our cameras and NVR running flawlessly.",
    name: "Khalid Mansour",
    role: "Villa Owner",
    company: "Palm Jumeirah Residence",
    rating: 4,
  },
  {
    id: "t4",
    quote:
      "From structured cabling to Wi-Fi coverage in our warehouse, ARTEK delivered the full IT setup on schedule. One team, one point of contact — simple.",
    name: "Daniel D'Souza",
    role: "Warehouse Director",
    company: "Logistics Firm, JAFZA",
    rating: 5,
  },
  {
    id: "t5",
    quote:
      "We moved our entire server room over a weekend with zero data loss. Their engineers planned every step and tested everything before Monday morning.",
    name: "Sara Iqbal",
    role: "IT Manager",
    company: "Corporate Office, Business Bay",
    rating: 5,
  },
  {
    id: "t6",
    quote:
      "Good pricing on laptops and accessories for our staff, plus fast setup and imaging. Our go-to supplier for office IT in Bur Dubai.",
    name: "Omar Haddad",
    role: "Procurement Officer",
    company: "Trading Company, Bur Dubai",
    rating: 4,
  },
];
