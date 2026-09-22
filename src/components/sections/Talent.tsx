import messages from "../../../messages/es.json";
import BuildIcon from "../ui/BuildIcons";
import styles from "./Talent.module.css";

const fieldIcons = ["code", "bars", "checkCircle"] as const;

export default function Talent() {
  const content = messages.Talent;

  return (
    <section
      id="talent"
      aria-labelledby="talent-title"
      className="bg-brand-mint py-20 text-brand-dark md:py-24 lg:py-28"
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
          <div className={styles.piece}>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-dark text-brand-white">
                  <BuildIcon name="user" />
                </span>
                <div>
                  <p className="text-2xl leading-tight font-semibold tracking-[-0.045em] md:text-[32px]">
                    {content.profile.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-dark/85">
                    {messages.Hero.network.profileDetail}
                  </p>
                </div>
              </div>
              <span className="ml-auto rounded-md bg-brand-mint px-3 py-1.5 text-xs leading-relaxed font-semibold text-brand-dark">
                {messages.Hero.network.available}
              </span>
            </div>
            <dl className={styles.fields}>
              {content.profile.fields.map((field, index) => (
                <div key={field.term} className={styles.field}>
                  <dt className="flex items-center gap-2.5 text-base leading-relaxed font-semibold tracking-[-0.025em]">
                    <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-md border border-brand-dark/30 text-brand-dark">
                      <BuildIcon name={fieldIcons[index]} className="size-5" />
                    </span>
                    {field.term}
                  </dt>
                  <dd className="text-base leading-relaxed text-brand-dark/85">
                    {field.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
