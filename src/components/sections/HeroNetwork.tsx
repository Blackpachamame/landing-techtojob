import messages from "../../../messages/es.json";
import styles from "./HeroNetwork.module.css";

export default function HeroNetwork() {
  const content = messages.Hero.network;

  return (
    <div className={styles.network}>
      <div aria-hidden="true" className={styles.field} />
      <svg aria-hidden="true" viewBox="0 0 600 640" fill="none" className={styles.paths}>
        <defs>
          <linearGradient id="path-light" x1="110" y1="80" x2="480" y2="570" gradientUnits="userSpaceOnUse">
            <stop stopColor="#84c0bf" stopOpacity="0.05" />
            <stop offset="0.45" stopColor="#84c0bf" stopOpacity="0.85" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="fold-light" x1="210" y1="160" x2="450" y2="470" gradientUnits="userSpaceOnUse">
            <stop stopColor="#84c0bf" stopOpacity="0.03" />
            <stop offset="0.54" stopColor="#84c0bf" stopOpacity="0.28" />
            <stop offset="1" stopColor="#84c0bf" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d="M312 96C456 76 532 210 489 350C450 478 283 566 166 481C45 393 151 236 265 204C410 163 481 324 385 417C304 496 167 375 206 273" stroke="url(#path-light)" strokeWidth="1.2" />
        <path d="M330 123C459 153 477 285 409 399C344 509 219 533 165 440C114 351 206 164 330 123Z" fill="url(#fold-light)" stroke="url(#path-light)" />
        <path d="M330 123C267 206 433 311 409 399C389 471 237 480 165 440C264 421 220 245 330 123Z" fill="url(#fold-light)" stroke="url(#path-light)" />
        <path d="M-60 190C67 65 222 166 267 269S409 458 656 336M-65 510C89 565 152 495 207 376S469 86 661 137" stroke="url(#path-light)" strokeWidth="1.5" />
        <path d="M-80 211C79 65 212 177 256 278S421 476 658 356M-63 532C110 576 164 503 224 379S474 107 662 157" stroke="url(#path-light)" strokeOpacity="0.3" />
        <path d="M84 86h28m-14-14v28M501 529h28m-14-14v28M79 573h95m-95-8v16M529 75v65m-8-65h16" stroke="#84c0bf" strokeOpacity="0.35" />
        <g fill="#84c0bf">
          <circle cx="158" cy="155" r="3" />
          <circle cx="446" cy="166" r="3" />
          <circle cx="470" cy="416" r="3" />
          <circle cx="178" cy="467" r="3" />
        </g>
      </svg>
      <div className={`${styles.label} ${styles.profile}`}>
        <span className={styles.caption}>{content.profile}</span>
        <span className={styles.name}>{content.profileDetail}</span>
        <span className={styles.status}>
          <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-mint" />
          {content.available}
        </span>
      </div>
      <div className={`${styles.label} ${styles.tournament}`}>
        <span className={styles.caption}>{content.tournament}</span>
        <span className={styles.name}>{content.tournamentDetail}</span>
      </div>
      <div className={styles.community}>
        <span aria-hidden="true" className={styles.communityMark} />
        <span>{content.community}</span>
      </div>
      <div className={`${styles.label} ${styles.company}`}>
        <span className={styles.caption}>{content.company}</span>
        <span className={styles.name}>{content.companyDetail}</span>
      </div>
    </div>
  );
}
