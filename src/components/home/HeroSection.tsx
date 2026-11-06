import { ArrowRight, Phone, ShieldCheck, BadgeCheck, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { heroSlides } from "@/data/heroSlides";
import { company } from "@/data/company";

/**
 * Homepage hero — premium light two-column composition.
 * Left: eyebrow, headline, copy, CTAs, service line.
 * Right: cinematic five-slide carousel (HeroCarousel).
 * Content columns stay stationary; only the carousel rotates.
 */
export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-mist"
      aria-labelledby="hero-heading"
    >
      {/* ── Background composition (decorative, zero-CLS, no animation) ─────────
          ① top seam          white→mist band behind the fixed navbar
          ② azure bloom       single soft radial behind eyebrow/H1 zone
          ④ hairline grid     engineering pattern, masked to fade at edges
          ⑤ bottom handoff    mist→white merge into the trust strip
          Layers are aria-hidden + pointer-events-none and paint behind the
          content (content wrapper is positioned relative after them). */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* ① top seam */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/70 to-transparent" />
        {/* ② azure bloom — headline zone only */}
        <div
          className="absolute left-[-14%] top-[4%] h-[46rem] w-[46rem] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(215,180,76,0.12), rgba(215,180,76,0.04) 55%, rgba(215,180,76,0) 100%)",
          }}
        />
        {/* ④ hairline grid, masked toward the edges */}
        <svg
          className="absolute inset-0 h-full w-full opacity-100"
          style={{
            maskImage:
              "radial-gradient(ellipse 92% 82% at 50% 42%, black 26%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 92% 82% at 50% 42%, black 26%, transparent 78%)",
          }}
        >
          <defs>
            <pattern
              id="hero-fine-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path d="M48 0H0V48" fill="none" stroke="#101D35" strokeOpacity="0.055" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-fine-grid)" />
        </svg>
        {/* ⑤ bottom handoff into the trust strip */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      <div className="container-page relative grid items-center gap-10 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:grid-cols-[44fr_56fr] lg:gap-14 lg:pt-24 lg:pb-20 xl:pt-28 xl:pb-24">
        {/* LEFT — content */}
        <div className="order-1">
          <p className="animate-fade-up inline-flex flex-wrap items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-azure">
            <ShieldCheck className="size-3.5 shrink-0" aria-hidden="true" />
            {company.heroEyebrow}
          </p>
          <h1
            id="hero-heading"
            className="animate-fade-up text-ink mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl xl:text-[3.4rem]"
            style={{ animationDelay: "70ms" }}
          >
            One Partner.
            <br />
            Complete{" "}
            <span className="text-azure">Protection.</span>
          </h1>
          <p
            className="animate-fade-up text-slate-600 mt-5 max-w-xl text-pretty text-base leading-7 sm:text-[17px] sm:leading-8"
            style={{ animationDelay: "140ms" }}
          >
            From intelligent surveillance and biometric systems to access control
            and networking, we deliver smarter technology solutions for homes and
            businesses across the UAE.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "210ms" }}
          >
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-azure px-7 text-[15px] font-semibold text-white shadow-lg shadow-azure/25 transition-all duration-300 hover:bg-azure-deep hover:shadow-azure/35 focus-visible:outline-2 focus-visible:outline-azure"
            >
              Get a Free Consultation
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <a
              href={company.phoneHref}
              className="text-ink inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-hairline bg-white px-7 text-[15px] font-semibold shadow-sm transition-all duration-300 hover:border-azure/50 hover:text-azure-deep focus-visible:outline-2 focus-visible:outline-azure"
            >
              <Phone className="size-4" aria-hidden="true" />
              Talk to Our Team
            </a>
          </div>

          {/* credibility chip row — SIRA leads as the primary credential */}
          <ul
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-2"
            style={{ animationDelay: "270ms" }}
          >
            {company.heroCredentials.map((c) =>
              c.primary ? (
                <li key={c.label}>
                  <span className="inline-flex h-8 items-center gap-2 rounded-full border border-azure/30 bg-white py-0.5 pl-1.5 pr-3.5 shadow-sm shadow-azure/10">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-azure text-white">
                      <ShieldCheck className="size-3" aria-hidden="true" />
                    </span>
                    <span className="text-[12.5px] font-bold text-azure-deep">
                      {c.label}
                    </span>
                  </span>
                </li>
              ) : (
                <li
                  key={c.label}
                  className="text-ink/60 inline-flex h-8 items-center gap-1.5 rounded-full border border-hairline bg-white/70 px-3 text-[12.5px] font-semibold"
                >
                  {c.icon === "badge-check" && (
                    <BadgeCheck className="size-3.5 shrink-0" aria-hidden="true" />
                  )}
                  {c.icon === "users" && <Users className="size-3.5 shrink-0" aria-hidden="true" />}
                  {c.icon === "map-pin" && (
                    <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                  )}
                  {c.label}
                </li>
              ),
            )}
          </ul>

          <p
            className="animate-fade-up text-ink/60 mt-4 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ animationDelay: "330ms" }}
          >
            CCTV <span aria-hidden="true">·</span> Biometrics{" "}
            <span aria-hidden="true">·</span> Access Control{" "}
            <span aria-hidden="true">·</span> Networking
          </p>
        </div>

        {/* RIGHT — cinematic carousel */}
        <div className="animate-fade-in order-2 w-full">
          <div className="aspect-[4/3] w-full lg:aspect-[4/3.1]">
            <HeroCarousel slides={heroSlides} />
          </div>
        </div>
      </div>
    </section>
  );
}
