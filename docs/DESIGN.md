# TechToJob — Design Direction

## Global redesign direction

The authorized global visual redesign covers Header through News. Existing content,
links, semantics and functionality remain approved; the previous visual closure is
reopened for this pass only. Newsletter, Final CTA and Footer remain unimplemented.
The directions below supersede the earlier section compositions where they differ.

Art direction: **premium editorial-tech / contemporary digital community**.
The reference establishes a level of finish, depth and compositional confidence,
not a source of copy, photographs, fictional data or product functionality.

System:
- Sora only; a dominant, tightly tracked H1, large editorial H2s, controlled body
  measures and small uppercase labels. No manual line breaks or duplicated copy.
- Charcoal #2f3436, mint #84c0bf and white #ffffff only. Depth comes from mixes,
  transparent edges, restrained radial light, subtle grids and overlapping planes.
- Asymmetric desktop layouts alternate with quieter spaces and strong typographic
  declarations. Contemporary editorial posters and technical print compositions
  inform proportion, alignment and rules; avoid generic SaaS cards and dashboards.
- Three recurring microdetails: short registration ticks, fine partial rules and
  tracked uppercase labels. Large networks belong exclusively to the Hero.
- No photography or generated images is required or added. Every composition must
  feel complete with HTML, CSS and lightweight decorative SVG. Networking and a
  future Final CTA may accommodate an asset later, but contain no empty placeholders.
- Static first: only small hover/focus transitions, no client components, new
  dependencies, heavy filters or animation systems.

Section composition:
- Header: spacious navigation integrated with the Hero's charcoal field; official
  logo, existing native mobile menu, no additional CTA.
- Hero: primary identity piece. Large copy beside an open, folded orbital field
  formed by converging paths, translucent planes and mint light. HTML labels float
  at different depths. Avoid literal planets, atoms, targets and analytics.
- How it works: white editorial route with oversized 01–04, subtly staggered on
  wide desktop. At tablet simplify to readable rows; mobile has a vertical rule.
- Talent: mint light field and a charcoal technical sheet with an offset backing
  plane, strong field hierarchy and a restrained relationship to Empresa.
- Companies: charcoal architectural planes, overlapping at their edges around the
  three simultaneous signals. No branching tree. The note is a strong closing line.
- Tournaments: white competition poster, typographic format terms, ruled fields
  and a large mint proof declaration extending the internal rhythm toward Networking.
- Networking: mint, intersecting translucent fields and large staggered typographic
  signals expressing concurrent conversations. The note and underlined Discord link
  form the composition's closing edge; no chat UI or invented people.
- Testimonials: charcoal magazine spread, one large lead quote, two secondary
  voices and a wide closing quote. One oversized decorative quotation mark,
  understated initials, open figures and fine rules; preserve placeholder status.
- News: white newsroom with oversized existing story numbers, a dominant lead
  article and two secondary stories. Real links stay visibly underlined.

Transitions use restrained edge gradients, different spacing rhythms, partial rules
and the tournament proof band rather than large diagonals or repeated effects.
Never invent information to fill a composition.

Responsive and accessibility:
- Desktop may use asymmetry; tablet removes extreme offsets before narrowing text.
- Mobile recomposes the Hero into a compact visual, simplifies planes and preserves
  strong typography. No forced desktop diagram, small body text or horizontal overflow.
- Verify 1440, 1366, 1280, 1024, 900, 820, 768, 430, 390 and 375 pixels; save complete
  Header-to-News captures at 1440, 768 and 375.
- Preserve semantic HTML and content order, one H1, visible keyboard focus, real
  anchors and native details/summary. Decorative elements are hidden; essential
  labels remain HTML. Small text uses charcoal on light fields or light text on dark.

## 1. Design goal

The landing should feel like an editorial-tech community product, not a generic SaaS site and not a job board.

Desired qualities:
- direct;
- modern;
- structured;
- confident;
- community-oriented;
- visually distinctive without becoming decorative for its own sake.

The page should feel like one coherent system, but each section should have its own visual idea.

## 2. Brand system

Font:
- Sora

Primary colors:
- Charcoal: #2f3436
- Mint: #84c0bf
- White: #ffffff

Rules:
- these colors should dominate the page;
- derived neutral grays are acceptable when needed;
- mint on white is not suitable for small readable text;
- use mint primarily as background, large accent, rule, node, or graphic detail;
- maintain WCAG-friendly contrast.

## 3. Core visual principles

Use:
- strong typography;
- intentional whitespace;
- simple geometry;
- editorial layouts;
- asymmetry when useful;
- visual rhythm between sections;
- real responsive recomposition rather than simple shrinking.

Avoid:
- endless rounded cards;
- glassmorphism;
- stock-photo layouts;
- generic feature grids;
- fake dashboard UI;
- fake product screenshots;
- gratuitous icons;
- repeating the same composition in every section.

## 4. Existing visual language

### Header + Hero

Status: implemented; visual redesign authorized for the global pass above. Content remains approved.

Background:
- charcoal.

Language:
- connection network;
- paths and nodes;
- strong first-screen message;
- integrated navigation.

Important:
- do not recreate this network in later sections;
- the Hero owns the largest connection graphic.

### How it works

Status: implemented; visual redesign authorized for the global pass above. Content remains approved.

Background:
- white.

Language:
- connected journey;
- numbered stages;
- editorial route;
- horizontal/serpentine on large screens;
- vertical on smaller screens.

Important:
- do not repeat numbered journeys elsewhere unless the content genuinely requires sequence.

### Talent

Status: implemented; visual redesign authorized for the global pass above. Content remains approved.

Background:
- mint.

Language:
- editorial/technical profile sheet;
- charcoal panel;
- semantic profile fields;
- restrained graphic connection toward Company.

Important:
- do not reuse the large charcoal profile-sheet treatment for Networking.

### Companies

Status: implemented; visual redesign authorized for the global pass above. Content remains approved.

Background:
- charcoal.

Language:
- editorial context field;
- a source that branches into simultaneous signals;
- typography plus restrained connection geometry.

Important:
- the signals are simultaneous, not sequential;
- avoid creating more branching diagrams in future sections unless strongly justified.

### Tournaments

Status: implemented; visual redesign authorized for the global pass above. Content remains approved.

Background:
- white.

Language:
- editorial brief / call-for-entry sheet;
- typography and rules;
- dl/dt/dd;
- no nodes or network diagrams;
- mint proof band.

Important:
- this section intentionally breaks the previous connection-heavy visual language.

### Testimonials

Status: implemented; visual redesign authorized for the global pass above. Content remains approved.

Background:
- charcoal.

Language:
- asymmetric, magazine-style editorial composition;
- one main testimonial, two secondary testimonials, and one wide closing testimonial;
- figure / blockquote / figcaption;
- temporary CSS avatars with initials;
- typography, rules, whitespace, and proportion;
- no SaaS cards, stars, diagrams, or stock photography.

## 5. Repetition rule for remaining sections

Nodes, networks, curves, branches, and connection diagrams have already been used enough.

For the remaining sections, prefer new visual registers.

Especially:
- Newsletter is next; its copy and design will be decided before implementation.
- Final CTA should be bold and simple.
- Footer should be functional and restrained.

## 6. Networking direction

Status: implemented; visual redesign authorized for the global pass above. Content remains approved.

Background:
- mint.

Do not reuse the Talent charcoal card.

Layout:
- single-column heading area;
- eyebrow;
- large H2;
- description below;
- three large typographic signals;
- editorial horizontal bands/rules;
- final editorial note.

The closing editorial band pairs the note with a real link to Discord. It is a low-emphasis editorial text link, not a primary CTA or a button. The Hero remains the page's primary CTA.

Signals:
- Canales por área
- Gente del sector
- Oportunidades compartidas

Visual idea:
- conversations and signals coexisting inside the community;
- not a sequence;
- not a network diagram;
- not a Discord mockup.

Desktop:
- labels may use different horizontal alignments for rhythm.

Tablet:
- reduce extreme offsets;
- preserve readability.

Mobile:
- straightforward stacked labels separated by editorial rules.

Do not invent:
- channel names;
- Discord usernames;
- chat messages;
- avatars;
- timestamps;
- reactions.

## 7. News direction

Status: implemented; visual redesign authorized for the global pass above. Content remains approved.

Background:
- white.

Language:
- newsroom / editorial feed;
- three real stories based on public TechToJob posts;
- one main story with greater hierarchy and two secondary stories;
- typography, numbers 01/02/03, rules, whitespace, and composition;
- each story links to its real public post through an external editorial link.

Layout and semantics:
- desktop: a full-width main story with two secondary stories below;
- tablet and mobile: stacked stories, preserving the main story's greater hierarchy;
- each story uses article + H3 under the section H2.

Avoid:
- generic blog card grids;
- photographs or thumbnails;
- invented dates, news, or articles;
- nodes, diagrams, timelines, or rounded cards.

Newsletter is the next section to implement. Its copy and design will be decided before implementation.

## 8. Responsive philosophy

Target widths to verify:

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

Rules:
- mobile layouts are allowed to be structurally different;
- tablet does not need to mimic desktop;
- prefer readable line length;
- avoid squeezing four-column desktop structures into tablet;
- decorative geometry must adapt to real content height;
- never assume equal row heights when copy can wrap.

## 9. Typography

Use Sora only.

Hierarchy:
- one dominant H1 in Hero;
- section H2s should be clearly subordinate to Hero;
- H3 only when semantically useful;
- eyebrows are p/span, never headings.

General direction:
- tight but readable heading line-height;
- restrained negative tracking for large headings;
- body copy with comfortable line-height;
- avoid hard br tags for line wrapping;
- prefer max-width, responsive type, and text balancing.

## 10. Cards and surfaces

Cards are not forbidden, but should not become the default visual solution.

Before creating a card, ask:
- is this actually a self-contained object?
- does a card help comprehension?
- is the same information better expressed through typography, rules, or spacing?

Avoid generic repeated cards when the content is conceptual.

## 11. Decorative graphics

Decorative SVG/CSS is allowed when it adds meaning.

Rules:
- keep decorative graphics lightweight;
- hide purely decorative SVG from assistive technologies;
- do not place essential text only inside SVG;
- avoid target/crosshair imagery;
- do not add icon libraries unless explicitly required.

## 12. Animation

Current phase:
- static only.

Do not add scroll animation while sections are still being built.

A final global animation pass may later consider subtle motion if it improves the experience without hurting accessibility or performance.
