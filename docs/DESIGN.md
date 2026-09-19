# TechToJob - Current Design Direction

## Art direction and source of truth

TechToJob is a community: participation creates context, connections and
opportunities for conversation. The landing is editorial, technical and human.
Build its identity through typography, negative space and purposeful geometry.
messages/es.json owns all visible product copy and URLs; docs/CONTENT.md records
the approved content. Preserve section order, positioning and SEO.

The Build is the approved Hero North Star. It establishes a shared visual grammar,
not a template to repeat across every section. Avoid generic SaaS layouts, card
grids, dashboards, fake interfaces, invented metrics, badges and stock imagery.

## The Build

A modular 2.5D brand illustration derived from the official TechToJob symbol.
It is NOT an official logo variant. Header and Footer retain the official artwork.

The central mint body, white Perfil module, mint Torneo and Empresa modules,
restrained joints and exposed interior express construction through contributions.
The complete object belongs to Hero; subsequent sections use selected fragments.

Static geometry is precomputed in heroBuildGeometry.ts. Each external module has
one top face and one side path; no stacks of translated symbol copies. Desktop
and tablet have two interior levels; mobile has one. Depth comes from geometry,
overlap and derived tones. Joints use 1.75 source-unit offsets, approximately 27%
less than the original 2.4. The recess/floor have stronger tonal separation.

Hero contains 15 SVG paths per desktop/tablet composition and 14 for mobile.
The three CSS-selected compositions total 44 paths, with no filters or masks.

## Shared visual grammar

- **Slab:** one face and a restrained darker side. At most one strong slab per
  section. No large shadow.
- **Joint:** a narrow dark meeting between modules; subordinate to the faces.
- **Cut:** a stepped opening exposing interior context. Use for seeing inside or
  reading related information.
- **Terminal:** a rounded square derived from the symbol's terminals. Use for
  sequence stations or a meaningful anchor, not every bullet.
- **Rail:** a 1.5-2px line for genuinely sequential content. Prefer straight
  geometry; large-radius transitions only when the route requires them.

## Palette and typography

Sora is the only landing font, loaded through next/font.
Brand colors: charcoal #2f3436, mint #84c0bf and white #ffffff.
Only derived tones and transparency are allowed. No gradients, glow,
glassmorphism, large shadows or extra accents in the redesigned sections.

The global stylesheet defines six reusable tones:
--build-side, --build-white-side, --build-recess, --build-floor,
--build-edge and --build-muted-line. Their values derive only from the brand.

Use charcoal for small text on light backgrounds. Mint is a fill, decorative line
or sufficiently large accent on white; it must not compromise legibility.
Use strong headings, comfortable paragraph measures and restrained annotations.
One H1; H2/H3 reflect content hierarchy. Eyebrows remain paragraphs.
Preserve copy exactly; use responsive type and wrapping rather than forced breaks.

## Layout and background rhythm

Desktop uses deliberate asymmetry and substantial graphics; text remains readable
and separate from decorative surfaces. Tablet restructures content before columns
become narrow. Mobile is an intentional vertical composition, not scaled desktop.

Target final rhythm and implementation state:

| Section | Background | Current redesign status |
| --- | --- | --- |
| Header | Charcoal | Existing functional header; polish pending Batch C |
| Hero | Charcoal | Implemented / approved North Star; Batch A fixes implemented |
| How it works | White | Implemented in Batch A |
| Talent | Mint | Implemented in Batch A |
| Companies | Charcoal | Implemented in Batch A |
| Tournaments | White with mint proof band | Direction defined; redesign pending Batch B |
| Networking | Charcoal | Direction defined; redesign pending Batch B |
| Testimonials | White | Direction defined; redesign pending Batch B |
| News | Derived near-white | Direction defined; redesign pending Batch B |
| Newsletter | Mint compact strip | Direction defined; redesign pending Batch C |
| Final CTA | Charcoal | Direction defined; redesign pending Batch C |
| Footer | Derived deeper charcoal | Direction defined; redesign pending Batch C |

Later sections still have their existing implementation. Their target backgrounds
and layouts are documented here but have not been applied by Batch A.

## Motion and progressive enhancement

TEXT NEVER ANIMATES, including Hero annotations, numbers, labels and profile data.
Animate only decorative paths and independent background surfaces. No loops,
floating, breathing, cursor effects, particles, manual scroll listeners,
per-frame React state or unnecessary timelines.

Server HTML renders complete, usable content and final decorative art. No text
waits for hydration. Reserve graphic dimensions to avoid layout shifts.
Do not use blocking/pre-hydration scripts, loaders or globally hidden art.

Reduced motion immediately shows the final state, with no draw, assembly or
reveals. Media-query changes and unmount disconnect observers and revert local
animations. A completed animation does not replay on re-entry.

Hero uses a small HeroBuildMotion controller. Desktop may begin at mount;
tablet/mobile wait for the active scene to become meaningfully visible through
IntersectionObserver. Its threshold adapts to scene and viewport height, up to 30%.
The draw lasts 0.8s, body enters at 0.5s, modules assemble from 0.9-1.7s and
the cut resolves around 1.5-1.85s. Module opacity reaches 1 within the first third
of movement. Only guides finish near 2.1s; annotations stay static.
No subsequent scroll motion or connecting line to the following section.

How it works and Companies share DrawOnView. It observes the actual composition,
then animates only data-draw paths and data-reveal decorative surfaces once.
The visibility threshold adapts to tall mobile content. It uses no React state.
Talent is intentionally static.

useLayoutEffect reduces the post-hydration initialization gap. Server art still
appears before JavaScript on a slow load; a brief transition from final static art
to the drawing start can remain. Progressive enhancement takes precedence over
hiding the server-rendered graphic.

## Section directions

### Header and Hero

Preserve the official logo, current navigation and native mobile menu. Only a
short-desktop height adjustment is part of Batch A; navigation polish is Batch C.

Hero uses approximately 48% copy and 52% illustration on desktop. Copy aligns
from the top independently of the art. Typography and spacing respond to viewport
width AND height; no forced minimum height pushes the CTA down.
With Header visible, all copy and CTA must fit at 1366x650, 1280x620, 1440x760
and 1024x700. Art may extend below the fold before sacrificing the primary CTA.

Tablet (768-1023) uses stacked copy and its own wide art composition.
Mobile uses a compact single-level cut, Perfil and Comunidad annotations and
approximately 40px or more of breathing space after the CTA. At narrow widths,
remove a secondary annotation before making it illegible. Height follows the
complete copy; it is not locked to an 844px frame.

### How it works

White editorial process; real ol with all four steps and approved paragraphs.
Desktop (1280+) has one horizontal charcoal rail, four rounded-square terminals
and large numbers aligned with their stations. No waves, zigzags or cards.
Tablet uses a 2x2 ordered arrangement with one short rail per row.
Mobile has a left vertical rail and copy to the right, connected using actual
row heights. Rail draw and terminal resolution complete within approximately
1.05s. Numbers and all text remain static.
Decorative primitives: 5 visible on desktop, 6 on tablet, 7 on mobile (10 in DOM).

### Talent

Mint background and one extracted white Perfil slab with a chamfered lower corner,
rounded terminals' influence, a small darker side and thin charcoal separators.
Keep Stack, Nivel and Disponibilidad as real dl/dt/dd pairs with approved values.
Empresa sits in a normal-flow closing row tied to the module edge by a rule and
one terminal. No invented technologies, people, companies or icons.
The note stays outside the slab as a plain editorial line.
The slab stacks below the copy on smaller screens. No motion.
No SVG: two CSS surfaces and one small terminal supply the geometry.

### Companies

Charcoal background and one sectional cut. Publicas lo que buscas sits at its
opening. Perfil, Lo que construye and Cómo participa remain semantic ul/li content,
on three progressively offset horizontal bands with one coherent side/depth plane.
No separate bordered boxes, branching or feature cards.
Only the band backgrounds reveal top to bottom, in approximately 0.71s.
The note is a large editorial closing line outside the cut.
Tablet/mobile stack the composition and reduce offsets without shrinking text.
One SVG side-face path plus three CSS band surfaces and a bottom depth surface.

### Tournaments - Batch B

White with mint proof band. Preserve the real Reto, Entrega, Jurado, Resultado
sequence and the existing semantic definition pairs. A restrained sequential rail
may connect terminal stations; typography and the real proof statement lead.
The transformation from challenge to usable result supplies the visual meaning.
No invented dates, prizes, judges or actions.

### Networking - Batch B

Charcoal. Expand relationships using restrained fragments of the Build grammar
and the three approved signals. Preserve the explanatory copy and closing note.
Discord remains a lower-emphasis editorial link. No fake chat, avatars, channel
names or repeated complete Hero object.

### Testimonials - Batch B

White editorial reading space with four semantic figure/blockquote/figcaption
entries. Preserve the existing placeholder status and approved content; use
typography, rules and initials instead of fabricated photography or ratings.
Minimal decorative motion, if any; quotes never animate.

### News - Batch B

Derived near-white newsroom. One primary story and two secondary stories, real
articles/headings and existing external links. Avoid card grids and invented
dates, thumbnails or posts. Keep the time-sensitive approved copy unchanged
unless explicitly authorized for revision.

### Newsletter - Batch C

Compact mint strip. Approved copy and semantic email form, clear label, usable
input and disabled submission until a real integration exists. Preserve the
availability message; never simulate a successful subscription.

### Final CTA - Batch C

Charcoal typographic close and convergence of selected Build fragments.
The real Discord anchor is the primary action. Keep the full approved title and
description. No repeat of the entire Hero object and no text animation.

### Footer - Batch C

Derived deeper charcoal. Official logo, tagline, existing navigation, four
confirmed social links and copyright. Quiet functional composition outside main;
comfortable touch targets, visible focus and no invented legal destinations.

## Accessibility, performance and validation

Preserve semantic landmarks, one H1, heading order, native controls, real anchors,
matching section ids and visible keyboard focus. Decorative SVG uses aria-hidden
and focusable=false. All meaningful information remains real HTML.
Check text contrast against its actual background, including every cut level.

Server Components remain the default. Only HeroBuildMotion and the shared
DrawOnView need browser APIs. GSAP is already installed; add no dependencies.
Keep geometry static and small. No runtime geometry generation, WebGL, Three.js,
filters, heavy shadows, external images or new requests.

Verify widths 1440, 1366, 1280, 1024, 900, 820, 768, 430, 390 and 375,
plus the short desktop heights above. Check anchors/menu, console and hydration,
overflow, valid paths, motion visibility timing, no-JS and reduced motion.
Run lint, TypeScript and production build. Performance mobile >90 remains a target,
not a claimed Lighthouse result.

Do not create screenshots, artifacts, review files, exported images or visual
reports. Manual visual review belongs to the user. Final delivery screenshots
remain a manual post-deploy task. No commit, push or deploy without authorization.

Batch A ends after Hero fixes, this consolidation, shared grammar, How it works,
Talent and Companies. Batch B and Batch C require separate authorization.
