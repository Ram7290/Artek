import { Link } from "react-router-dom";
import { Phone, ShieldCheck, ArrowRight, Wifi, Video } from "lucide-react";
import { company } from "@/data/company";

/**
 * Hero — split screen.
 * Left: copy + CTAs. Right: CSS/SVG CCTV + laptop composition.
 * The visual is pure vector/DOM (no images) so the LCP text paints instantly;
 * animations are transform/opacity only and respect prefers-reduced-motion.
 */
export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-navy-950 text-white"
      aria-labelledby="hero-heading"
    >
      {/* decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[34rem] w-[34rem] rounded-full bg-accent-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-400/10 blur-[100px]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M44 0H0V44" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="container-page relative grid min-h-[40rem] items-center gap-12 pb-16 pt-32 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-36">
        {/* LEFT — copy */}
        <div>
          <p className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-400">
            IT Integration &amp; Security Solutions
          </p>
          <h1
            id="hero-heading"
            className="animate-fade-up text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-[3.5rem]"
            style={{ animationDelay: "80ms" }}
          >
            IT solutions, CCTV and networking for businesses in{" "}
            <span className="bg-gradient-to-r from-accent-500 to-accent-400 bg-clip-text text-transparent">
              Dubai
            </span>
            .
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {company.heroDescription}
          </p>
          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent-600 px-7 text-base font-semibold text-white shadow-lg shadow-accent-600/25 transition-colors hover:bg-accent-700"
            >
              Request a Free Quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {company.phoneDisplay}
            </a>
          </div>
          <p
            className="animate-fade-up mt-6 flex items-center gap-2 text-sm text-slate-400"
            style={{ animationDelay: "320ms" }}
          >
            <ShieldCheck className="size-4 text-accent-400" aria-hidden="true" />
            SIRA-Approved CCTV Solutions
            {/* TODO(Artek): confirm current SIRA approval wording before production */}
          </p>
        </div>

        {/* RIGHT — animated CCTV + laptop composition */}
        <div className="relative mx-auto w-full max-w-lg md:max-w-none" aria-hidden="false">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div
      className="animate-fade-in relative mx-auto aspect-[4/3.4] w-full max-w-[34rem]"
      role="img"
      aria-label="Professional CCTV security camera monitoring a modern laptop with a live multi-camera dashboard"
    >
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-600/25 blur-[90px]" />

      {/* CCTV camera (SVG) — main object, gently floating */}
      <div className="animate-float absolute -top-2 right-2 w-[52%] drop-shadow-2xl sm:right-4">
        <CameraSVG />
      </div>

      {/* Laptop with monitoring dashboard */}
      <div
        className="absolute bottom-0 left-0 w-[64%] origin-bottom [transform:rotateX(2deg)rotateY(-4deg)] sm:left-2"
        style={{ transformStyle: "preserve-3d" }}
      >
        <LaptopMock />
      </div>

      {/* floating UI chips */}
      <div className="animate-float-slow absolute right-0 top-[62%] flex items-center gap-2 rounded-lg border border-white/10 bg-navy-850/80 px-3 py-2 text-xs font-medium text-slate-200 shadow-xl backdrop-blur">
        <Video className="size-4 text-accent-400" />
        <span className="inline-block size-2 rounded-full bg-red-500 animate-blink" aria-hidden="true" />
        REC · 4 channels
      </div>
      <div className="animate-float absolute left-[6%] top-[16%] flex items-center gap-2 rounded-lg border border-white/10 bg-navy-850/80 px-3 py-2 text-xs font-medium text-slate-200 shadow-xl backdrop-blur [animation-delay:1.2s]">
        <Wifi className="size-4 text-emerald-400" />
        Network 1 Gbps
      </div>
      <div className="animate-float-slow absolute bottom-[16%] right-[8%] flex items-center gap-2 rounded-lg border border-white/10 bg-navy-850/80 px-3 py-2 text-xs font-medium text-slate-200 shadow-xl backdrop-blur [animation-delay:2s]">
        <span className="inline-block size-2 rounded-full bg-emerald-400" aria-hidden="true" />
        Monitoring LIVE
      </div>
    </div>
  );
}

/** Bullet-style CCTV camera drawn in SVG so it stays crisp at any density. */
function CameraSVG() {
  return (
    <svg viewBox="0 0 380 220" className="w-full">
      <defs>
        <linearGradient id="camBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E7EDF6" />
          <stop offset="0.5" stopColor="#C3CEDD" />
          <stop offset="1" stopColor="#8C9BB1" />
        </linearGradient>
        <linearGradient id="camShroud" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#233047" />
          <stop offset="1" stopColor="#101828" />
        </linearGradient>
        <radialGradient id="lensGlass" cx="0.35" cy="0.3" r="0.9">
          <stop offset="0" stopColor="#7DD3FC" />
          <stop offset="0.35" stopColor="#0369A1" />
          <stop offset="1" stopColor="#0A1225" />
        </radialGradient>
      </defs>
      {/* mount bracket */}
      <path d="M96 84 L150 120 L142 140 L88 106 Z" fill="url(#camShroud)" />
      <path d="M84 60 L108 60 L112 96 L88 96 Z" fill="#1B2437" />
      <circle cx="98" cy="57" r="9" fill="#2E3D59" />
      {/* camera body */}
      <g transform="rotate(24 230 120)">
        <rect x="130" y="92" width="180" height="64" rx="32" fill="url(#camBody)" />
        {/* sun shroud */}
        <path d="M136 92 h150 l14 -12 h-150 l-14 12 Z" fill="url(#camShroud)" />
        <rect x="150" y="86" width="160" height="10" rx="5" fill="#2A3B51" />
        {/* lens housing */}
        <circle cx="322" cy="124" r="30" fill="url(#camShroud)" />
        <circle cx="322" cy="124" r="21" fill="#31405C" />
        <circle cx="322" cy="124" r="14" fill="url(#lensGlass)" />
        <circle cx="317" cy="119" r="3.5" fill="#BAE6FD" opacity="0.85" />
        {/* status LED */}
        <circle cx="292" cy="108" r="3" fill="#F87171" />
        {/* rear cap */}
        <rect x="126" y="98" width="8" height="52" rx="4" fill="#9AA8BC" />
        {/* cable */}
        <path d="M126 130 C 90 138, 84 160, 96 178" stroke="#1B2437" strokeWidth="7" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** Laptop with a small live surveillance dashboard rendered as DOM (no images). */
function LaptopMock() {
  const feeds = [
    { title: "Entrance", grad: "from-sky-900 via-navy-900 to-slate-800", rec: true },
    { title: "Warehouse", grad: "from-indigo-950 via-navy-850 to-slate-700", rec: true },
    { title: "Lobby", grad: "from-slate-800 via-navy-900 to-sky-950", rec: false },
    { title: "Loading Bay", grad: "from-navy-700 via-slate-800 to-navy-950", rec: true },
  ];
  return (
    <div>
      <div className="overflow-hidden rounded-xl border-4 border-slate-700/80 bg-slate-900 shadow-2xl">
        {/* laptop screen */}
        <div className="bg-navy-950 p-2.5">
          <div className="flex items-center justify-between px-1 py-1 text-[9px] font-medium text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
              NVR-ONLINE · 8 CHANNELS
            </span>
            <span className="tabular-nums">ET 09:14</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {feeds.map((f) => (
              <div key={f.title} className={`relative aspect-[16/9] overflow-hidden rounded bg-gradient-to-br ${f.grad}`}>
                {/* mini camera glyph */}
                <svg viewBox="0 0 24 12" className="absolute left-1/2 top-1/2 w-9 -translate-x-1/2 -translate-y-1/2 opacity-40" aria-hidden="true">
                  <rect x="1" y="2" width="14" height="6" rx="3" fill="#94a3b8" transform="rotate(-12 8 5)" />
                  <rect x="15" y="4.6" width="4" height="2.6" rx="1.3" fill="#64748b" transform="rotate(-12 17 6)" />
                </svg>
                <div className="absolute left-1.5 top-1.5 flex items-center gap-1">
                  {f.rec && <span className="inline-block size-1.5 rounded-full bg-red-500 animate-blink" />}
                  <span className="text-[8px] font-semibold text-white/80">{f.title}</span>
                </div>
                {/* timeline bar */}
                <div className="absolute bottom-1 left-1.5 right-1.5 h-[3px] rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-accent-400/80" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* laptop base */}
      <div className="relative -mx-4 h-3.5 rounded-b-xl rounded-t-sm bg-gradient-to-b from-slate-500/80 to-slate-700 shadow-xl">
        <div className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-md bg-slate-800" />
      </div>
    </div>
  );
}
