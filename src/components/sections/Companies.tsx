import messages from "../../../messages/es.json";
import styles from "./Companies.module.css";

export default function Companies() {
  const content = messages.Companies;

  return (
    <section
      id="companies"
      aria-labelledby="companies-title"
      className="bg-brand-dark py-20 text-brand-white md:py-24 lg:py-30 xl:py-32"
    >
      <div className="page-container">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16 xl:gap-20">
          <div>
            <p className="mb-5 text-[13px] leading-relaxed font-semibold tracking-[0.1em] uppercase">
              {content.eyebrow}
            </p>
            <h2
              id="companies-title"
              className="max-w-160 text-4xl leading-[1.1] font-semibold tracking-[-0.045em] text-balance md:text-5xl xl:text-[52px]"
            >
              {content.title}
            </h2>
          </div>
          <p className="max-w-145 text-base leading-[1.7] text-brand-white/80 md:text-lg lg:pb-1">
            {content.description}
          </p>
        </div>

        <div className={styles.context}>
          <p className={styles.source}>{content.context.source}</p>
          <ul className={styles.signals}>
            {content.context.signals.map((signal) => (
              <li key={signal} className={styles.signal}>
                <span aria-hidden="true" className={styles.marker} />
                {signal}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 border-t border-brand-white/20 pt-7 text-lg leading-relaxed font-semibold tracking-[-0.02em] md:mt-14 md:text-xl">
          {content.note}
        </p>
      </div>
    </section>
  );
}
