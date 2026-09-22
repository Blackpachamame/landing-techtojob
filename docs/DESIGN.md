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

BuildIcons.tsx is a server-only set of eight original SVG marks: user, code,
bars, check-circle, building, users, flag and trophy. Their simple geometry follows
the existing Networking vocabulary, without copying a library or changing Networking.
Each uses a 24x24 viewBox, one compound path, no fill, currentColor and a 1.75px
stroke with round caps/joins. All are aria-hidden and focusable=false, reinforcing
real adjacent text. Talent, Companies and Tournaments add 11 SVG instances/paths
in terminal-shaped squares, with no client boundary or dependency added.

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

The main landing H2s share section-title:
clamp(1.75rem, calc(1.25rem + 2.2vw), 3.5rem), or 28-56px at the default root size.
This includes Final CTA; its own maximum width, leading and tracking remain.
Keep the existing weight, tracking, leading and balanced wrapping for each role.
Newsletter is a compact exception using
clamp(1.625rem, calc(1rem + 1.2vw), 2.25rem), or 26-36px, below section-title.

section-statement is for large supporting paragraphs, not main headings:
clamp(1.5rem, calc(1rem + 1.6vw), 2.5rem), or 24-40px. Companies' closing line,
the Tournaments proof and the Networking note use it while retaining their own
weight, tracking, leading and wrapping. Secondary labels stay below the H2:
Perfil uses 24px/32px from mobile/tablet; tournament terms use 24px/28px/32px
from mobile/tablet/1280px. Other secondary heading and label sizes are unchanged.

## Layout and background rhythm

Desktop uses deliberate asymmetry and substantial graphics; text remains readable
and separate from decorative surfaces. Tablet restructures content before columns
become narrow. Mobile is an intentional vertical composition, not scaled desktop.

Full sections use py-20, md:py-24 and lg:py-28 (80/96/112px per side), including
Talent and Final CTA. Final CTA keeps its existing centered, compact art below
1024px and its desktop composition; the section now owns the vertical padding.
Hero retains its viewport-height-aware spacing. Newsletter stays compact at
48px per side, then 56px from 768px. Tournaments retains top padding plus its
separate proof band; do not add duplicate bottom padding around that band.

Eyebrow-to-H2 and H2-to-description spacing is normally 24px. Newsletter keeps
16px for its compact role. Companies and Final CTA no longer use incidental
28px copy gaps; Networking's mobile group/closing separation is 48px rather
than 44px. Main-content separation generally uses 48-64px, with composition
exceptions preserved: How it works reserves 64px/80px before its process rail,
Talent keeps its 56px/64px copy-to-object gap, and proof/closing bands retain
their existing separation and internal padding. These are spacing rules, not
permission to reposition the decorative geometry or change the section grids.

Target final rhythm and implementation state:

| Section      | Background                 | Current redesign status                                              |
| ------------ | -------------------------- | -------------------------------------------------------------------- |
| Header       | Charcoal                   | Sticky header and progressive mobile menu implemented                |
| Hero         | Charcoal                   | Approved Hero composition with contextual annotations                |
| How it works | White                      | Approved continuous process rail                                     |
| Talent       | Mint                       | Static profile slab with one matching flat depth plane implemented   |
| Companies    | Charcoal                   | Approved per-level depth composition                                 |
| Tournaments  | White with mint proof band | Implemented and approved                                             |
| Networking   | Charcoal                   | Final static intro, grouped signals and cropped fragment implemented |
| Testimonials | White                      | Approved static primary module plus three supporting modules         |
| News         | Derived near-white         | Implemented and approved                                             |
| Newsletter   | Charcoal compact strip     | Implemented; semantic form disabled pending integration              |
| Final CTA    | Mint                       | Approved community cluster reveals once                              |
| Footer       | Derived deeper charcoal    | Approved brand/socials with Explorar, Comunidad and Legal groups     |

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
With JavaScript, opening and closing fade and translate the dropdown by 6px over
210ms using the Web Animations API. Native closure waits for the exit transition;
closing links become inert immediately. Reduced motion skips both transitions.
Only opacity and transform animate, without changing the closed Header or layout.

Favicon metadata declares the unchanged official symbol-positive.svg for light
UI (asset charcoal #303436) and symbol-negative.svg for dark UI (mint #84c0bf),
using prefers-color-scheme media queries. There is no site theme switch.

Hero has no eyebrow. Its description opens with the explicit positioning as a
Spanish-speaking community of developers and tech companies. The H1, CTA and
Build artwork retain their approved treatment.
Hero uses approximately 55% copy and 45% illustration on desktop. Copy aligns
from the top independently of the art. Typography and spacing respond to viewport
width AND height; no forced minimum height pushes the CTA down.
With Header visible, all copy and CTA must fit at 1366x650, 1280x620, 1440x760
and 1024x700. Art may extend below the fold before sacrificing the primary CTA.
H1 stays Sora 400. Desktop uses clamp(64px, 6vw, 88px) with 1.02 line-height;
short-height rules reduce spacing without reducing its font size. At those four
viewports H1 measures 81.96, 76.8, 86.4 and 64px respectively; the shared main H2
measures 50.052, 48.16, 51.68 and 42.528px. Below 768px, H1 uses
clamp(34px, 9.6vw, 52px); the existing tablet clamp(54px, 6.5vw, 66px) remains.
The hierarchy target is approximately H1 >= 1.2 times the main H2, subordinate
to overflow prevention, complete CTA visibility and readable wrapping.
On mobile viewports at most 600px high, top padding and CTA margin are both 24px
instead of 32px/28px, keeping the entire CTA visible at 320x568 without reducing H1.

Tablet (768-1023) uses stacked copy and its own wide art composition.
The disconnected horizontal baseline at y=415 is removed from the tablet guide
path; annotation guides and the main Build geometry remain unchanged.
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

Mint background. One white editorial Perfil slab has rounded upper-left/lower-right
corners and restrained top-right/lower-left chamfers. Its two empty CSS
pseudo-elements share the same inset, border-radius and clip-path rule, so the
white face and single flat --build-side-on-mint depth plane have exactly the
same dimensions and silhouette. Only the depth plane is translated: 8px right
and 10px down on mobile, 12px right and 14px down from 600px. There is no rear
socket, Empresa module, shadow, gradient or duplicate profile content.
The structured profile header pairs a charcoal user terminal with Perfil and
the existing Hero.network.profileDetail (Frontend · Junior). A small mint chip
reuses Hero.network.available (Disponible); it can wrap below the identity on mobile.
The real dl keeps all three approved term/value pairs with 16px text and subtle
charcoal rules. Code, bars and check-circle terminals sit within their dt elements.
From 600px, terms and descriptions share a two-column grid; mobile places the
description below its term with an inset aligned after the icon.

The editorial rule and approved note remain outside the object beneath the copy.

Desktop uses an asymmetric .95fr/1.05fr copy/object layout. Tablet places the
full-size object below copy. Exterior padding centers the slab plus its depth
while preserving the approved face width and internal spacing. Mobile stacks the
fields and reduces depth without shrinking text. The decorative plane adds no DOM
or accessible content. Four original decorative icons are rendered by this static
Server Component; no client state or motion is added.

### Companies

Charcoal background and one sectional cut. Publicas lo que buscas sits at its
opening. Perfil, Lo que construye and Cómo participa remain semantic ul/li content,
on three progressively offset horizontal levels. Each level has its own main
face, right plane and bottom plane, sharing a 14px-right/12px-down extrusion.
Each level pairs a terminal icon with its existing label and an approved 16px
subtitle. User accompanies Perfil / Stack, nivel y disponibilidad; code accompanies
Lo que construye / Proyectos y entregas; users accompanies Cómo participa /
Aportes y conversaciones. Only the middle level has a mint face and charcoal text;
its terminal is charcoal with a mint mark. A static mint backing preserves text
contrast while the decorative face/depth reveals. The other two retain derived
dark faces with full-white labels/subtitles and charcoal/mint terminals.
Side and bottom tones are derived from each face and are always darker. The final
main face uses 28% mint with charcoal to remain distinct from its depth faces.
Offsets move the complete equal-width levels right; the next face occludes the
previous bottom where appropriate, leaving exposed ledges and thin joints.
No shared side-plane shortcut, shadows, separate cards or branching.
Only the independent decorative faces (including their side/bottom pseudo-elements)
reveal top to bottom, in approximately 0.71s; icons, labels and subtitles remain static.
The note is a large editorial closing line outside the cut.
Tablet/mobile stack the composition without shrinking body text. Offsets are 16px
on mobile and 32px from 768px. Mobile uses 36px terminals and 20px padding; larger
layouts use 40px terminals and 28px/32px padding. Subtitles wrap in the remaining
width. Three original icons accompany the three main CSS surfaces, three right
planes and three bottom planes.

### Tournaments

Implemented. White section with four adjoining modules, thin 2px joints and a
shared shallow depth treatment. Real dl/dt/dd pairs retain Reto, Entrega, Jurado
and Resultado. The first three faces use a white/charcoal derived neutral;
Resultado alone has a mint face and darker mint side. Each dt includes a static
terminal icon above its term: flag, code, users and trophy respectively. The first
three use charcoal outline/icon treatment; Resultado has a filled charcoal terminal
and mint trophy. Term/description hierarchy and the approved copy remain intact.
Only the four independent CSS surfaces reveal, staggered over 0.95s; definition
text and all four SVG icons remain visible and static.

At 1280+ the modules form one horizontal assembly; 768-1279 uses a joined 2x2
composition; mobile uses adjoining vertical pieces. A separate flat mint proof
band closes the section with section-statement and no extra decorative cluster.
Terminals measure 36px on mobile and 40px from tablet, with 12px before the term.
Vertical module padding is 24px on mobile and 32px from tablet to accommodate
the icons without excessive height. Joints and depth planes retain their geometry.

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
entries and their order. Desktop and tablet use a balanced two-by-two grid,
with the charcoal module first and three near-white supporting modules following.
The primary quote retains larger type (30-34px on desktop) and white copy.
Each row follows its content height; no card spans multiple rows or stretches
to the height of all three supporting cards. Mobile uses natural content heights.
Flat depth planes extend 8px right and 10px down, with one restrained lower-right
chamfer. This is visual hierarchy, not an endorsement of greater credibility.
Tablet uses two columns; mobile stacks all four. Quotes lead, followed by small
terminal-square initials, names and roles. No shadows, gradients, SVG, ratings,
photography or motion. This module treatment is approved.
Placeholder status stays documented outside the UI; all four quotes are unchanged.

### News

Implemented. Flat near-white derived from 92% white and 8% mint. Three comparable
publication rows, each with a restrained index/category, a verified date in a
semantic time element, real h3, description and descriptive LinkedIn anchor. Thin horizontal rules separate articles; there is
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
26-36px heading/description with one integrated email input and disabled submit;
tablet uses two rows, mobile stacks copy, label, input, button and status.
No surrounding panel, gradient or decorative corner marks. The real form retains
its explicit email label, autocomplete and visible 14px availability status.
The final tournament description states the proposed weekly email content and
"Sin spam"; the button reads "Quiero recibirlas". The availability status remains
visible. The disabled default submit prevents implicit Enter submission as well as clicks.
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

The CTA retains its 56px minimum height and uses the shared section-title scale. Below 1024px,
copy and action precede a centered community cluster with a 24px gap. Tablet art
is 220px high in a wrapper up to 280px wide; mobile uses 200px-high art in a wrapper
up to 240px wide. Desktop keeps its side-by-side layout from 1024px. Reserved art
dimensions keep the four conceptual pieces readable without increasing section height.

### Footer

Static deep-charcoal footer. The official logo and tagline sit above a row of four
terminal-square social links in the left group. The right area has three labeled
navigation groups: Explorar (How it works, Talent, Companies, Tournaments),
Comunidad (Networking, Testimonials, News, Newsletter), and Legal (Aviso legal).
The first two use real homepage section IDs; Legal links to /aviso-legal. The
desktop grid gives each group its own column from 1024px. Tablet uses two columns;
navigation stacks below 430px, after the brand and social links.
A thin bottom divider separates copyright and a discreet author credit. They sit
at opposite ends from 768px and stack below that width. The author name links to
the confirmed GitHub profile for Blackpachamame.
Discord, LinkedIn, X and Instagram retain their exact paths and URLs, 44x44px targets,
accessible names, visible focus and contrast-changing hover affordance. Their SVGs
are decorative. README retains the verified Simple Icons source/license caveat,
including the historical official LinkedIn source. No invented legal links.

### Legal notice and skip navigation

/aviso-legal uses a simple white reading surface, charcoal text, Sora and the
existing containers, with a home link and the shared Footer. Footer section links
return to homepage anchors from this page. The provisional notice is noindex.
A native skip link is first in the body on both pages, visually hidden until focused,
then fixed above the page in mint/charcoal. It targets the focusable main-content
landmark without JavaScript, animation or a normal-layout shift.

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
