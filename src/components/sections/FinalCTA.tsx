import messages from "../../../messages/es.json";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  const content = messages.FinalCTA;

  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-title"
      className={`${styles.section} bg-brand-mint text-brand-dark`}
    >
      <div className={`page-container ${styles.composition}`}>
        <div className="relative z-1 min-w-0">
          <p className="section-eyebrow mb-7">{content.eyebrow}</p>
          <h2 id="final-cta-title" className={styles.title}>
            {content.title}
          </h2>
          <p className="mt-7 max-w-120 text-base leading-[1.75] md:text-lg">
            {content.description}
          </p>
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex min-h-14 items-center justify-between gap-8 rounded-full border border-brand-dark bg-brand-dark px-6 py-4 text-sm font-semibold text-brand-white hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-brand-dark motion-safe:transition-colors"
          >
            {content.cta}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            >
              <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>

        <div aria-hidden="true" className={styles.artwork}>
          <svg viewBox="0 0 600 600" fill="none" className={styles.planes}>
            <defs>
              <linearGradient id="closing-plane-light" x1="146" y1="540" x2="465" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity="0.04" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0.65" />
              </linearGradient>
              <linearGradient id="closing-plane-shadow" x1="310" y1="80" x2="80" y2="565" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2f3436" stopOpacity="0.86" />
                <stop offset="1" stopColor="#2f3436" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <g className={styles.farPlane} stroke="#2f3436" strokeOpacity="0.2">
              <path d="M24 532 290 42 539 118 272 608" />
              <path d="M-28 514 238 24 487 100" />
            </g>
            <path d="M58 521 298 79 378 104 139 546Z" fill="url(#closing-plane-shadow)" />
            <path d="M139 546 378 104 467 131 228 573Z" fill="url(#closing-plane-light)" stroke="#ffffff" strokeOpacity="0.55" />
            <path d="M298 79 410 23 489 48 378 104Z" fill="#2f3436" fillOpacity="0.2" />
            <path d="M378 104 489 48 578 75 467 131Z" fill="#ffffff" fillOpacity="0.38" />
            <path d="M228 573 467 131 578 75 339 517Z" fill="url(#closing-plane-light)" stroke="#ffffff" strokeOpacity="0.35" />
            <path d="M139 546 378 104 489 48M228 573 339 517" stroke="#2f3436" strokeOpacity="0.32" />
            <path d="M72 584h38m-19-5v10M549 272v64m-5-64h10" stroke="#2f3436" strokeOpacity="0.4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
