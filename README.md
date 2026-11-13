# ARTEK Computers LLC — Corporate Website

Premium business website for **Artek Computers LLC**, a Dubai-based IT integrated
systems company. React 19 + TypeScript + Vite + Tailwind CSS v4.

## Quickstart

```bash
npm install
npm run dev            # dev server
npm run build:static   # client build + SSR build + static prerender (39 pages) + sitemap
npm run preview        # serve dist/
npm run typecheck      # tsc --noEmit
```

## Static prerendering (SEO)

`npm run build:static` compiles the app once for the browser and once for Node
(`vite.ssr.config.ts`), then `scripts/prerender.mjs`:

1. renders every crawlable route through `react-dom/server` (StaticRouter),
2. injects route-specific `<title>`, description, canonical, Open Graph,
   JSON-LD and LCP preloads into each HTML file,
3. writes `dist/<route>/index.html` (and `dist/404.html`).

All SEO data comes from `src/data/seo.ts` via `resolvePageSeo(path)`, which is
also used at runtime by `<SEOHead />` for client-side navigation.metadata.

- Sitemap: `scripts/generate-sitemap.mjs` → `dist/sitemap.xml`
- Robots: `public/robots.txt`
- `ALL_SEO_PATHS` in `src/data/seo.ts` is the single registry of routes — adding
  a service/location entry automatically adds its page, prerender and sitemap URL.

## Adding content

| Task | File |
|---|---|
| New solution / SEO landing page | `src/data/services.ts` (one entry; template renders it) |
| New service area | `src/data/locations.ts` |
| Location × service page | `combos` in the location entry (unique `localPitch` required) |
| Industry | `src/data/industries.ts` |
| Product category | `src/data/industries.ts` → `productCategories` |
| Hero carousel slide | `src/data/heroSlides.ts` + image in `public/images/hero/` |
| Company contact details | `src/data/company.ts` (email/address must be filled by ARTEK) |
| Brand partners | `src/data/industries.ts` → `partners` |

## Contact form wiring

`src/lib/submissions.ts` posts lead JSON to `VITE_ENQUIRY_ENDPOINT`
(see `.env.example`) — backend, email provider or CRM. Until configured the
form is clearly labelled **Demo mode** and fakes nothing.

## Claims that ARTEK must verify before production

Everything flagged `pending-verification` in `src/data/company.ts` (trust
indicators — SIRA, Dubai Police, 15+ years, 500+ clients, 24/7 support) and the
"SIRA-Certified Engineers / no-subcontracting / same-day response / Computer
Street" wording in `src/components/home/WhyChooseArtek.tsx`.

Also to resolve:

- **Brand partners render as wordmark placeholders** until confirmed partner
  status + logo assets exist (`public/logos/`).
- **Hero slide images are representative stock photography** (downloaded from
  Unsplash to `public/images/hero/`) — NOT ARTEK project photos; swap with
  project or licensed imagery (1600×1200 WebP, same filenames).
- **Biometrics / access control / video intercom** appear in the hero but have
  no service pages yet — add them to `services.ts` or confirm scope.
- **Email, office address, business hours, socials** are `null` until confirmed.
- Legal pages are draft templates needing company review.

## Hosting notes

- Unknown paths: serve `dist/404.html` with a 404 status (Netlify
  `/* /404.html 404` redirect; Vercel `"trailingSlash": false` + `404` in
  `vercel.json`; nginx `error_page 404 /404.html`).
- Deploy the whole `dist/` folder; enable Brotli/gzip and long-lived caching
  for `/assets/*` (hashed).
