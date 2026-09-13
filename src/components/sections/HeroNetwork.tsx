import messages from "../../../messages/es.json";
import styles from "./HeroNetwork.module.css";

export default function HeroNetwork() {
  const content = messages.Hero.network;

  return (
    <div aria-hidden="true" className={styles.network}>
      <svg viewBox="0 0 520 580" fill="none" className={styles.paths}>
        <g stroke="currentColor" strokeOpacity="0.14" strokeWidth="1">
          <circle cx="270" cy="290" r="202" />
          <circle cx="270" cy="290" r="142" strokeDasharray="2 8" />
          <path d="M270 40v20m0 460v20M20 290h20m460 0h20" />
        </g>

        <path
          d="M66 146h38c92 0 64 144 160 144S336 92 436 92"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="48"
        />
        <path
          d="M60 456c118 0 106-166 204-166s82 188 194 188"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="48"
        />
        <g stroke="currentColor" strokeWidth="2">
          <path d="M66 146h38c92 0 64 144 160 144S336 92 436 92" />
          <path d="M60 456c118 0 106-166 204-166s82 188 194 188" />
        </g>

        <g fill="var(--color-brand-dark)" stroke="currentColor" strokeWidth="2">
          <circle cx="86" cy="146" r="8" />
          <circle cx="426" cy="92" r="8" />
          <circle cx="78" cy="454" r="8" />
          <circle cx="444" cy="477" r="8" />
        </g>
        <circle cx="264" cy="290" r="40" fill="var(--color-brand-mint)" />
        <g stroke="var(--color-brand-dark)" strokeWidth="1.5">
          <circle cx="264" cy="290" r="22" strokeOpacity="0.2" />
          <circle cx="264" cy="290" r="12" />
        </g>
        <circle cx="264" cy="290" r="4" fill="var(--color-brand-dark)" />
        <g fill="currentColor">
          <circle cx="178" cy="211" r="4" />
          <circle cx="346" cy="374" r="4" />
        </g>
      </svg>

      <div className={`${styles.label} ${styles.profile}`}>
        <span className={styles.caption}>{content.profile}</span>
        <span className={styles.name}>{content.profileDetail}</span>
        <span className={styles.status}>
          <span className="size-1.5 rounded-full bg-brand-mint" />
          {content.available}
        </span>
      </div>
      <div className={`${styles.label} ${styles.tournament}`}>
        <span className={styles.caption}>{content.tournament}</span>
        <span className={styles.name}>{content.tournamentDetail}</span>
      </div>
      <div className={`${styles.label} ${styles.community}`}>
        <span className={styles.name}>{content.community}</span>
      </div>
      <div className={`${styles.label} ${styles.company}`}>
        <span className={styles.caption}>{content.company}</span>
        <span className={styles.name}>{content.companyDetail}</span>
      </div>
    </div>
  );
}
