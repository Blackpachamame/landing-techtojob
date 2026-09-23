import messages from "../../../messages/es.json";
import HeroBuild from "./HeroBuild";
import styles from "./Hero.module.css";

export default function Hero() {
  const content = messages.Hero;

  return (
    <section id="top" aria-labelledby="hero-title" className={styles.hero}>
      <div className={`page-container ${styles.composition}`}>
        <div className={styles.copy}>
          <h1
            id="hero-title"
            className={styles.title}
          >
            {content.title.beforeAccent}
            <span className="text-brand-mint">{content.title.accent}</span>
            <span className="text-brand-white/75">{content.title.afterAccent}</span>
          </h1>
          <p className={`max-w-140 text-base text-brand-white/80 ${styles.description}`}>
            {content.description}
          </p>
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex min-h-14 w-full items-center justify-between gap-6 rounded-xl border border-brand-mint bg-brand-mint px-6 py-4 text-sm font-semibold text-brand-dark hover:border-brand-white hover:bg-brand-white focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-brand-mint motion-safe:transition-colors sm:w-auto ${styles.cta}`}
          >
            {content.cta}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            >
              <path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
        <HeroBuild />
      </div>
    </section>
  );
}
