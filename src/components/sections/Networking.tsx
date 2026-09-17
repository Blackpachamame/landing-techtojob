import messages from "../../../messages/es.json";
import styles from "./Networking.module.css";

export default function Networking() {
  const content = messages.Networking;

  return (
    <section
      id="networking"
      aria-labelledby="networking-title"
      className={`${styles.section} bg-brand-mint py-20 text-brand-dark md:py-24 lg:py-28`}
    >
      <div className="page-container">
        <div className={styles.intro}>
          <div>
            <p className="section-eyebrow mb-6">{content.eyebrow}</p>
            <h2 id="networking-title" className="section-title max-w-240">
              {content.title}
            </h2>
          </div>
          <p className="max-w-160 text-base leading-[1.75] lg:pt-12">
            {content.description}
          </p>
        </div>

        <ul className={styles.signals}>
          {content.signals.map((signal) => (
            <li key={signal} className={styles.signal}>
              <span aria-hidden="true" className={styles.mark} />
              {signal}
            </li>
          ))}
        </ul>

        <div className={`${styles.closing} grid gap-6 pt-8 md:gap-8 md:pt-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12`}>
          <p className="max-w-150 text-xl leading-relaxed font-semibold tracking-[-0.025em] text-balance md:text-2xl">
            {content.note}
          </p>
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-fit max-w-full items-center gap-3 py-2 text-base leading-relaxed font-semibold underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark md:text-lg"
          >
            <span>{content.discordCta}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5 shrink-0"
            >
              <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
