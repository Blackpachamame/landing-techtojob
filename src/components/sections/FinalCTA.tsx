import messages from "../../../messages/es.json";
import styles from "./FinalCTA.module.css";
import DrawOnView from "./DrawOnView";

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
            className="mt-8 inline-flex min-h-14 items-center justify-between gap-8 rounded-xl border border-brand-dark bg-brand-dark px-6 py-4 text-sm font-semibold text-brand-white hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-brand-dark"
          >
            {content.cta}
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5 shrink-0"
            >
              <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>

        <div aria-hidden="true" className={styles.artwork}>
          <svg aria-hidden="true" focusable="false" viewBox="0 0 352 350" className={styles.fragment}>
            <g data-reveal data-duration=".25">
              <rect x="40" y="30" width="80" height="80" rx="18" className={styles.whiteFace} />
              <circle cx="80" cy="58" r="10" className={styles.darkFace} />
              <path d="M60 91v-5a20 17 0 0 1 40 0v5Z" className={styles.darkFace} />
            </g>
            <g data-reveal data-duration=".25" data-delay=".15">
              <rect x="236" y="60" width="72" height="72" rx="22" className={styles.moduleFace} />
              <circle cx="272" cy="85" r="9" className={styles.whiteFace} />
              <path d="M254 116v-4a18 15 0 0 1 36 0v4Z" className={styles.whiteFace} />
            </g>
            <g data-reveal data-duration=".25" data-delay=".3">
              <rect x="142" y="254" width="84" height="78" rx="16" className={styles.darkFace} />
              <circle cx="184" cy="280" r="10" className={styles.whiteFace} />
              <path d="M162 314v-5a22 17 0 0 1 44 0v5Z" className={styles.whiteFace} />
            </g>
            <g data-reveal data-duration=".4" data-delay=".55">
              <path d="M106 132h106a24 24 0 0 1 24 24v46a24 24 0 0 1-24 24h-22l-26 20v-20h-58a24 24 0 0 1-24-24v-46a24 24 0 0 1 24-24Z" className={styles.conversation} />
              <circle cx="133" cy="179" r="5" className={styles.darkFace} />
              <circle cx="159" cy="179" r="5" className={styles.darkFace} />
              <circle cx="185" cy="179" r="5" className={styles.darkFace} />
            </g>
          </svg>
          <DrawOnView />
        </div>
      </div>
    </section>
  );
}
