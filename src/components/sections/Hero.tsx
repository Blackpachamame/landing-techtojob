import messages from "../../../messages/es.json";
import HeroNetwork from "./HeroNetwork";
import styles from "./Hero.module.css";

export default function Hero() {
  const content = messages.Hero;
  const titleAccentStart = content.title.lastIndexOf(",") + 1;

  return (
    <section aria-labelledby="hero-title" className={styles.hero}>
      <div className={`page-container ${styles.composition}`}>
        <div className="relative z-1 min-w-0 max-w-2xl">
          <p className="section-eyebrow mb-7 max-w-110 text-brand-mint">
            {content.eyebrow}
          </p>
          <h1
            id="hero-title"
            className={styles.title}
          >
            {content.title.slice(0, titleAccentStart)}
            <span className="text-brand-mint">{content.title.slice(titleAccentStart)}</span>
          </h1>
          <p className="mt-7 max-w-125 text-base leading-[1.75] text-brand-white/75">
            {content.description}
          </p>
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex min-h-14 items-center justify-between gap-8 rounded-full border border-brand-mint bg-brand-mint px-6 py-4 text-sm font-semibold text-brand-dark hover:border-brand-white hover:bg-brand-white focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-brand-mint motion-safe:transition-colors"
          >
            {content.cta}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            >
              <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
        <HeroNetwork />
      </div>
    </section>
  );
}
