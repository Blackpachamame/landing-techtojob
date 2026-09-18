import { readFileSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import messages from "../../../messages/es.json";

// Preserve the official artwork and Sora text; namespace its root ID for reuse.
const logo = readFileSync(
  path.join(process.cwd(), "public/brand/horizontal-negative.svg"),
  "utf8",
).replace('id="Capa_1"', 'id="footer-brand-logo"');

const navigation = [
  { key: "howItWorks", href: "#how-it-works" },
  { key: "talent", href: "#talent" },
  { key: "companies", href: "#companies" },
  { key: "tournaments", href: "#tournaments" },
  { key: "community", href: "#networking" },
] as const;

const linkClassName =
  "inline-flex min-h-11 items-center py-2 text-sm leading-relaxed text-brand-white/85 underline decoration-brand-white/30 underline-offset-4 hover:text-brand-mint hover:decoration-brand-mint focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mint motion-safe:transition-colors";

export default function Footer() {
  const content = messages.Footer;

  return (
    <footer className="bg-brand-dark pt-14 pb-8 text-brand-white md:pt-16">
      <div className="page-container">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_0.7fr] md:gap-8 lg:gap-16">
          <div>
            <Link
              href="/"
              aria-label={messages.Navigation.home}
              className="inline-flex min-h-11 items-center focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-brand-mint"
            >
              <span
                aria-hidden="true"
                className="block w-48 md:w-56 [&_svg]:block [&_svg]:h-auto [&_svg]:w-full"
                dangerouslySetInnerHTML={{ __html: logo }}
              />
            </Link>
            <p className="mt-5 max-w-80 text-sm leading-[1.8] text-brand-white/75">
              {content.tagline}
            </p>
          </div>
          <nav aria-label={messages.Navigation.label}>
            <ul>
              {navigation.map(({ key, href }) => (
                <li key={key}>
                  <a href={href} className={linkClassName}>{messages.Navigation[key]}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ul>
            {content.socialLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
                  {label}
                  <span aria-hidden="true" className="ml-3 text-brand-mint">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 border-t border-brand-white/15 pt-6 text-xs leading-relaxed text-brand-white/70 md:mt-12">
          {content.copyright}
        </p>
      </div>
    </footer>
  );
}
