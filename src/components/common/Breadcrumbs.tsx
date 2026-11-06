import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import type { BreadcrumbItem } from "@/types";

export function Breadcrumbs({ items }: { items: readonly BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.to} className="flex items-center gap-1.5 min-w-0">
              {i > 0 && <ChevronRight className="size-3.5 shrink-0 text-slate-400" aria-hidden="true" />}
              {isLast ? (
                <span aria-current="page" className="truncate text-slate-500">
                  {/* first item renders the home icon + label */}
                  {i === 0 && <Home className="mr-1 inline size-3.5 align-[-2px] text-slate-400" aria-hidden="true" />}
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="truncate text-slate-500 underline-offset-4 transition-colors hover:text-accent-600 hover:underline"
                >
                  {i === 0 && <Home className="mr-1 inline size-3.5 align-[-2px]" aria-hidden="true" />}
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
