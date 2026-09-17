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
            <p className="section-eyebrow mb-6">
              {content.eyebrow}
            </p>
            <h2
              id="how-it-works-title"
              className="max-w-160 section-title"
            >
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
                {index < content.steps.length - 1 && (
                  <>
                    <span aria-hidden="true" className={styles.rail} />
                    <svg
                      aria-hidden="true"
                      className={styles.connector}
                      viewBox="0 0 100 48"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <path
                        d={
                          index % 2 === 0
                            ? "M0 0 C50 0 50 48 100 48"
                            : "M0 48 C50 48 50 0 100 0"
                        }
                        stroke="currentColor"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </>
                )}
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
