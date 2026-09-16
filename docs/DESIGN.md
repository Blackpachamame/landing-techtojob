# TechToJob — Design Direction

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

Status: approved and closed.

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

Status: approved and closed.

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

Status: approved and closed.

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

Status: approved and closed.

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

Status: approved and closed.

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

Status: approved and closed.

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
- News should feel editorial/content-oriented.
- Newsletter should feel like a clear signup moment without generic SaaS card styling.
- Final CTA should be bold and simple.
- Footer should be functional and restrained.

## 6. Networking direction

Status: approved and closed.

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

News is the next section to implement.

## 7. News direction

Status: approved direction, next to implement.

Background:
- white.

Language:
- newsroom / editorial feed;
- three real stories based on public TechToJob posts;
- one main story with greater hierarchy and two secondary stories;
- typography, numbers 01/02/03, rules, whitespace, and composition;
- each story links to its real public post through an external editorial link.

Avoid:
- generic blog card grids;
- invented photographs or thumbnails;
- invented dates, news, or articles;
- nodes, diagrams, timelines, or rounded cards.

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
