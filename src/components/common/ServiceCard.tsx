import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cctv,
  Cloud,
  Monitor,
  Network,
  Phone,
  Server,
  Shield,
  Wrench,
} from "lucide-react";
import type { Service } from "@/types";

const ICONS = {
  cloud: Cloud,
  monitor: Monitor,
  network: Network,
  phone: Phone,
  cctv: Cctv,
  wrench: Wrench,
  server: Server,
  shield: Shield,
} as const;

/**
 * Solution card — flat editorial style.
 * Deliberately the opposite of the IndustriesSection cards: no visual
 * header, no photography, no halo. Identity comes from typography:
 * ghost index number, small icon tile that inverts on hover, and a
 * single stretched title link (footer row is decorative).
 */
export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Shield;
  const to = `/solutions/${service.slug}`;

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-mist-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-(--shadow-card-hover) focus-within:border-white/40">
      <div className="flex items-start justify-between gap-4">
        <span className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-inset ring-white/15 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
          <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span
          aria-hidden="true"
          className="text-sm font-bold tabular-nums tracking-widest text-white/25"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">
        <Link
          to={to}
          className="transition-colors after:absolute after:inset-0 after:rounded-2xl hover:text-accent-600"
        >
          {service.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
        {service.shortDescription}
      </p>
      <span
        aria-hidden="true"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white"
      >
        Explore solution
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </article>
  );
}
