import { Link } from "react-router-dom";
import {
  ArrowUpRight,
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
 * Identity comes from typography: ghost index, a small icon tile that fills
 * in on hover, and a single stretched title link. The card sits one step
 * above its band (`surface-2` band → `surface` card) so it separates by
 * contrast as well as by its hairline.
 */
export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Shield;

  return (
    <article className="group relative flex h-full flex-col rounded-(--radius-card) border border-white/[0.08] bg-surface p-6 transition-[border-color,background-color] duration-300 hover:border-white/20 hover:bg-[#0D0D0F] focus-within:border-white/35">
      <div className="flex items-start justify-between gap-4">
        <span className="flex size-11 items-center justify-center rounded-lg border border-white/10 text-text-muted transition-colors duration-300 group-hover:border-paper group-hover:bg-paper group-hover:text-surface">
          <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
        </span>
        <span
          aria-hidden="true"
          className="font-display text-[13px] font-medium tabular-nums tracking-wider text-white/25"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-6 text-[17px] font-semibold leading-snug tracking-tight text-text">
        <Link
          to={`/solutions/${service.slug}`}
          className="transition-colors after:absolute after:inset-0 after:rounded-(--radius-card)"
        >
          {service.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-text-muted">
        {service.shortDescription}
      </p>
      <span
        aria-hidden="true"
        className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-text-muted transition-colors group-hover:text-text"
      >
        Explore
        <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </article>
  );
}
