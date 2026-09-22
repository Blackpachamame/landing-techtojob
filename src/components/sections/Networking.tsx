import messages from "../../../messages/es.json";
import styles from "./Networking.module.css";

// Original decorative marks: channel, community and opportunity.
const signalIcons = [
  <path key="channel" d="M10 5 8 23M20 5l-2 18M5 11h20M4 18h20" />,
  <g key="community">
    <circle cx="10" cy="9" r="3" />
    <circle cx="21" cy="10" r="2.5" />
    <path d="M3 23v-3a7 7 0 0 1 14 0v3ZM20 16a5 5 0 0 1 6 5v2h-5" />
  </g>,
  <path key="opportunity" d="M11 8V5h8v3M4 9h22v15H4ZM4 14l11 4 11-4M15 16v4" />,
];

export default function Networking() {
  const content = messages.Networking;

  return (
    <section id="networking" aria-labelledby="networking-title" className={`${styles.section} bg-brand-dark py-20 text-brand-white md:py-24 lg:py-28`}>
      <div className={`page-container ${styles.composition}`}>
        <div className={styles.main}>
          <div className={styles.intro}>
            <p className="section-eyebrow mb-6 text-brand-mint">{content.eyebrow}</p>
            <h2 id="networking-title" className="section-title max-w-240">{content.title}</h2>
            <p className="mt-6 max-w-160 text-base leading-[1.75] text-brand-white/80 md:text-lg">{content.description}</p>
          </div>
          <ul className={styles.signals}>
            {content.signals.map((signal, index) => (
              <li key={signal} className={styles.signal}>
                <span aria-hidden="true" className={styles.terminal}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {signalIcons[index]}
                  </svg>
                </span>
                <span className={styles.label}>{signal}</span>
              </li>
            ))}
          </ul>
        </div>
        <svg aria-hidden="true" focusable="false" viewBox="0 0 320 460" className={styles.fragment}>
          <path d="M36 0H142V104Q142 174 212 174H272Q300 174 300 202V410L260 450H218Q210 450 210 442V318Q210 308 200 308H102Q36 308 36 242Z" className={styles.fragmentSide} />
          <path d="M16 0H122V84Q122 154 192 154H252Q280 154 280 182V390Q280 410 260 410H198Q190 410 190 402V298Q190 288 180 288H82Q16 288 16 222Z" className={styles.fragmentFace} />
        </svg>

        <div className={styles.closing}>
          <p className="section-statement max-w-160 leading-snug tracking-[-0.035em] text-balance">{content.note}</p>
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-fit max-w-full items-center gap-3 py-2 text-base leading-relaxed font-semibold underline decoration-brand-mint/70 decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mint"
          >
            <span>{content.discordCta}</span>
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" className="size-5 shrink-0">
              <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
