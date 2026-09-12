# TechToJob

Technical foundation for the TechToJob web development tournament landing page.
The current page only verifies the setup; landing design and final copy are pending.

## Stack and requirements

- Next.js 16 App Router, TypeScript, React, Tailwind CSS 4 and ESLint.
- Bun 1.3.14 or newer is the only package manager; commit `bun.lock`.
- Node.js 20.9 or newer runs Next.js. Bun is not the deployment runtime.
- Next.js and React versions follow the official create-next-app 16.3.5 template.

## Commands

```sh
bun install
bun run dev
bun run lint
bun run build
```

Development is available at http://localhost:3000. After a build, `bun run start`
serves the production application. The build needs access to Google Fonts for
`next/font/google`; Sora is then served locally by Next.js with weights 400, 600 and 700.

## Project structure

```text
src/
  app/                 # Layout, verification page, global tokens, robots and sitemap
  components/
    layout/
    sections/
    ui/
  config/site.ts       # Single source for the future public site URL
  lib/
messages/es.json
public/
  brand/
  images/
```

Unused directories exist locally without placeholder files; Git will track them
when real files are added. Future raster assets should prefer WebP or AVIF.

## Content and styling

`messages/es.json` contains the Metadata, Navigation, Hero, HowItWorks, Talent,
Companies, Tournaments, Networking, Testimonials, News, Newsletter, FinalCTA and
Footer namespaces. Only provisional metadata and the verification heading have
values. Server Components currently import the Spanish messages directly.

English support can later add `messages/en.json` with the same keys and a solution
such as next-intl. Locale routing, language switching and translation dependencies
are intentionally deferred. Keep future visible copy in the message files.

`src/app/globals.css` defines `brand-dark` (#2f3436), `brand-mint` (#84c0bf) and
`brand-white` (#ffffff). The body uses dark text on white; mint is decorative.
Sora is configured globally in `src/app/layout.tsx`. All application components
are Server Components; the framework still supplies its standard client runtime.

## Brand assets

`public/brand/` contains twelve byte-for-byte SVG copies. Original `Símbolo*`
files map to `symbol-*`, `v1*` to `horizontal-*`, and `v2*` to `stacked-*`.
Each set has `black`, `gradient`, `negative` and `positive` variants.
The unchanged `symbol-positive.svg` is configured as the favicon.

The original non-gradient horizontal and stacked SVGs contain live text referencing
Sora. When used as standalone images they may fall back to another font; request
official outlined exports before using those variants in the landing. The original
stacked gradient already contains embedded raster data. No artwork, embedded data
or colors were altered, including the original positive fill of #303436.

## Production URL and SEO

Set `SITE_URL` to the actual public origin in `.env.local` or the hosting environment
**before the production build/deployment**; `.env.example` documents the variable.
`src/config/site.ts` is its single configuration entry point, shared by metadata,
robots and sitemap. No production domain is assumed.

Until `SITE_URL` is set, metadata requests no indexing, robots disallows crawling,
and the sitemap is empty. Once configured and rebuilt, robots allows crawling and
the sitemap includes the homepage. Replace provisional Spanish metadata before
launch. The document language is Spanish; viewport uses the Next.js Viewport API.

Future commit messages and technical identifiers should be written in English.
