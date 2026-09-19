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
          <svg aria-hidden="true" focusable="false" className={styles.desktopRail} viewBox="0 0 100 2" preserveAspectRatio="none">
            <path data-draw d="M0 1H100" />
          </svg>
          <ol className={styles.journey}>
            {content.steps.map((step, index) => (
              <li key={step.number} className={styles.step}>
                {index % 2 === 0 && (
                  <svg aria-hidden="true" focusable="false" className={styles.tabletRail} viewBox="0 0 100 2" preserveAspectRatio="none">
                    <path data-draw data-duration=".45" data-delay={index * 0.225} d="M0 1H100" />
                  </svg>
                )}
                {index < content.steps.length - 1 && (
                  <svg aria-hidden="true" focusable="false" className={styles.mobileRail} viewBox="0 0 2 100" preserveAspectRatio="none">
                    <path data-draw data-duration=".45" data-delay={index * 0.2} d="M1 0V100" />
                  </svg>
                )}
                <svg aria-hidden="true" focusable="false" className={styles.station} viewBox="0 0 24 24">
                  <rect data-reveal data-delay={0.15 + index * 0.23} x="1" y="1" width="22" height="22" rx="6" />
                </svg>
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
