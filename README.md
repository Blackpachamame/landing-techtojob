# TechToJob

## Proyecto

Landing page oficial de TechToJob construida para el torneo de desarrollo web.
TechToJob es una comunidad donde desarrolladores y empresas participan, construyen
y se conocen. La landing explica esa propuesta y guía a los visitantes hacia
Discord, sin prometer empleo.

La landing completa está implementada y aprobada desde Header hasta Footer, con SEO,
datos estructurados, imágenes sociales y favicon adaptativo.

## Sitio en producción

[techtojob.vercel.app](https://techtojob.vercel.app/)

El sitio del torneo está desplegado en Vercel con `SITE_URL` configurado en producción.

## Stack

- Next.js 16 App Router y TypeScript.
- Tailwind CSS 4, con CSS Modules para composiciones específicas de cada sección.
- Sora mediante `next/font/google`.
- Bun 1.3.14 o superior; Node.js 20.9 o superior para Next.js.
- Server Components para el contenido; HeroBuildMotion y DrawOnView mejoran el
  arte decorativo, mientras que un pequeño Client Component MobileMenu gestiona
  el cierre y el foco.

## Ejecución local

```sh
bun install
bun run dev
```

Abrir http://localhost:3000. Validación y vista previa de producción:

```sh
bun run lint
bunx tsc --noEmit
bun run build
bun run start
```

El build necesita acceso a Google Fonts para obtener Sora. Luego, Next.js la sirve
localmente con los pesos 400, 600 y 700 y `display: swap`.

## Entorno

Copiar `.env.example` a `.env.local` para la configuración local. Configurar
`SITE_URL` con el origen público HTTP(S) real en el entorno de hosting **antes del
build de producción**. Producción utiliza `https://techtojob.vercel.app/`. No incluir
credenciales, subrutas, query ni fragmentos. Volver a ejecutar el build cuando cambie
este valor.

`src/config/site.ts` es la única fuente de verdad:

| Configuración | Comportamiento SEO |
| --- | --- |
| `SITE_URL` vacío | `noindex, nofollow`; robots impide el rastreo; sitemap vacío; se omiten canonical y las URLs públicas de las imágenes sociales; JSON-LD omite URL y logo. |
| `SITE_URL` configurado | `index, follow`; canonical y sitemap de la homepage; URLs absolutas para Open Graph, Twitter y Organization. |

Dejar `SITE_URL` vacío en previews que no deban indexarse. Los valores de origen
inválidos fallan en la validación en lugar de producir URLs engañosas.

## Estructura del proyecto

```text
src/app/                 # Página, layout, estilos globales y rutas SEO
src/components/layout/   # Header y Footer
src/components/sections/ # Secciones de la landing
src/config/              # Configuración central del sitio
src/lib/                 # Renderizado compartido de imágenes sociales
messages/                # Contenido en español
public/brand/            # Assets SVG oficiales proporcionados
docs/                    # Dirección visual y copy aprobados
```

## Arquitectura de contenido

El idioma actual es español (`lang="es"`). El copy visible y el copy SEO están
centralizados en `messages/es.json` e importados por Server Components. Los
namespaces preparan el contenido para una futura internacionalización. No se añadió
`next-intl` porque no era un requisito obligatorio; no hay ningún locale adicional
implementado.

## Secciones de la landing

Hero · Cómo funciona · Talento · Empresas · Torneos · Networking · Testimonios ·
Noticias · Newsletter · CTA final · Footer. El Header proporciona navegación interna.
El Hero explica qué es TechToJob al inicio del párrafo, sin eyebrow. Las entradas de Noticias
incluyen las tres fechas de publicación verificadas mediante elementos semánticos
`time` y enlaces descriptivos hacia LinkedIn.

## Sistema de diseño

Sora, charcoal `#2f3436`, mint `#84c0bf` y white `#ffffff` definen el sistema de marca.
La composición original sigue una dirección premium editorial-tech, con tipografía
fuerte, espacio en blanco, geometría y ritmos de sección diferenciados. Los layouts
responsive se adaptan a desktop, tablet y mobile en lugar de limitarse a reducir las
composiciones de escritorio.

## Assets y licencias

Los assets de marca de TechToJob fueron proporcionados para este proyecto.
`public/brand/` conserva doce copias SVG byte-for-byte: los archivos originales
`Símbolo*` se corresponden con `symbol-*`, `v1*` con `horizontal-*` y `v2*` con
`stacked-*`, cada uno en variantes black, gradient, negative y positive. La metadata
de iconos de Next.js sensible al media query selecciona los archivos sin modificar
`symbol-positive.svg` (charcoal) para UI clara y `symbol-negative.svg` (mint) para
UI oscura. No se añadió un cambio de tema.

Los SVG horizontales y apilados originales que no utilizan gradiente contienen texto
Sora editable. Header y Footer incorporan inline el logo oficial para que se aplique
la fuente de la página; Footer añade namespace al ID raíz para evitar duplicados.
El uso independiente de estos assets basados en texto puede requerir exports oficiales
con texto convertido a contornos. El asset apilado original con gradiente contiene
datos raster embebidos. El artwork, los datos y los colores originales se conservan.

La landing actualmente no utiliza fotografías de stock externas. La geometría del
sitio y las composiciones decorativas en SVG y CSS forman parte de esta implementación.
No se afirman derechos adicionales de licencia o redistribución sobre los assets de
marca proporcionados.

Los paths de los iconos sociales del Footer fueron copiados exactamente del repositorio
oficial de [Simple Icons](https://github.com/simple-icons/simple-icons):

- Discord, X e Instagram: revisión [b86d5c9](https://github.com/simple-icons/simple-icons/tree/b86d5c9a0bdd4f3f5c30898a63654dd32f39fd76/icons).
- LinkedIn: [SVG 13.21.0](https://github.com/simple-icons/simple-icons/blob/13.21.0/icons/linkedin.svg) verificado. No está presente en las versiones actuales; se utiliza explícitamente la fuente histórica oficial, no un path reconstruido.

Se verificaron la [licencia CC0-1.0 del proyecto](https://github.com/simple-icons/simple-icons/blob/b86d5c9a0bdd4f3f5c30898a63654dd32f39fd76/LICENSE.md), su [disclaimer](https://github.com/simple-icons/simple-icons/blob/b86d5c9a0bdd4f3f5c30898a63654dd32f39fd76/DISCLAIMER.md) y la licencia de la versión archivada. Que Simple Icons utilice CC0 no implica que cada icono de marca sea CC0 ni concede derechos sobre marcas registradas; siguen aplicándose los términos individuales de cada marca. Los paths se almacenan localmente, sin dependencia de paquete ni solicitudes de iconos en runtime.

## SEO y contenido compartido en redes

El title y la description finales en español utilizan la Metadata API de Next.js.
Canonical, Open Graph, Twitter, robots y sitemap derivan todas sus URLs públicas de
`SITE_URL`. La homepage incluye Organization JSON-LD escapado con únicamente el
nombre confirmado, perfiles sociales y, cuando están configurados, la URL pública y
el logo oficial.

`/opengraph-image` y `/twitter-image` devuelven PNG reales de 1200 × 630,
prerenderizados mediante route handlers nativos de Next.js usando
[ImageResponse](https://nextjs.org/docs/app/api-reference/functions/image-response).
Ambas rutas utilizan un único renderer compartido que lee
`public/social/techtojob-og.png` desde el filesystem local como una data URL en base64.
ImageResponse ocupa el canvas de 1200 x 630 mediante `objectFit: "cover"`; el PNG
original permanece sin modificaciones. No se necesitan solicitudes externas de
assets en runtime.

Las URLs explícitas en la metadata evitan fallbacks implícitos a localhost cuando
`SITE_URL` no está disponible.

Las páginas secundarias utilizan la plantilla de título `%s | TechToJob`; el título
de la homepage permanece sin cambios. `/aviso-legal` tiene su propio canonical y
`noindex`, manteniendo el aviso provisional fuera de la indexación de buscadores.
Describe únicamente la implementación del torneo y debe ser sustituido por el texto
legal oficial de TechToJob antes de su uso operativo.

## Testimonios

La versión del torneo utiliza los testimonios placeholder permitidos. Una futura
versión operativa debería sustituirlos por testimonios verificados de la comunidad,
fotografías y enlaces a perfiles.

## Newsletter

La franja compacta charcoal contiene un formulario real con label de email,
autocomplete, submit deshabilitado por defecto y un mensaje visible de disponibilidad.
Pulsar Enter en el campo de email no envía ni recarga la página. Actualmente no existe
ningún proveedor de suscripción ni endpoint. El formulario no simula una suscripción
real ni muestra un falso estado de éxito. La integración con un proveedor/backend de
Newsletter queda pendiente para una futura versión operativa posterior al torneo.

El copy del torneo describe una propuesta de correo semanal; "Quiero recibirlas"
permanece deshabilitado junto al mensaje visible que indica que todavía no está
disponible.

## Uso de IA

Se utilizaron y declararon herramientas de IA según lo exigido por las reglas del
torneo. ChatGPT y Codex ayudaron en planificación, iteración de copy,
implementación/refinamiento y revisión técnica. Claude (Anthropic) y Gemini (Google)
también se utilizaron para propuestas adicionales de dirección artística, prototipos
visuales y revisión independiente. Las decisiones finales de diseño e implementación
fueron seleccionadas, revisadas y validadas por el autor, quien puede explicar y
defender el trabajo.

## Accesibilidad / rendimiento

Landmarks semánticos, un único H1, niveles de headings ordenados, enlaces reales,
foco explícito por teclado y controles de formulario con labels contribuyen a la
accesibilidad. El menú mobile utiliza `details`/`summary` nativos, mejorados para
cerrarse al seleccionar una opción o pulsar Escape y para gestionar el foco. La
apertura y el cierre combinan opacidad y un desplazamiento de 6px durante 210ms;
con reduced motion son inmediatos. Sin
JavaScript sigue abriéndose y permitiendo navegar, aunque debe cerrarse manualmente.

El Header utiliza CSS sticky con scroll padding global para anchors/foco y anchors
con smooth scrolling nativo que respetan reduced motion. Los grupos de navegación
del Footer organizan ocho anchors existentes bajo Explorar y Comunidad, además de
un grupo Legal que enlaza a `/aviso-legal`, en tres columnas desde 1024px; su fila de redes sociales se encuentra
debajo del tagline. Un skip link visible por teclado apunta al contenido principal
en ambas páginas. Los iconos sociales tienen nombres accesibles y áreas objetivo de
44px; los gráficos decorativos están ocultos para las tecnologías de asistencia.

Las comprobaciones responsive cubren 1440, 1366, 1280, 1024, 900, 820, 768, 430,
390 y 375 px.

La landing utiliza Server Components y renderizado estático. GSAP y pequeños helpers
basados en IntersectionObserver animan el arte decorativo una sola vez, con estados
finales correctos tanto sin JavaScript como con reduced motion. El CTA final /
Comunidad es un pequeño cluster comunitario: tres terminales de miembros alrededor
de un elemento compartido de conversación. DrawOnView revela sus piezas decorativas
una vez durante 0.95 segundos y luego permanecen estáticas. No se utiliza
ScrollTrigger, reverse ni scroll scrubbing. La geometría SVG y CSS proporcionan los
recursos visuales sin descargas fotográficas ni estado React por frame. Next.js
aporta su runtime cliente estándar del framework.

## Lighthouse

Mediciones verificadas en el sitio del torneo desplegado, proporcionadas por el autor:

| Modo | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| Mobile | 94 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

Estos valores describen la revisión de producción medida. Para la entrega debe
capturarse y conservarse la evidencia de Lighthouse requerida; estas mediciones no
constituyen una nueva auditoría de los cambios locales.

## Deployment

El deployment del torneo está alojado en Vercel en
https://techtojob.vercel.app/. Para un deployment futuro, configurar `SITE_URL`,
instalar con Bun y ejecutar el build mediante `bun run build`. Un host con Node.js
puede servir el build mediante `bun run start`.

Después de cada release, verificar canonical, robots, sitemap, structured data y
ambas rutas de imágenes sociales en el origen público.

## Entrega del torneo

- [ ] Confirmar el repositorio público y la revisión final enviada.
- [x] Desplegar y verificar la URL pública de producción.
- [ ] Capturar manualmente screenshots finales de desktop y mobile.
- [x] Ejecutar Lighthouse sobre el sitio desplegado.
- [ ] Capturar/guardar la evidencia de Lighthouse requerida.
- [ ] Enviar repositorio, deployment y evidencias requeridas en Discord.
