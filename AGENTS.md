# AGENTS.md

## Project

TechToJob official landing page for the tournament submission.

## Read first

Before implementing or modifying a section, read:

- docs/DESIGN.md
- docs/CONTENT.md

Treat those files as the project source of truth for visual direction, approved copy, tone, and section status.

## Stack and conventions

- Next.js 16 App Router.
- TypeScript.
- Tailwind CSS 4.
- Bun is the package manager.
- Sora is the only project font and is loaded with next/font.
- Server Components by default.
- Do not add "use client" unless the requested feature genuinely requires client-side state or browser APIs.
- Do not install new dependencies unless the task explicitly requires them.
- Do not use component kits or prebuilt template systems.
- Code, component names, variables, functions, file names, and commit messages must be in English.
- Visible product copy lives in messages/es.json. Do not scatter hardcoded product text through components.
- The project is prepared for future internationalization, but do not add next-intl or an English locale unless explicitly requested.

## Tailwind and CSS

Tailwind is the primary styling tool.

Use Tailwind for:
- layout;
- spacing;
- typography;
- colors;
- common responsive behavior;
- ordinary state styles.

CSS Modules are allowed and preferred when they make complex section-specific styling easier to read and maintain, especially for:
- pseudo-elements;
- decorative geometry;
- custom connectors;
- unusual responsive composition;
- section-specific visual rules that would become noisy as long utility strings.

Do not refactor existing approved CSS Modules into Tailwind merely for tool purity.

Do not add unnecessary global CSS.

## Brand

Use only the established TechToJob visual identity unless a task explicitly requires otherwise.

Primary colors:
- Charcoal: #2f3436
- Mint: #84c0bf
- White: #ffffff

Intermediate neutral grays may be derived from the brand colors when needed.

Important:
- Do not use mint as small body text on white.
- Preserve accessible contrast.
- Use Sora consistently.

## Product positioning

TechToJob is a community, not a job board.

The core idea:
- people participate;
- people build;
- people become known;
- opportunities can arise with more context than an anonymous CV.

Never promise guaranteed employment.

Do not invent product functionality.

Do not fabricate:
- statistics;
- user counts;
- job counts;
- employers;
- candidates;
- salaries;
- dates;
- prizes;
- testimonials presented as real;
- product screens or workflows not confirmed by the brief.

## Visual direction

The visual tone is editorial-tech, clean, direct, and community-oriented.

Avoid:
- generic SaaS layouts;
- repeated rounded cards;
- fake dashboards;
- fake forms;
- excessive iconography;
- stock-photo aesthetics;
- decorative complexity without a communication purpose.

Use whitespace intentionally.

Do not reuse the same visual device in every section. See docs/DESIGN.md for the language already assigned to approved sections.

## Accessibility and semantics

Prefer semantic HTML over ARIA.

Requirements:
- one H1 on the page;
- correct H2/H3 hierarchy;
- real anchors for navigation;
- section ids must match Header anchors;
- ordered content uses ol when order matters;
- unordered sets use ul;
- definition pairs use dl/dt/dd when appropriate;
- decorative SVG/CSS elements should be hidden from assistive technology;
- meaningful content must exist as real HTML, not only inside SVG;
- visible focus states must remain intact;
- no fake buttons or clickable divs.

## Responsive

Design intentionally for the project breakpoints and verify the section at:

- 1440
- 1366
- 1280
- 1024
- 900
- 820
- 768
- 430
- 390
- 375

Prefer readability over preserving the desktop composition.

Do not force a complex desktop visualization into mobile.

Avoid horizontal overflow.

## Performance

Do not add unnecessary client-side JavaScript.

Prefer:
- semantic HTML;
- CSS;
- lightweight inline decorative SVG when useful.

GSAP is already installed. Approved small, localized motion helpers may use GSAP
and IntersectionObserver for decorative art. Text never animates. Keep final
static visuals without JavaScript and with reduced motion. Do not add libraries.

## Existing sections

Implemented, reviewed, approved and considered closed unless a real integration bug is discovered:

- Header
- Hero
- How it works
- Talent
- Companies
- Tournaments
- Networking
- Testimonials
- News
- Newsletter
- Final CTA
- Footer

Do not make cosmetic changes to closed sections while implementing a later section.

The landing design and implementation are approved and closed. The tournament site is deployed at https://techtojob.vercel.app/ with SITE_URL configured in Vercel production. Verified Lighthouse results supplied by the author are mobile 94/100/100/100 and desktop 100/100/100/100 (Performance/Accessibility/Best Practices/SEO). Remaining delivery tasks are manual screenshots, Lighthouse evidence capture/storage, public-repository/revision confirmation and Discord submission. Newsletter integration and verified testimonials are future operational-release work documented in README.md.

## Scope discipline

For each task:
- implement only the requested section or change;
- do not continue into later sections;
- do not rewrite approved copy;
- do not redesign approved sections;
- do not install unrelated dependencies;
- do not modify infrastructure unless explicitly requested.

## Validation

Before reporting completion, run:

1. bun run lint
2. bunx tsc --noEmit
3. bun run build

Also verify the requested responsive widths visually.

If build fails only because the execution environment cannot fetch Google Fonts, report that separately from code errors.

## Git

Do not commit.
Do not push.

Only commit or push when explicitly asked.

When a commit is requested, use a concise English Conventional Commit-style message consistent with the existing history.

## Completion report

Keep the report concise.

Include:
- files created;
- files modified;
- implementation approach;
- responsive behavior;
- accessibility/semantic choices where relevant;
- lint result;
- TypeScript result;
- build result;
- any deviation from the task and why.

Do not continue with the next section unless asked.
