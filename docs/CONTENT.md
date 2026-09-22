# TechToJob — Content and Copy Guide

## 1. Positioning

TechToJob is a community, not a job board.

The main problem is not simply a lack of job listings.

The product idea is that anonymous applications make it hard for people, especially juniors, to be known for what they can actually build and contribute.

Inside the community, people can:
- participate;
- share;
- build;
- join tournaments;
- become known over time;
- discover opportunities with more context.

Never promise guaranteed employment.

## 2. Tone

Use Spanish with tuteo.

Preferred style:
- short sentences;
- direct language;
- concrete language;
- person-centered copy;
- searchable terminology where useful;
- confident but not inflated.

Avoid brochure vocabulary such as:
- sinergia;
- ecosistema;
- revolucionar;
- solución integral;
- potenciar;
- disrupción.

Do not exaggerate.

Do not invent numbers or claims.

## 3. Official examples and copying rule

The tournament brief contains orientative example copy only for:
- Hero;
- Talent;
- Newsletter.

Those examples are references for tone only and must not be copied.

For other sections, the brief provides content requirements, not prohibited example copy.

It is acceptable to reuse required concepts or vocabulary from the brief when they express mandatory information.

## 4. Current approved copy

The landing design, implementation and approved copy are closed. The tournament
site is deployed at https://techtojob.vercel.app/ with SITE_URL configured in the
Vercel production environment. Verified Lighthouse results supplied by the author
are mobile 94/100/100/100 and desktop 100/100/100/100
(Performance/Accessibility/Best Practices/SEO).

Final screenshots, Lighthouse evidence capture/storage, public-repository/revision
confirmation and Discord tournament submission remain manual delivery tasks.
Newsletter integration and verified community testimonials remain future
operational-release work; they do not block the deployed tournament version.

The following copy is approved and should not be rewritten during unrelated section work.

### Hero

No eyebrow. The positioning appears at the start of the description.

Title:
Que te conozcan por lo que construyes, no por otro CV.

Implementation note:
The JSON uses one non-breaking space between “no” and “por” to preserve the intended wrap. Do not replace it with a br tag.

Description:
TechToJob es una comunidad de desarrolladores y empresas tech en español. Participa, comparte lo que sabes hacer y deja que tu trabajo hable por ti. Aquí las empresas conocen a la gente por cómo aporta, no solo por lo que pone en su CV.

CTA:
Entrar a la comunidad

Hero network labels:
- Perfil
- Frontend · Junior
- Disponible
- Comunidad
- Torneo
- Torneo abierto
- Empresa
- Empresa tech

### How it works

Eyebrow:
Cómo funciona

Title:
Aquí el recorrido empieza participando.

Description:
Entra, preséntate y deja que la comunidad conozca lo que haces. Cuando surge una oportunidad, ya existe contexto sobre ti.

Steps:

01 — Entra y ubícate

Únete a la comunidad, recorre los canales y encuentra dónde encaja lo que haces o quieres aprender. Empezar no debería sentirse como otro proceso de selección.

02 — Preséntate con contexto

Comparte tu stack, tu nivel y tu disponibilidad para que los demás sepan quién eres y qué buscas. Lo necesario para empezar a conocerte, sin convertirte en una ficha más.

03 — Participa de verdad

Comparte dudas, ayuda, entra en torneos y enseña lo que construyes. Cada aportación da más contexto sobre ti que otra candidatura enviada en frío.

04 — Cuando encaja, ya hay contexto

Si una empresa o alguien de la comunidad busca un perfil como el tuyo, no parte de cero: ya puede ver qué sabes, cómo participas y qué construyes.

### Talent

Eyebrow:
Ofrécete como talento

Title:
Aquí tu perfil no empieza por un descarte.

Description:
Tu perfil reúne lo que importa para empezar: stack, nivel y disponibilidad. Queda disponible para que cualquier empresa de la comunidad lo revise cuando busca a alguien, sin pasar primero por una criba automática.

Note:
No necesitas ser senior. Publicarlo es gratis.

Profile:
- Stack — Con qué trabajas
- Nivel — Dónde estás hoy
- Disponibilidad — Si estás abierto a oportunidades

### Companies

Eyebrow:
Publica como empresa

Title:
Decide con más que un CV delante.

Description:
Publica lo que buscas y revisa perfiles de personas que ya participan en la comunidad. Antes de hablar con alguien, puedes conocer qué construye y cómo aporta.

Note:
Menos criba. Más contexto para decidir con quién hablar.

Context source:
Publicas lo que buscas

Signals:
- Perfil
- Lo que construye
- Cómo participa

Approved supporting subtitles:
- Perfil — Stack, nivel y disponibilidad
- Lo que construye — Proyectos y entregas
- Cómo participa — Aportes y conversaciones

### Tournaments

Eyebrow:
Torneos

Title:
Construye algo que se usa de verdad.

Description:
Cada torneo parte de un reto real. Presentas una solución y un jurado la evalúa con criterios públicos. La propuesta ganadora pasa de entrega a uso real.

Support:
Mientras participas, aprendes haciendo, sumas una pieza concreta para enseñar en una entrevista y dejas que más gente conozca cómo trabajas.

Proof:
Esta misma web nació de uno de esos torneos.

Format:
- Reto — Un problema concreto
- Entrega — Tu solución
- Jurado — Criterios públicos
- Resultado — Pasa a uso real

### Networking

Eyebrow:
Networking

Title:
Hay oportunidades de las que te enteras estando dentro.

Description:
En los canales por área compartes dudas, conoces gente del sector y sigues conversaciones que no aparecen en un portal de empleo. A veces una respuesta llega rápido. Otras veces, alguien comparte una oportunidad porque conoce a quien está contratando.

Note:
No todo empieza con una candidatura. A veces empieza con una conversación.

Discord CTA:
Entrar a la comunidad en Discord

Signals:
- Canales por área
- Gente del sector
- Oportunidades compartidas

Channel group label (displayed uppercase):
Algunos canales de la comunidad

Real Discord channels confirmed by the owner; all seven appear as static labels:
- networking
- desarrollo
- datos-e-ia
- ciberseguridad
- infra-y-devops
- portfolios
- busco-trabajo

The repeated # is decorative. Channel labels are informational, not links.
The three signals retain their labels without additional supporting descriptions.

Do not add:
- invented Discord channel names;
- fake chat messages;
- usernames;
- avatars;
- made-up opportunities.

### Testimonials

Status: implemented, reviewed, approved and closed.

The current testimonials are placeholders permitted by the tournament rules. This
condition is documented in README.md, not in the UI. A future operational release
should replace them with verified community testimonials, photos and profile links.

Eyebrow:
Testimonios

Title:
La comunidad se nota en lo que cuenta su gente.

#### Testimonial 1

Name:
Lucía M.

Role:
Frontend Developer

Quote:
Compartir lo que estaba construyendo hizo que la conversación dejara de empezar por mi CV.

Initials:
LM

#### Testimonial 2

Name:
Mateo R.

Role:
Backend Developer

Quote:
Una duda que solo me habría llevado horas terminó en una conversación de diez minutos con alguien que ya había pasado por lo mismo.

Initials:
MR

#### Testimonial 3

Name:
Sofía G.

Role:
Junior Developer

Quote:
El torneo me dejó algo concreto que podía enseñar y explicar. No era otro ejercicio guardado en una carpeta.

Initials:
SG

#### Testimonial 4

Name:
Diego P.

Role:
Tech Lead

Quote:
Ver cómo participa alguien antes de hablar con esa persona cambia mucho la conversación. Ya tienes algo real sobre lo que preguntar.

Initials:
DP

### News

Status: implemented, reviewed, approved and closed.

Use three real stories based on public TechToJob posts. Each story must link to
its real public post through an external editorial link. Do not invent dates,
news, articles, or additional information.

Eyebrow:
Noticias

Title:
Lo que construimos también lo contamos.

Description:
Torneos, decisiones y avances que compartimos mientras TechToJob toma forma.

#### Story 01

Date:
8 sep 2026

Datetime:
2026-09-08

Category:
Torneo #2

Title:
La comunidad está construyendo la landing oficial de TechToJob.

Description:
El reto ya está abierto: una landing con brief y rúbrica pública cuya propuesta ganadora pasará a ser la web oficial.

Link label:
Leer la publicación en LinkedIn

URL:
https://es.linkedin.com/posts/techtojob_desarrolloweb-frontend-nextjs-activity-7503104580864368640-YQDy

Internal note: “El reto ya está abierto” is time-sensitive. Review it in the final pass if the tournament has ended; keep the approved copy unchanged for now.

#### Story 02

Date:
24 ago 2026

Datetime:
2026-08-24

Category:
Comunidad

Title:
TechToJob ya está abierto.

Description:
Torneos, proyectos colaborativos, empresas y networking conviven en un mismo lugar para que participar deje más contexto que otra candidatura anónima.

Link label:
Leer la publicación en LinkedIn

URL:
https://es.linkedin.com/posts/techtojob_empleo-tech-programaci%C3%B3n-activity-7497649410609283072-eXDp

#### Story 03

Date:
25 ago 2026

Datetime:
2026-08-25

Category:
Identidad

Title:
La identidad visual también empezó como un reto abierto.

Description:
El primer torneo puso el diseño del logo, los colores y la tipografía en manos de quienes quisieran participar.

Link label:
Leer la publicación en LinkedIn

URL:
https://es.linkedin.com/posts/techtojob_dise%C3%B1o-branding-identidadvisual-activity-7498086427562254336-mUcN

## 5. Approved closing sections

Implementation sequence; all three sections are implemented, reviewed and approved:

1. Newsletter
2. Final CTA
3. Footer

### Newsletter

Implemented, reviewed and approved. Follows News. Newsletter provider/backend
integration remains pending for a post-tournament operational release.

Eyebrow:
Newsletter

Title:
Que no se te pase lo que estamos construyendo.

Description:
Un correo a la semana con los torneos que se abren, las novedades de la comunidad y las oportunidades que comparten otras personas. Sin spam.

Input label:
Tu email

Input placeholder:
tu@email.com

Submit:
Quiero recibirlas

Status:
La suscripción se habilitará próximamente.

The form is an interface only until a real provider/backend is connected. Keep
the submit disabled; do not claim success or expose implementation jargon.

### Final CTA

Implemented, reviewed and approved. Follows Newsletter. Discord is the single
real primary action.

Eyebrow:
Comunidad

Title:
Haz que la próxima conversación empiece con lo que sabes hacer.

Description:
Entra a TechToJob, participa y deja que tu trabajo tenga contexto dentro de la comunidad.

CTA:
Entrar a la comunidad

URL:
https://discord.gg/h9FFgKdkRd

### Footer

Implemented, reviewed and approved. Follows main; functional, restrained and
without invented legal destinations.

Brand tagline:
Personas que construyen. Oportunidades con más contexto.

The navigation structure uses three headings: Explorar, Comunidad and Legal. Link labels reuse
the existing Navigation, Testimonials, News and Newsletter messages.

Explorar:
- Cómo funciona → #how-it-works
- Talento → #talent
- Empresas → #companies
- Torneos → #tournaments

Comunidad:
- Comunidad → #networking
- Testimonios → #testimonials
- Noticias → #news
- Newsletter → #newsletter

Legal:
- Aviso legal → /aviso-legal

Social link labels:
- Discord
- LinkedIn
- X
- Instagram

Use the four confirmed URLs in section 6. External links open with
target=_blank and rel=noopener noreferrer.

Copyright:
© 2026 TechToJob

Author credit:
Diseñado y desarrollado por Blackpachamame

The credit is rendered as plain text pending a confirmed GitHub profile URL for
the named author. The repository remote identifies a different person and must
not be used as an inferred author link.

The single legal destination is /aviso-legal. There are no separate privacy, terms,
cookies or contact routes.
The brand link reuses the existing accessible home label. Each navigation landmark
is labeled by its visible heading; social links form a separate unordered list
directly beneath the tagline. Header and Footer use the accessible home label
"Tech to Job, inicio"; the official visual logo is unchanged.

## 6. Confirmed links

Discord:
https://discord.gg/h9FFgKdkRd

LinkedIn:
https://www.linkedin.com/company/techtojob/

X:
https://x.com/techtojob

Instagram:
https://www.instagram.com/techtojob

## 7. Section ids already established

- how-it-works
- talent
- companies
- tournaments
- networking

Header label “Comunidad” points to networking.

Do not rename established ids without a real reason.

## 8. Content safety rules for this project

Do not invent:
- employment guarantees;
- product capabilities;
- exact user counts unless currently confirmed for the final delivery;
- open roles;
- active tournament dates;
- prizes;
- judges;
- employer names;
- testimonials presented as real;
- statistics;
- conversion claims.

When a detail is not confirmed by the brief, leave it out rather than fabricating it.

## 9. SEO copy

Final Metadata is implemented in messages/es.json:

Title (50 characters):
TechToJob | Comunidad tech para talento y empresas

Description (151 characters):
TechToJob conecta desarrolladores y empresas en una comunidad donde participar, construir y compartir proyectos aporta más contexto que enviar otro CV.

Canonical, Open Graph, Twitter card, 1200 × 630 social images and escaped
Organization JSON-LD are implemented. SITE_URL controls public URLs, robots and
sitemap. Without SITE_URL, indexing stays disabled and canonical/social image URLs
are omitted. With SITE_URL, the homepage is indexable and public URLs are absolute.

The production origin is https://techtojob.vercel.app/ and SITE_URL is configured.
Lighthouse has been measured as documented above; its required evidence and final
submission remain manual delivery tasks.

Do not change Metadata while implementing individual sections unless explicitly requested.

## 10. Legal notice and skip link

The first keyboard link is "Saltar al contenido", targeting main-content on both
pages. /aviso-legal is a provisional notice for the Torneo #2 entry, with noindex.
Its title is "Aviso legal" and the root template is "%s | TechToJob"; the homepage
default title is unchanged. The legal page has its own canonical when SITE_URL is set.

All legal page copy lives in messages/es.json under LegalNotice. It describes only
verified project behavior: no enabled data-collection forms/endpoints; the disabled
newsletter does not transmit the entered email; no integrated analytics/tracking;
no intentionally set first-party cookies; Vercel hosting and linked external
services may process technical data under their own policies. It is explicitly
provisional and must be replaced by TechToJob's official legal text before the
site becomes its official operational website. No corporate identities or contact
details are invented.
