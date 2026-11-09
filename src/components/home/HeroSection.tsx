import { ArrowRight, Phone, ShieldCheck, BadgeCheck, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { heroSlides } from "@/data/heroSlides";
import { company } from "@/data/company";

/**
 * Homepage hero — fully responsive (320px → 2xl).
 * Mobile/tablet: single column (text first, carousel below).
 * Desktop (lg+): two columns 44/56.
 * Typography uses fluid clamp() sizes so letters scale smoothly
 * on every screen width, not only at breakpoints.
 */
export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-mist"
      aria-labelledby="hero-heading"
    >
      {/* Background composition (decorative) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 via-white/5 to-transparent sm:h-32" />
        {/* bloom scales with viewport instead of fixed 46rem */}
        <div
          className="absolute left-[-30%] top-[2%] aspect-square w-[90vw] max-w-[46rem] rounded-full sm:left-[-20%] lg:left-[-14%] lg:top-[4%] lg:w-[46rem]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.07), rgba(255,255,255,0.03) 55%, rgba(255,255,255,0) 100%)",
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full"
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
              <path d="M48 0H0V48" fill="none" stroke="#FFFFFF" strokeOpacity="0.055" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-fine-grid)" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-transparent to-mist-2 sm:h-24" />
      </div>

      <div className="container-page relative grid items-center gap-8 px-4 pt-24 pb-10 sm:gap-10 sm:px-6 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 lg:grid-cols-[44fr_56fr] lg:gap-12 lg:px-8 lg:pt-24 lg:pb-20 xl:gap-14 xl:pt-28 xl:pb-24">
        {/* LEFT — content */}
        <div className="order-1 min-w-0 text-center lg:text-left">
          <p className="animate-fade-up inline-flex flex-wrap items-center justify-center gap-2 text-[clamp(0.625rem,0.58rem+0.2vw,0.72rem)] font-bold uppercase tracking-[0.12em] text-azure sm:tracking-[0.14em] lg:justify-start">
            <ShieldCheck className="size-3.5 shrink-0" aria-hidden="true" />
            {company.heroEyebrow}
          </p>

          <h1
            id="hero-heading"
            className="animate-fade-up text-ink mt-4 text-balance font-extrabold leading-[1.1] tracking-tight sm:mt-5"
            style={{
              animationDelay: "70ms",
              fontSize: "clamp(2rem, 1.3rem + 3.2vw, 3.6rem)",
            }}
          >
            One Partner.
            <br />
            Complete <span className="text-azure">Protection.</span>
          </h1>

          <p
            className="animate-fade-up text-slate-300 mx-auto mt-4 max-w-xl text-pretty leading-relaxed sm:mt-5 lg:mx-0"
            style={{
              animationDelay: "140ms",
              fontSize: "clamp(0.9375rem, 0.88rem + 0.3vw, 1.0625rem)",
              lineHeight: 1.75,
            }}
          >
            Smarter security and integrated technology solutions for homes and businesses across the UAE.
          </p>

          {/* CTAs: stacked full-width on phones, inline from sm */}
          <div
            className="animate-fade-up mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
            style={{ animationDelay: "210ms" }}
          >
            <Link
              to="/contact"
              className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-azure px-5 text-sm font-semibold text-black shadow-lg shadow-azure/25 transition-all duration-300 hover:bg-azure-deep hover:shadow-azure/35 focus-visible:outline-2 focus-visible:outline-azure sm:h-12 sm:w-auto sm:px-7 sm:text-[15px]"
            >
              Get a Free Consultation
              <ArrowRight
                className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <a
              href={company.phoneHref}
              className="text-ink inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-hairline bg-mist-2 px-5 text-sm font-semibold shadow-sm transition-all duration-300 hover:border-azure/50 hover:text-azure-deep focus-visible:outline-2 focus-visible:outline-azure sm:h-12 sm:w-auto sm:px-7 sm:text-[15px]"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              Talk to Our Team
            </a>
          </div>

          {/* credibility chips */}
          <ul
            className="animate-fade-up mt-7 flex flex-wrap items-center justify-center gap-2 sm:mt-8 lg:justify-start"
            style={{ animationDelay: "270ms" }}
          >
            {company.heroCredentials.map((c) =>
              c.primary ? (
                <li key={c.label}>
                  <span className="inline-flex min-h-6 items-center gap-1.5 rounded-full border border-azure/30 bg-mist-2 py-0.5 pl-1 pr-2.5 shadow-sm shadow-azure/10">
                    <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-azure text-black">
                      <ShieldCheck className="size-2.5" aria-hidden="true" />
                    </span>
                    <span className="text-[11px] font-bold text-azure-deep">
                      {c.label}
                    </span>
                  </span>
                </li>
              ) : (
                <li
                  key={c.label}
                  className="text-ink/60 inline-flex min-h-6 items-center gap-1 rounded-full border border-hairline bg-white/10 px-2 text-[11px] font-semibold"
                >
                  {c.icon === "badge-check" && (
                    <BadgeCheck className="size-3 shrink-0" aria-hidden="true" />
                  )}
                  {c.icon === "users" && <Users className="size-3 shrink-0" aria-hidden="true" />}
                  {c.icon === "map-pin" && (
                    <MapPin className="size-3 shrink-0" aria-hidden="true" />
                  )}
                  {c.label}
                </li>
              ),
            )}
          </ul>

          <p
            className="animate-fade-up text-ink/60 mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-[11px] sm:tracking-[0.22em]"
            style={{ animationDelay: "330ms" }}
          >
            CCTV <span aria-hidden="true">·</span> Biometrics{" "}
            <span aria-hidden="true">·</span> Access Control{" "}
            <span aria-hidden="true">·</span> Networking
          </p>
        </div>

        {/* RIGHT — carousel */}
        <div className="animate-fade-in order-2 mx-auto w-full min-w-0 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[4/3.1]">
            <HeroCarousel slides={heroSlides} />
          </div>
        </div>
      </div>
    </section>
  );
}