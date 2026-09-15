import messages from "../../../messages/es.json";
import styles from "./Talent.module.css";

export default function Talent() {
  const content = messages.Talent;

  return (
    <section
      id="talent"
      aria-labelledby="talent-title"
      className="bg-brand-mint py-20 text-brand-dark md:py-24 lg:py-30 xl:py-32"
    >
      <div className="page-container grid items-center gap-12 md:gap-16 lg:grid-cols-[0.8fr_1fr] lg:gap-12 xl:gap-20">
        <div className="max-w-160">
          <p className="mb-5 text-[13px] leading-relaxed font-semibold tracking-[0.1em] uppercase">
            {content.eyebrow}
          </p>
          <h2
            id="talent-title"
            className="text-4xl leading-[1.1] font-semibold tracking-[-0.045em] text-balance md:text-5xl xl:text-[52px]"
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
          <p className="text-3xl leading-tight font-semibold tracking-[-0.035em]">
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
