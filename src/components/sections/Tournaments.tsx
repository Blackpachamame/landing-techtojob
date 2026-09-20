import messages from "../../../messages/es.json";
import DrawOnView from "./DrawOnView";
import styles from "./Tournaments.module.css";

export default function Tournaments() {
  const content = messages.Tournaments;

  return (
    <section id="tournaments" aria-labelledby="tournaments-title" className="bg-brand-white pt-20 text-brand-dark md:pt-24 lg:pt-28">
      <div className="page-container">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 xl:gap-20">
          <div>
            <p className="section-eyebrow mb-6">{content.eyebrow}</p>
            <h2 id="tournaments-title" className="section-title max-w-150">{content.title}</h2>
          </div>
          <div className="max-w-145 space-y-6 text-base leading-[1.7] md:text-lg">
            <p>{content.description}</p>
            <p className="text-brand-dark/80">{content.support}</p>
          </div>
        </div>

        <div className={styles.assembly}>
          <dl className={styles.format}>
            {content.format.map((item, index) => (
              <div key={item.term} className={styles.entry}>
                <span aria-hidden="true" data-reveal data-duration=".35" data-delay={index * 0.2} className={styles.surface} />
                <dt className="text-[28px] leading-tight font-semibold tracking-[-0.035em] xl:text-[32px]">{item.term}</dt>
                <dd className="mt-3 text-base leading-relaxed md:text-lg">{item.description}</dd>
              </div>
            ))}
          </dl>
          <DrawOnView />
        </div>

        <div className={styles.proof}>
          <p className="max-w-[24ch] text-[34px] leading-[1.1] font-semibold tracking-[-0.05em] text-balance md:text-5xl lg:text-[64px]">{content.proof}</p>
        </div>
      </div>
    </section>
  );
}
