import { readFileSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import messages from "../../../messages/es.json";
import styles from "./Header.module.css";
import MobileMenu from "./MobileMenu";

// Inline the trusted official SVG unchanged so its live text can use Sora.
const logo = readFileSync(
  path.join(process.cwd(), "public/brand/horizontal-negative.svg"),
  "utf8",
);

const navigation = [
  { key: "howItWorks", href: "#how-it-works" },
  { key: "talent", href: "#talent" },
  { key: "companies", href: "#companies" },
  { key: "tournaments", href: "#tournaments" },
  { key: "community", href: "#networking" },
] as const;

export default function Header({ isHomePage = false }: { isHomePage?: boolean }) {
  const content = messages.Navigation;
  const HomeLink = isHomePage ? "a" : Link;
  const routeLinkProps = isHomePage ? {} : { prefetch: false };

  const links = navigation.map(({ key, href }) => (
    <li key={key}>
      <HomeLink
        {...routeLinkProps}
        href={isHomePage ? href : `/${href}`}
        className="block py-3 text-sm text-brand-white/85 underline-offset-8 hover:text-brand-mint hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mint motion-safe:transition-colors"
      >
        {content[key]}
      </HomeLink>
    </li>
  ));

  return (
    <header className={`sticky top-0 z-50 ${styles.header}`}>
      <div className="page-container">
        <div className="flex h-16 items-center justify-between gap-4 min-[360px]:gap-8 lg:h-18">
          <HomeLink
            {...routeLinkProps}
            href={isHomePage ? "#top" : "/"}
            aria-label={content.home}
            className="flex min-h-11 shrink-0 items-center focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-brand-mint"
          >
            <span
              className={styles.logo}
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: logo }}
            />
          </HomeLink>

          <nav aria-label={content.label} className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">{links}</ul>
          </nav>

          <MobileMenu label={content.menu}>
            <nav
              aria-label={content.label}
              className="absolute inset-x-0 top-full z-20 max-h-[calc(100dvh-64px)] overflow-y-auto border-b border-brand-mint/40 bg-brand-dark"
            >
              <ul className="page-container flex flex-col py-5">{links}</ul>
            </nav>
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
