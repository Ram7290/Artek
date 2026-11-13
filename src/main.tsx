import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/styles/globals.css";
import { AppRoutes } from "@/routes";

const container = document.getElementById("root");
if (!container) throw new Error("root container missing");

const app = (
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);

if (container.hasChildNodes()) {
  // Hydrate prerendered static HTML (built via `npm run build:static`)
  hydrateRoot(container, app);
} else {
  // Dev/fallback: plain client render
  createRoot(container).render(app);
}
