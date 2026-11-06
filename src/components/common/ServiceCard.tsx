import { Link } from "react-router-dom";
import { ArrowCTA } from "@/components/common/CTAButton";
import type { Service } from "@/types";

/**
 * Solution card for the homepage grid and listings.
 * Image lazy-loads (below the fold) with explicit dimensions to prevent CLS.
 */
export function ServiceCard({ service, priority = false }: { service: Service; priority?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-mist-2 shadow-(--shadow-card) transition-shadow duration-300 hover:shadow-(--shadow-card-hover)">
      <Link to={`/solutions/${service.slug}`} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
        <img
          src={service.image}
          alt={service.imageAlt}
          width={640}
          height={400}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-ink">
          <Link to={`/solutions/${service.slug}`} className="transition-colors hover:text-accent-600">
            {service.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">{service.shortDescription}</p>
        <ArrowCTA to={`/solutions/${service.slug}`} className="mt-4">
          Explore More
        </ArrowCTA>
      </div>
    </article>
  );
}
