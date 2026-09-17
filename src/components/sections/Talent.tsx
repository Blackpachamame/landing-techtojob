import messages from "../../../messages/es.json";
import styles from "./Talent.module.css";

export default function Talent() {
  const content = messages.Talent;

  return (
    <section
      id="talent"
      aria-labelledby="talent-title"
      className={`${styles.section} bg-brand-mint py-20 text-brand-dark md:py-24 lg:py-32`}
    >
      <div className="page-container grid items-center gap-14 md:gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20 xl:gap-28">
        <div className="max-w-160">
          <p className="section-eyebrow mb-6">
            {content.eyebrow}
          </p>
          <h2
            id="talent-title"
            className="section-title"
          >
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-[1.7] md:text-lg">
            {content.description}
          </p>
          <p className="mt-8 border-t border-brand-dark/30 pt-6 text-base leading-relaxed font-semibold">
            {content.note}
          </p>
        </div>

        <div className={styles.profile}>
          <p className="text-4xl leading-tight font-semibold tracking-[-0.045em] md:text-5xl">
            {content.profile.label}
          </p>
          <dl className={styles.fields}>
            {content.profile.fields.map((field) => (
              <div key={field.term} className={styles.field}>
                <dt className="text-lg leading-snug font-semibold tracking-[-0.02em]">
                  {field.term}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-brand-white/80">
                  {field.description}
                  <span aria-hidden="true" className={styles.branch} />
                </dd>
              </div>
            ))}
          </dl>
          <p className={styles.company}>
            {content.profile.company}
            <span aria-hidden="true" className={styles.node} />
          </p>
        </div>
      </div>
    </section>
  );
}
