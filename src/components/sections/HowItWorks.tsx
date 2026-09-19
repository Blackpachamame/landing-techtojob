import messages from "../../../messages/es.json";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  const content = messages.HowItWorks;

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className={`${styles.section} bg-brand-white py-20 text-brand-dark md:py-24 lg:py-28`}
    >
      <div className="page-container">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-20">
          <div>
            <p className="section-eyebrow mb-6">{content.eyebrow}</p>
            <h2 id="how-it-works-title" className="max-w-160 section-title">
              {content.title}
            </h2>
          </div>
          <p className="max-w-145 text-base leading-[1.7] text-brand-dark/80 md:text-lg lg:pb-1">
            {content.description}
          </p>
        </div>

        <div className="mt-14 md:mt-18 xl:mt-20">
          <ol className={styles.journey}>
            {content.steps.map((step, index) => (
              <li key={step.number} className={styles.step}>
                {index < content.steps.length - 1 && [
                  {
                    variant: "horizontal",
                    viewBox: "0 0 100 160",
                    path: index % 2 === 0
                      ? "M0 40C28-10 48 56 100 104"
                      : "M0 104C30 148 64 46 100 40",
                    className: styles.connector,
                  },
                  {
                    variant: "tablet",
                    viewBox: "0 0 44 100",
                    path: "M20 0C20 30 28 38 28 52S20 78 20 100",
                    className: `${styles.rail} ${styles.tablet}`,
                  },
                  {
                    variant: "mobile",
                    viewBox: "0 0 44 100",
                    path: "M20 0C20 24 36 34 36 52S20 78 20 100",
                    className: `${styles.rail} ${styles.mobile}`,
                  },
                ].map(({ variant, viewBox, path, className }) => (
                  <svg
                    key={variant}
                    aria-hidden="true"
                    focusable="false"
                    className={className}
                    viewBox={viewBox}
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path d={path} className={styles.connectorTrace} />
                  </svg>
                ))}
                <span aria-hidden="true" className={styles.node} />
                <span className={styles.number}>{step.number}</span>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
