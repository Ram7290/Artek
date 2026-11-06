import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "@/routes";

/**
 * SSR entry used by scripts/prerender.mjs.
 * Vite compiles this to Node ESM. CSS and fonts are applied through the
 * client build; this function only returns the rendered body markup.
 */
export function renderPage(path: string): string {
  return renderToString(
    <StaticRouter location={path}>
      <AppRoutes />
    </StaticRouter>,
  );
}
