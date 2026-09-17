import messages from "../../../messages/es.json";
import styles from "./Companies.module.css";

export default function Companies() {
  const content = messages.Companies;

  return (
    <section
      id="companies"
      aria-labelledby="companies-title"
      className={`${styles.section} bg-brand-dark py-20 text-brand-white md:py-24 lg:py-28`}
    >
      <div className="page-container">
        <div className={styles.layout}>
          <div>
            <p className="section-eyebrow mb-6 text-brand-mint">
              {content.eyebrow}
            </p>
            <h2
              id="companies-title"
              className="section-title max-w-160"
            >
              {content.title}
            </h2>
            <p className="mt-7 max-w-125 text-base leading-[1.7] text-brand-white/80 md:text-lg">
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
        </div>

        <p className={styles.note}>{content.note}</p>
      </div>
    </section>
  );
}
