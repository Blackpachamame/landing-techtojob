import messages from "../../../messages/es.json";
import styles from "./News.module.css";

export default function News() {
  const content = messages.News;

  return (
    <section id="news" aria-labelledby="news-title" className={`${styles.section} py-20 text-brand-dark md:py-24 lg:py-28`}>
      <div className="page-container">
        <p className="section-eyebrow mb-6">{content.eyebrow}</p>
        <h2 id="news-title" className="section-title max-w-200">{content.title}</h2>
        <p className="mt-6 max-w-160 text-base leading-[1.7] md:text-lg">{content.description}</p>

        <div className={styles.stories}>
          {content.stories.map((story) => (
            <article key={story.number} aria-labelledby={`news-story-${story.number}`} className={styles.story}>
              <div className={styles.index}>
                <span aria-hidden="true" className={styles.number}>{story.number}</span>
                <p className="text-xs leading-relaxed font-semibold tracking-[0.08em] uppercase">{story.category}</p>
              </div>
              <div className={styles.storyBody}>
                <h3 id={`news-story-${story.number}`} className="text-2xl leading-[1.25] font-semibold tracking-[-0.035em] text-pretty xl:text-[30px]">{story.title}</h3>
                <div>
                  <p className="max-w-160 text-base leading-[1.7] text-pretty text-brand-dark/80">{story.description}</p>
                  <a
                    id={`news-link-${story.number}`}
                    aria-labelledby={`news-link-${story.number} news-story-${story.number}`}
                    href={story.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-3 py-2 text-base leading-relaxed font-semibold underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark"
                  >
                    {story.linkLabel}
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" className="size-5 shrink-0">
                      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
