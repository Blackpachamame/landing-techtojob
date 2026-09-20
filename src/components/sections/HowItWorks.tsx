import messages from "../../../messages/es.json";
import DrawOnView from "./DrawOnView";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  const content = messages.HowItWorks;
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-title" className="bg-brand-white py-20 text-brand-dark md:py-24 lg:py-28">
      <div className="page-container">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-20">
          <div>
            <p className="section-eyebrow mb-6">{content.eyebrow}</p>
            <h2 id="how-it-works-title" className="section-title max-w-160">{content.title}</h2>
          </div>
          <p className="max-w-145 text-base leading-[1.7] text-brand-dark/80 md:text-lg">{content.description}</p>
        </div>
        <div className={styles.process}>
          <span aria-hidden="true" data-grow="x" className={styles.desktopRail} />
          <span aria-hidden="true" data-grow="x" data-duration=".45" className={`${styles.tabletRail} ${styles.firstRow}`} />
          <span aria-hidden="true" data-grow="x" data-duration=".45" data-delay=".45" className={`${styles.tabletRail} ${styles.secondRow}`} />
          <span aria-hidden="true" data-grow="y" className={styles.mobileRail} />
          <ol className={styles.journey}>
            {content.steps.map((step, index) => (
              <li key={step.number} className={styles.step}>
                <span aria-hidden="true" data-reveal data-delay={0.15 + index * 0.23} className={styles.station} />
                <span className={styles.number}>{step.number}</span>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </li>
            ))}
          </ol>
          <DrawOnView />
        </div>
      </div>
    </section>
  );
}
