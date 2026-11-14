import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { heroSlides } from "@/data/heroSlides";
import { company } from "@/data/company";

/**
 * Homepage hero — fully responsive (320px → 2xl).
 * Mobile/tablet: single column (text first, carousel below).
 * Desktop (lg+): two columns, copy slightly narrower than the imagery.
 *
 * Three elements only above the fold: eyebrow, one promise, one action.
 * Credential chips and the service-word row were removed — proof now lives
 * in the strip directly beneath the hero (TrustIndicators).
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface" aria-labelledby="hero-heading">
      {/* Background composition (decorative) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 via-white/5 to-transparent sm:h-32" />
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
            <pattern id="hero-fine-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="#FFFFFF" strokeOpacity="0.055" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-fine-grid)" />
        </svg>
      </div>

      <div className="container-page relative grid items-center gap-10 pt-28 pb-14 sm:gap-12 sm:pt-32 sm:pb-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 lg:pt-32 lg:pb-20 xl:gap-20 xl:pt-36">
        {/* LEFT — content */}
        <div className="order-1 min-w-0 text-center lg:text-left">
          <p className="animate-fade-up inline-flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted lg:justify-start">
            <ShieldCheck className="size-3.5 shrink-0" aria-hidden="true" />
            {company.heroEyebrow}
          </p>

          <h1
            id="hero-heading"
            className="display-title animate-fade-up mt-5 text-text sm:mt-6"
            style={{
              animationDelay: "70ms",
              fontSize: "clamp(2.4rem, 1.5rem + 3.6vw, 4.25rem)",
            }}
          >
            One partner.
            <br />
            Every system <em className="not-italic text-white/55">covered.</em>
          </h1>

          <p
            className="animate-fade-up mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-text-muted sm:mt-6 lg:mx-0"
            style={{
              animationDelay: "140ms",
              fontSize: "clamp(0.9375rem, 0.88rem + 0.3vw, 1.0625rem)",
              lineHeight: 1.75,
            }}
          >
            Security, networking and IT for homes and businesses across the UAE —
            surveyed, installed and supported by one accountable team.
          </p>

          {/* CTAs: stacked full-width on phones, inline from sm */}
          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
            style={{ animationDelay: "210ms" }}
          >
            <Link
              to="/contact"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-paper px-6 text-[15px] font-semibold text-surface transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper sm:w-auto sm:px-7"
            >
              Get a free site survey
              <ArrowRight
                className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-6 text-[15px] font-semibold text-text transition-colors duration-200 hover:border-white/40 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper sm:w-auto sm:px-7"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
          </div>
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
