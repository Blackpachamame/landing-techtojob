import { readFileSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import messages from "../../../messages/es.json";
import { socialIconPaths } from "./socialIconPaths";

// Preserve the official artwork and Sora text; namespace its root ID for reuse.
const logo = readFileSync(
  path.join(process.cwd(), "public/brand/horizontal-negative.svg"),
  "utf8",
).replace('id="Capa_1"', 'id="footer-brand-logo"');

const exploreNavigation = [
  { key: "howItWorks", href: "#how-it-works" },
  { key: "talent", href: "#talent" },
  { key: "companies", href: "#companies" },
  { key: "tournaments", href: "#tournaments" },
] as const;

const communityNavigation = [
  { label: messages.Navigation.community, href: "#networking" },
  { label: messages.Testimonials.eyebrow, href: "#testimonials" },
  { label: messages.News.eyebrow, href: "#news" },
  { label: messages.Newsletter.eyebrow, href: "#newsletter" },
];

const linkClassName =
  "inline-flex min-h-11 items-center py-2 text-sm leading-relaxed text-brand-white/85 underline decoration-brand-white/30 underline-offset-4 hover:text-brand-mint hover:decoration-brand-mint focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mint motion-safe:transition-colors";

export default function Footer({ isHomePage = false }: { isHomePage?: boolean }) {
  const content = messages.Footer;
  const HomeLink = isHomePage ? "a" : Link;
  const routeLinkProps = isHomePage ? {} : { prefetch: false };

  return (
    <footer className="bg-brand-deep pt-14 pb-8 text-brand-white md:pt-16">
      <div className="page-container">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-12 lg:gap-24">
          <div>
            <HomeLink
              {...routeLinkProps}
              href={isHomePage ? "#top" : "/"}
              aria-label={messages.Navigation.home}
              className="inline-flex min-h-11 items-center focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-brand-mint">
              <span
                aria-hidden="true"
                className="block w-48 md:w-56 [&_svg]:block [&_svg]:h-auto [&_svg]:w-full"
                dangerouslySetInnerHTML={{ __html: logo }}
              />
            </HomeLink>
            <p className="mt-5 max-w-80 text-sm leading-[1.8] text-brand-white/75">
              {content.tagline}
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {content.socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-11 items-center justify-center rounded-lg border border-brand-white/30 text-brand-white hover:border-brand-mint hover:bg-brand-mint hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mint">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5">
                      <path d={socialIconPaths[label]} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-8 min-[430px]:grid-cols-2 md:gap-6 lg:grid-cols-3">
            <nav aria-labelledby="footer-explore-title">
              <h2
                id="footer-explore-title"
                className="mb-4 text-xs font-semibold tracking-[.12em] text-brand-mint uppercase">
                {content.exploreHeading}
              </h2>
              <ul>
                {exploreNavigation.map(({ key, href }) => (
                  <li key={key}>
                    <HomeLink {...routeLinkProps} href={isHomePage ? href : `/${href}`} className={linkClassName}>
                      {messages.Navigation[key]}
                    </HomeLink>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-labelledby="footer-community-title">
              <h2
                id="footer-community-title"
                className="mb-4 text-xs font-semibold tracking-[.12em] text-brand-mint uppercase">
                {content.communityHeading}
              </h2>
              <ul>
                {communityNavigation.map(({ label, href }) => (
                  <li key={href}>
                    <HomeLink {...routeLinkProps} href={isHomePage ? href : `/${href}`} className={linkClassName}>
                      {label}
                    </HomeLink>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-labelledby="footer-legal-title">
              <h2
                id="footer-legal-title"
                className="mb-4 text-xs font-semibold tracking-[.12em] text-brand-mint uppercase">
                {content.legalHeading}
              </h2>
              <ul>
                <li>
                  <Link href="/aviso-legal" prefetch={false} aria-current={isHomePage ? undefined : "page"} className={linkClassName}>
                    {content.legalNotice}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-brand-white/15 pt-6 text-xs leading-relaxed text-brand-white/70 md:mt-12 md:flex-row md:items-center md:justify-between">
          <p>{content.copyright}</p>
          <p>
            {content.authorCredit}{" "}
            <a
              href="https://github.com/Blackpachamame"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-brand-white/30 underline-offset-4 hover:text-brand-mint hover:decoration-brand-mint focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mint motion-safe:transition-colors">
              {content.authorName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
