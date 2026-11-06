import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { coreServices } from "@/data/services";
import { company } from "@/data/company";

/**
 * 404 page. For static hosting, dist/404.html is generated from this route by
 * scripts/prerender.mjs; hosts serving it return the 404 status code.
 */
export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-navy-950 pb-20 pt-32 text-white">
      <div className="container-page text-center">
        <p className="text-7xl font-extrabold tracking-tight text-accent-600 sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">This page can&apos;t be found</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-slate-300 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Try one of our main
          services below, or call {company.phoneDisplay} and we&apos;ll point you to the right place.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent-600 px-6 font-semibold text-white transition-colors hover:bg-accent-700"
          >
            <Home className="size-4" aria-hidden="true" />
            Back to homepage
          </Link>
          <a
            href="/"
            onClick={(e) => {
              /* soft attempt at router-back for SPA users */
              if (window.history.length > 1) {
                e.preventDefault();
                window.history.back();
              }
            }}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/25 px-6 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Go back
          </a>
        </div>
        <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {coreServices.slice(0, 6).map((s) => (
            <li key={s.slug}>
              <Link
                to={`/solutions/${s.slug}`}
                className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-slate-200 transition-colors hover:border-white/40 hover:text-white"
              >
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
