import messages from "../../../messages/es.json";
import styles from "./Tournaments.module.css";

export default function Tournaments() {
  const content = messages.Tournaments;

  return (
    <section
      id="tournaments"
      aria-labelledby="tournaments-title"
      className="bg-brand-white py-20 text-brand-dark md:py-24 lg:py-30 xl:py-32"
    >
      <div className="page-container">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 xl:gap-20">
          <div>
            <p className="mb-5 text-[13px] leading-relaxed font-semibold tracking-[0.1em] uppercase">
              {content.eyebrow}
            </p>
            <h2
              id="tournaments-title"
              className="max-w-150 text-4xl leading-[1.1] font-semibold tracking-[-0.045em] text-balance md:text-5xl xl:text-[52px]"
            >
              {content.title}
            </h2>
          </div>
          <div className="max-w-145 space-y-6 text-base leading-[1.7] md:text-lg">
            <p>{content.description}</p>
            <p className="text-brand-dark/80">{content.support}</p>
          </div>
        </div>

        <dl className={styles.format}>
          {content.format.map((item) => (
            <div key={item.term} className={styles.entry}>
              <dt className="text-[28px] leading-tight font-semibold tracking-[-0.035em] xl:text-[32px]">
                {item.term}
              </dt>
              <dd className="mt-3 text-base leading-relaxed md:text-lg">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 bg-brand-mint p-7 md:mt-14 md:p-10 lg:p-12">
          <p className="max-w-[32ch] text-[26px] leading-[1.3] font-semibold tracking-[-0.035em] text-balance md:text-[32px] lg:text-4xl">
            {content.proof}
          </p>
        </div>
      </div>
    </section>
  );
}
