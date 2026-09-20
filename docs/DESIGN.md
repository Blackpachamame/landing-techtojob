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
The approved design explicitly allows static Build-style testimonial modules as an exception.

## The Build

A modular 2.5D brand illustration derived from the official TechToJob symbol.
It is NOT an official logo variant. Header and Footer retain the official artwork.

The central mint body, white Perfil module, mint Torneo and Empresa modules,
restrained joints and exposed interior express construction through contributions.
Hero establishes the complete object; subsequent sections use selected fragments.
The Final CTA uses a separate community/conversation cluster, without repeating
the symbol or Hero silhouette.

Static geometry is precomputed in heroBuildGeometry.ts. Each external module has
one top face and one side path; no stacks of translated symbol copies. Desktop
and tablet have two interior levels; mobile has one. Depth comes from geometry,
overlap and derived tones. Joints use 1.75 source-unit offsets. The recess and
floor use distinct tones.

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
- **Rail:** a 1.5-2px line for a meaningful sequence.
  Prefer straight geometry; large-radius transitions only when the route requires them.

## Palette and typography

Sora is the only landing font, loaded through next/font with weights 400, 600 and
700. Weight 700 is retained because the official inline Header/Footer logos use
live Sora text at that weight. Hero H1 intentionally stays at 400; section H2s
remain 600. Do not normalize these distinct typographic roles.
Brand colors: charcoal #2f3436, mint #84c0bf and white #ffffff.
Only derived tones and transparency are allowed. No gradients, glow,
glassmorphism, large shadows or extra accents in the redesigned sections.

The global stylesheet defines seven reusable tones:
--build-side, --build-white-side, --build-side-on-mint, --build-recess, --build-floor,
--build-edge and --build-muted-line. Their values derive only from the brand.
--build-side-on-mint mixes 46% mint with charcoal for white slabs placed on mint;
the original white-side tone remains available for other backgrounds.

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
| Header | Charcoal | Sticky header and progressive mobile menu implemented |
| Hero | Charcoal | Approved Hero composition with contextual annotations |
| How it works | White | Approved continuous process rail |
| Talent | Mint | Final static profile slab and rear socket alignment implemented |
| Companies | Charcoal | Approved per-level depth composition |
| Tournaments | White with mint proof band | Implemented and approved |
| Networking | Charcoal | Final static intro, grouped signals and cropped fragment implemented |
| Testimonials | White | Approved static primary module plus three supporting modules |
| News | Derived near-white | Implemented and approved |
| Newsletter | Charcoal compact strip | Implemented; semantic form disabled pending integration |
| Final CTA | Mint | Approved community cluster reveals once |
| Footer | Derived deeper charcoal | Approved brand/socials and two navigation columns |

The landing is implemented, approved and closed from Header through Footer. Spanish is the only
release language; messages remain structured for future localization. No language
toggle, additional locale or translation dependency is present.

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
Scroll animations play once and remain complete when scrolling upward; no reverse,
scroll scrubbing or ScrollTrigger. The Final CTA reveals three member terminals
and one shared conversation element over 0.95 seconds with DrawOnView.

Hero uses a small HeroBuildMotion controller. Desktop may begin at mount;
tablet/mobile wait for the active scene to become meaningfully visible through
IntersectionObserver. Its threshold adapts to scene and viewport height, up to 30%.
The draw lasts 0.8s, body enters at 0.5s, modules assemble from 0.9-1.7s and
the cut resolves around 1.5-1.85s. Module opacity reaches 1 within the first third
of movement. Only guides finish near 2.1s; annotations stay static.
No subsequent scroll motion or connecting line to the following section.

How it works, Companies, Tournaments and Final CTA share DrawOnView. At hydration with motion
allowed, it prepares only decorative targets, then observes the actual composition
and plays once when visible. data-grow="x" prepares scaleX:0 with left-center origin;
data-grow="y" prepares scaleY:0 with center-top origin. Both grow to 1 and clear
their transform/origin on completion. data-duration and data-delay retain the
existing contract. data-reveal continues to affect independent surfaces only.
DrawOnView also supports optional data-enter translations with data-from-x/y
offsets and the same duration/delay contract; no current section uses that option.
The visibility threshold adapts to tall mobile content. It uses no React state.
Talent, Networking, Testimonials and News are intentionally static.

Never combine data-draw/getTotalLength with non-scaling-stroke on scalable rails:
path length is measured in SVG user units while those dashes use screen units.
DrawOnView leaves such incompatible targets static instead of applying dashes.
Use data-grow for straight CSS rails. data-draw remains available for coherent
SVG geometry whose stroke scales with its path; no current section uses it.
Hero's separate outline controller uses an ordinary scaling stroke and is unchanged.

useLayoutEffect reduces the post-hydration initialization gap. Server art still
appears before JavaScript on a slow load; a brief transition from final static art
to the drawing start can remain. Progressive enhancement takes precedence over
hiding the server-rendered graphic.

## Section directions

### Header and Hero

The Header uses CSS position: sticky, top: 0 and z-index 50 with a solid charcoal
background and one thin divider. Its content is 64px high on mobile and 72px on
desktop, plus the 1px divider. The official logo and all five anchor links remain.
Global scroll-padding-top reserves 80px on mobile and 88px on desktop for anchors
and native focus scrolling. Native CSS smooth scrolling applies only with
prefers-reduced-motion: no-preference; reduced motion retains immediate scrolling.
The root html has data-scroll-behavior="smooth", supported by the installed Next.js
route-transition helper. No new click handler, scroll listener or scrollspy.

MobileMenu is a small Client Component around native details/summary; its links
are passed from the Server Component. Native expanded/collapsed semantics remain.
Selection closes the menu and moves focus to the target section; Escape closes it
and returns focus to summary. Focus can leave freely. The menu remains usable
without JavaScript, with manual closing after navigation. The dropdown scrolls
within short viewports; desktop navigation remains server-rendered.

Favicon metadata declares the unchanged official symbol-positive.svg for light
UI (asset charcoal #303436) and symbol-negative.svg for dark UI (mint #84c0bf),
using prefers-color-scheme media queries. There is no site theme switch.

Hero begins directly with the H1, without an eyebrow or pre-heading.
Hero uses approximately 55% copy and 45% illustration on desktop. Copy aligns
from the top independently of the art. Typography and spacing respond to viewport
width AND height; no forced minimum height pushes the CTA down.
With Header visible, all copy and CTA must fit at 1366x650, 1280x620, 1440x760
and 1024x700. Art may extend below the fold before sacrificing the primary CTA.
H1 stays Sora 400. Desktop uses clamp(64px, 6vw, 88px) with 1.02 line-height;
short-height rules reduce spacing without reducing its font size. At those four
viewports H1 measures 81.96, 76.8, 86.4 and 64px respectively, above the largest
rendered H2 (73.764, 69.12, 76 and 55.296px). H2 styles remain unchanged.
Tablet/mobile retain their existing responsive type scale.

Tablet (768-1023) uses stacked copy and its own wide art composition.
Mobile keeps the compact single-level object with all four annotation groups:
Perfil and Torneo above the drawing, Empresa and Comunidad below. A two-column
HTML grid reserves annotation space independently of the SVG, with 12px details,
13px labels, 16px row gaps and 44px breathing room after the CTA. The drawing uses
a 342x314 viewBox and short guides relating the labels to the object. No labels
are hidden at 430, 390 or 375px. Height follows content, not a locked 844px frame.
Desktop uses short annotation guides without a technical baseline or ticks. The desktop Comunidad guide ends exactly at the central
recess boundary (source vertex 164.91, 179.42, transformed by its composition).
It crosses only the recess's own narrow extrusion, without entering unrelated
modules or extending into the cavity.

### How it works

White editorial process; real ol with all four steps and approved paragraphs.
Desktop (1280+) has one continuous horizontal CSS rail crossing all four stations,
growing left to right with data-grow="x". Tablet uses a 2x2 ordered arrangement
and one full rail per actual row. Mobile has ONE continuous left vertical CSS
rail, growing top to bottom with data-grow="y". Shared grid/subgrid tracks follow
the actual content heights and align its endpoints with the first/fourth stations.
Rails are composition-level elements, not fragments attached to individual steps.
Four rounded-square CSS terminals resolve in sequence. The rail and terminal
motion completes within approximately 1.05s. Numbers and all text remain static.
No SVG or stroke dashes: 5 visible CSS primitives on desktop/mobile, 6 on tablet;
four responsive rail elements plus four stations in the DOM.

### Talent

Mint background. The white editorial Perfil slab sits in front of one substantial
rear socket, visible above and to its left. The socket uses --build-side and a
partial clipped silhouette; it carries no content. The foreground has a rounded
upper-left/lower-right contour and restrained top-right/lower-left chamfers.
A narrow flat --build-side-on-mint plane extends right/down to give real depth.
No shadows, gradients, duplicate profile content or attached company module.

The large Perfil heading sits above thin charcoal separators. The real dl keeps
all three approved term/value pairs. Terms and values align in two columns from
600px upward, with 16px text and generous row spacing. Empresa remains a plain
informational closing row; no value exists in messages, so none is invented.
The editorial rule and approved note remain outside the object beneath the copy.

Desktop uses an asymmetric .95fr/1.05fr copy/object layout. Tablet places the
full-size object below copy. Mobile stacks the fields, reduces the rear offset
and simplifies depth without shrinking text. CSS supplies all three decorative
surfaces, with the socket aria-hidden. No SVG, client state or motion.

### Companies

Charcoal background and one sectional cut. Publicas lo que buscas sits at its
opening. Perfil, Lo que construye and Cómo participa remain semantic ul/li content,
on three progressively offset horizontal levels. Each level has its own main
face, right plane and bottom plane, sharing a 14px-right/12px-down extrusion.
Side and bottom tones are derived from each face and are always darker. The final
main face uses 28% mint with charcoal to remain distinct from its depth faces.
Offsets move the complete equal-width levels right; the next face occludes the
previous bottom where appropriate, leaving exposed ledges and thin joints.
No shared side-plane shortcut, shadows, separate cards or branching.
Only the independent decorative faces (including their side/bottom pseudo-elements)
reveal top to bottom, in approximately 0.71s; labels remain static.
The note is a large editorial closing line outside the cut.
Tablet/mobile stack the composition and reduce offsets without shrinking text.
No SVG: three main CSS surfaces, three right and three bottom planes.

### Tournaments

Implemented. White section with four adjoining modules, thin 2px joints and a
shared shallow depth treatment. Real dl/dt/dd pairs retain Reto, Entrega, Jurado
and Resultado. The first three faces use a white/charcoal derived neutral;
Resultado alone has a mint face and darker mint side. No sequential rail or icons.
Only the four independent CSS surfaces reveal, staggered over 0.95s; definition
text remains visible and static. No SVG primitives.

At 1280+ the modules form one horizontal assembly; 768-1279 uses a joined 2x2
composition; mobile uses adjoining vertical pieces. A separate flat mint proof
band closes the section with large typography and no extra decorative cluster.

### Networking

Charcoal editorial composition. Desktop places eyebrow, H2 and approved description
in the left column, with one vertical group of three semantic ul/li signals to
the right. Each signal contains only its existing HTML label and a decorative
mint terminal block. There are no supporting descriptions in the approved copy.

Three original inline SVG marks represent channels, people and opportunities.
Rounded mint containers measure 52px on desktop/tablet and 44px on mobile; labels
use 24-28px desktop, 26px tablet and 22px mobile. A subtle static vertical rule
organizes the icon positions. It has no arrows, branches, extra nodes or motion.

One cropped Build fragment sits at the far right, independently of the signals.
Two small SVG paths form a curved opening and stepped terminal with flat tonal
depth, using existing build-floor and brand-deep colors. It contains no labels
and never connects to the signal group. A full-width thin rule separates the
closing area: prominent approved note on the left, real underlined Discord anchor
nearby on the right. The link retains its outbound cue and visible keyboard focus.

Tablet stacks intro and grouped signals, shifting the fragment to the right.
Mobile follows intro, vertical icon/label group, closing note and Discord link.
The fragment becomes smaller and more cropped without reserving layout height.
All icons and decorative SVG are aria-hidden and focusable=false. The section
is a static Server Component with no motion attributes or animation controller.
Only approved signal labels appear; no supporting descriptions are invented.

### Testimonials

Four static Build-style modules preserve the original figure/blockquote/figcaption
entries and their order. One substantial charcoal module with white copy occupies
the left on desktop; three near-white supporting modules sit in an independent
right column. The primary card aligns to the top and follows its content height,
without row spanning or stretching to the full supporting column height.
Flat depth planes extend 8px right and 10px down, with one restrained lower-right
chamfer. This is visual hierarchy, not an endorsement of greater credibility.
Tablet uses two columns; mobile stacks all four. Quotes lead, followed by small
terminal-square initials, names and roles. No shadows, gradients, SVG, ratings,
photography or motion. This module treatment is approved.
Placeholder status stays documented outside the UI; all four quotes are unchanged.

### News

Implemented. Flat near-white derived from 92% white and 8% mint. Three comparable
publication rows, each with a restrained index/category, real h3, description and
the existing outbound anchor. Thin horizontal rules separate articles; there is
no featured-story hierarchy, card grid, thumbnail or invented metadata.
Desktop places index, title and description/link across the row. Tablet retains
the index column with stacked story content; mobile places metadata above the text.
Each link retains its descriptive accessible name, 44px minimum hit height and
visible charcoal focus. Three small outbound SVG paths; no motion.
Time-sensitive approved copy remains unchanged and needs a separate content decision.

### Newsletter

Compact charcoal #2f3436 transition strip with white copy and readable secondary
text. The white email field contrasts with the deliberately muted disabled button;
focus is mint and the status stays white. Desktop pairs its restrained
30-36px heading/description with one integrated email input and disabled submit;
tablet uses two rows, mobile stacks copy, label, input, button and status.
No surrounding panel, gradient or decorative corner marks. The real form retains
its explicit email label, autocomplete and visible 14px availability status.
The disabled default submit prevents implicit Enter submission as well as clicks.
No JavaScript, provider, request, success simulation or form action is added.

### Final CTA

Mint #84c0bf closing section. Approved copy and the real Discord action sit beside
a small community cluster: three member/profile terminals around one shared central
conversation element. The terminals use rounded-square geometry, simple abstract
profile marks and white/charcoal/derived tones. The conversation uses a speech
shape. It does not repeat The Build, the TechToJob symbol or a network graph.

The decorative SVG has 13 primitives in four groups. DrawOnView reveals member 1
at 0-.25s, member 2 at .15-.4s, member 3 at .3-.55s, and the conversation at
.55-.95s. It plays once and remains static, without text animation, bounce, reverse,
loop or ScrollTrigger. Reduced motion and no-JS show the complete final state.

The CTA retains its 56px minimum height and H2 scale of 42-76px. Tablet stacks copy
and right-aligned 240px-high art; mobile puts copy and action first, then compact
200px-high art. Desktop restores the side-by-side layout at 1024px. Reserved art
dimensions keep the four conceptual pieces readable without increasing section height.

### Footer

Static deep-charcoal footer. The official logo and tagline sit above a row of four
terminal-square social links in the left group. The right group has two labeled
navigation columns: Explorar (How it works, Talent, Companies, Tournaments) and
Comunidad (Networking, Testimonials, News, Newsletter), all using real section IDs.
A thin bottom divider separates copyright. On mobile, brand/socials precede the
navigation; columns share a row from 430px and stack below that width.
Discord, LinkedIn, X and Instagram retain their exact paths and URLs, 44x44px targets,
accessible names, visible focus and contrast-changing hover affordance. Their SVGs
are decorative. README retains the verified Simple Icons source/license caveat,
including the historical official LinkedIn source. No invented legal links.

## Accessibility, performance and validation

Preserve semantic landmarks, one H1, heading order, native controls, real anchors,
matching section ids and visible keyboard focus. Decorative SVG uses aria-hidden
and focusable=false. All meaningful information remains real HTML.
Check text contrast against its actual background, including every cut level.

Server Components remain the default. HeroBuildMotion, shared DrawOnView and the
small MobileMenu enhancement are the only Client Components. GSAP is already installed; add no dependencies.
Keep geometry static and small. No runtime geometry generation, WebGL, Three.js,
filters, heavy shadows, external images or new requests.

Verify widths 1440, 1366, 1280, 1024, 900, 820, 768, 430, 390 and 375,
plus the short desktop heights above. Check anchors/menu, console and hydration,
overflow, valid paths, motion visibility timing, no-JS and reduced motion.
Run lint, TypeScript and production build for code changes. Verified production
Lighthouse results supplied by the author are mobile 94/100/100/100 and desktop
100/100/100/100 (Performance/Accessibility/Best Practices/SEO). These describe the
measured deployed revision, not a fresh audit of local changes.

Do not create screenshots, artifacts, review files, exported images or visual
reports. Manual visual review belongs to the user. Final delivery screenshots
remain a manual post-deploy task. No commit, push or deploy without authorization.

The landing design and implementation are approved and closed. Production is live
at https://techtojob.vercel.app/ with SITE_URL configured in Vercel. Existing
Chromium checks cover all ten widths, keyboard focus/menu, anchor offsets, inactive
form, 44px social targets and play-once/reduced-motion/no-JS behavior. Safari/WebKit
has not been independently checked in this environment.

Final screenshots, Lighthouse evidence capture/storage, public-repository/revision
confirmation and Discord tournament submission remain manual delivery tasks.
Newsletter integration and verified testimonials belong to a future operational
release; the deployed tournament version intentionally uses the inactive form and
permitted placeholder testimonials.
