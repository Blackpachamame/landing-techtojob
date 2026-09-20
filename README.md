# TechToJob

## Project

Official TechToJob landing page built for the web development tournament.
TechToJob is a community where developers and companies participate, build and get
to know one another. The landing explains that proposition and guides visitors to
Discord, without promising employment.

The complete landing and The Build redesign are implemented through Batches A, B
and C, including C.1 corrections, from Header to Footer. Existing SEO, structured data and social images are
preserved; the favicon adapts to light/dark browser UI. Final QA, deployment and
Lighthouse measurements remain pending.

## Stack

- Next.js 16 App Router and TypeScript.
- Tailwind CSS 4, with CSS Modules for section-specific compositions.
- Sora through `next/font/google`.
- Bun 1.3.14 or newer; Node.js 20.9 or newer for Next.js.
- Server Components for content; HeroBuildMotion and DrawOnView enhance decorative
  art, while a small MobileMenu Client Component handles closing and focus.

## Running locally

```sh
bun install
bun run dev
```

Open http://localhost:3000. Validation and production preview:

```sh
bun run lint
bunx tsc --noEmit
bun run build
bun run start
```

The build needs access to Google Fonts to obtain Sora. Next.js serves it locally
afterward, with weights 400, 600 and 700 and `display: swap`.

## Environment

Copy `.env.example` to `.env.local` for local configuration. Set `SITE_URL` to the
actual public HTTP(S) origin in the hosting environment **before the production
build**. Do not include credentials, a subpath, query or fragment. No production
domain is assumed. Rebuild whenever this value changes.

`src/config/site.ts` is the single source of truth:

| Configuration | SEO behavior |
| --- | --- |
| `SITE_URL` empty | `noindex, nofollow`; robots disallows crawling; empty sitemap; canonical and public social image URLs omitted; JSON-LD omits URL and logo. |
| `SITE_URL` configured | `index, follow`; homepage canonical and sitemap; absolute Open Graph, Twitter and Organization URLs. |

Leave `SITE_URL` empty on previews that should not be indexed. Invalid origin
values fail validation rather than producing misleading URLs.

## Project structure

```text
src/app/                 # Page, layout, global styles and SEO routes
src/components/layout/   # Header and Footer
src/components/sections/ # Landing sections
src/config/              # Central site configuration
src/lib/                 # Shared social image rendering
messages/                # Spanish content
public/brand/            # Provided official SVG assets
docs/                    # Approved visual direction and copy
```

## Content architecture

The current language is Spanish (`lang="es"`). Visible copy and SEO copy are
centralized in `messages/es.json` and imported by Server Components. Namespaces
prepare the content for future internationalization. `next-intl` was not added
because it was not a mandatory requirement; no additional locale is implemented.

## Landing sections

Hero · How it works · Talent · Companies · Tournaments · Networking · Testimonials
· News · Newsletter · Final CTA · Footer. The Header provides internal navigation.

## Design system

Sora, charcoal `#2f3436`, mint `#84c0bf` and white `#ffffff` define the brand system.
The original composition follows a premium editorial-tech direction, with strong
typography, whitespace, geometry and distinct section rhythms. Responsive layouts
adapt to desktop, tablet and mobile instead of shrinking desktop compositions.

## Assets and licenses

TechToJob brand assets were provided for this project. `public/brand/` preserves
twelve byte-for-byte SVG copies: original `Símbolo*` files map to `symbol-*`,
`v1*` to `horizontal-*`, and `v2*` to `stacked-*`, each in black, gradient, negative
and positive variants. Media-aware Next.js icon metadata selects unchanged
`symbol-positive.svg` (charcoal) for light UI and `symbol-negative.svg` (mint) for
dark UI. No theme toggle is added.

The original non-gradient horizontal and stacked SVGs contain live Sora text.
Header and Footer inline the official logo so the page font applies; Footer
namespaces the root ID to avoid duplication. Standalone use of these text-based
assets may require official outlined exports. The original stacked gradient
contains embedded raster data. Original artwork, data and colors are preserved.

The landing currently uses no external stock photographs. The site's geometry,
decorative SVG and CSS compositions are part of this implementation. No additional
license or redistribution rights are asserted for the provided brand assets.

Footer social paths are copied exactly from the official [Simple Icons repository](https://github.com/simple-icons/simple-icons):

- Discord, X and Instagram: revision [b86d5c9](https://github.com/simple-icons/simple-icons/tree/b86d5c9a0bdd4f3f5c30898a63654dd32f39fd76/icons).
- LinkedIn: verified [13.21.0 SVG](https://github.com/simple-icons/simple-icons/blob/13.21.0/icons/linkedin.svg). It is absent from current releases; the official historical source is used explicitly, not a reconstructed path.

The project's [CC0-1.0 license](https://github.com/simple-icons/simple-icons/blob/b86d5c9a0bdd4f3f5c30898a63654dd32f39fd76/LICENSE.md) and [disclaimer](https://github.com/simple-icons/simple-icons/blob/b86d5c9a0bdd4f3f5c30898a63654dd32f39fd76/DISCLAIMER.md) were verified, as was the archived release license. CC0 for Simple Icons does not imply that every brand icon is CC0 or grant trademark rights; individual brand terms still apply. The paths are local, with no package dependency or runtime icon requests.

## SEO and social sharing

Final Spanish title and description use the Next.js Metadata API. Canonical,
Open Graph, Twitter, robots and sitemap all derive public URLs from `SITE_URL`.
The homepage includes escaped Organization JSON-LD with only the confirmed name,
social profiles and, when configured, public URL and official logo.

`/opengraph-image` and `/twitter-image` return real 1200 × 630 PNGs, prerendered by
native Next.js route handlers using [ImageResponse](https://nextjs.org/docs/app/api-reference/functions/image-response).
Both share one composition with brand colors and approved landing copy. They use
the font bundled with ImageResponse (Geist in the installed Next.js version),
without runtime downloads or external assets. Sora remains the landing font.
Explicit metadata URLs avoid implicit localhost fallbacks when `SITE_URL` is absent.

## Testimonials

The current testimonials are placeholders permitted for the tournament. Before
production, replace them with real, verifiable testimonials, including a photograph
and a link to each person's LinkedIn profile.

## Newsletter

The compact charcoal strip contains a real form with an email label, autocomplete,
a disabled default submit and a visible availability message. Enter in the email
field does not submit or reload the page. There is currently no subscription provider or endpoint. The form
does not simulate a real subscription or display a false success. Connect it to
a real provider/backend before production.

## AI usage

ChatGPT and Codex supported planning and design direction, copy iteration, code
generation and refinement, and technical review. The result was reviewed and
iterated within the project; final decisions remained part of that review process.

## Accessibility / performance

Semantic landmarks, one H1, ordered heading levels, real links, explicit keyboard
focus and labeled form controls support accessibility. The mobile menu uses native
`details`/`summary`, enhanced to close on selection/Escape and move focus. Without
JavaScript it still opens and navigates, but must be closed manually. The Header
is CSS-sticky with global anchor/focus scroll padding and native smooth anchors
that respect reduced motion. Footer navigation groups eight existing anchors under
Explorar and Comunidad; its social row sits beneath the tagline. Social icons have accessible
names and 44px targets; decorative graphics are hidden from assistive technology.
Responsive checks cover 1440, 1366, 1280, 1024, 900, 820, 768, 430, 390 and 375 px.

The landing uses Server Components and static rendering. Existing GSAP and small
IntersectionObserver helpers animate decorative art once, with no-JS and reduced-motion
final states. The Final CTA reuses DrawOnView for a 1.1-second simplified Build assembly,
with the white Perfil module entering last;
no ScrollTrigger, reverse or scroll scrubbing is used. SVG geometry and CSS supply visuals without photographic downloads
or per-frame React state. Next.js supplies its standard framework client runtime.

Lighthouse targets for delivery are SEO 100, accessibility >90 and mobile performance
>90. These are targets, not measured results. Run Lighthouse against the production
deployment after setting `SITE_URL`; check keyboard use and responsive behavior too.

## Deployment

The project is prepared for Next.js-compatible platforms such as Vercel. Configure
`SITE_URL`, install with Bun and build with `bun run build`. A Node.js host can serve
the production build with `bun run start`. No deployment is claimed here.

Before production, connect Newsletter and replace the placeholder testimonials.
After deployment, verify canonical, robots, sitemap, structured data and both social
image routes on the real public origin.

## Tournament delivery

- [ ] Confirm the public repository and final submission revision.
- [ ] Deploy and verify the public production URL.
- [ ] Capture final desktop and mobile screenshots manually.
- [ ] Run Lighthouse and capture the required result.
- [ ] Submit the repository, deployment and required evidence in Discord.
