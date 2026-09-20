import messages from "../../../messages/es.json";
import styles from "./Talent.module.css";

export default function Talent() {
  const content = messages.Talent;

  return (
    <section
      id="talent"
      aria-labelledby="talent-title"
      className="bg-brand-mint py-20 text-brand-dark md:py-24"
    >
      <div className="page-container grid items-center gap-14 md:gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-16">
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
          <span aria-hidden="true" className={styles.socket} />
          <div className={styles.piece}>
            <p className="text-4xl leading-tight font-semibold tracking-[-0.045em] md:text-5xl">
              {content.profile.label}
            </p>
            <dl className={styles.fields}>
              {content.profile.fields.map((field) => (
                <div key={field.term} className={styles.field}>
                  <dt className="text-base leading-relaxed font-semibold tracking-[-0.025em]">
                    {field.term}
                  </dt>
                  <dd className="text-base leading-relaxed text-brand-dark/85">
                    {field.description}
                  </dd>
                </div>
              ))}
            </dl>
            <p className={styles.company}>{content.profile.company}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
