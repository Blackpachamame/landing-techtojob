import messages from "../../../messages/es.json";

export default function News() {
  const content = messages.News;

  return (
    <section
      id="news"
      aria-labelledby="news-title"
      className="bg-brand-white py-20 text-brand-dark md:py-24 lg:py-30 xl:py-32"
    >
      <div className="page-container">
        <p className="mb-5 text-[13px] leading-relaxed font-semibold tracking-[0.1em] uppercase">
          {content.eyebrow}
        </p>
        <h2
          id="news-title"
          className="max-w-200 text-4xl leading-[1.1] font-semibold tracking-[-0.045em] text-balance md:text-5xl xl:text-[52px]"
        >
          {content.title}
        </h2>
        <p className="mt-6 max-w-160 text-base leading-[1.7] md:text-lg">
          {content.description}
        </p>

        <div className="mt-14 grid gap-x-16 gap-y-10 md:mt-16 md:gap-y-14 lg:grid-cols-2 xl:gap-x-24">
          {content.stories.map((story, index) => (
            <article
              key={story.number}
              aria-labelledby={`news-story-${story.number}`}
              className={
                index === 0
                  ? "border-t-2 border-brand-dark pt-7 md:pt-9 lg:col-span-2"
                  : "border-t border-brand-dark/30 pt-7 md:pt-9"
              }
            >
              <div className="mb-6 flex items-center gap-5 md:mb-8">
                <span
                  aria-hidden="true"
                  className={
                    index === 0
                      ? "text-[56px] leading-none tracking-[-0.06em] tabular-nums md:text-[72px]"
                      : "text-[40px] leading-none tracking-[-0.06em] tabular-nums md:text-5xl"
                  }
                >
                  {story.number}
                </span>
                <p className="text-[13px] leading-relaxed font-semibold tracking-[0.08em] uppercase">
                  {story.category}
                </p>
              </div>

              <div
                className={
                  index === 0
                    ? "grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16 xl:gap-24"
                    : "grid gap-5"
                }
              >
                <h3
                  id={`news-story-${story.number}`}
                  className={
                    index === 0
                      ? "text-[30px] leading-[1.2] font-semibold tracking-[-0.04em] text-pretty md:text-4xl xl:text-[40px]"
                      : "text-[26px] leading-[1.25] font-semibold tracking-[-0.035em] text-pretty md:text-[28px] xl:text-[30px]"
                  }
                >
                  {story.title}
                </h3>
                <div>
                  <p className="max-w-160 text-base leading-[1.7] text-pretty text-brand-dark/80 md:text-lg">
                    {story.description}
                  </p>
                  <a
                    id={`news-link-${story.number}`}
                    aria-labelledby={`news-link-${story.number} news-story-${story.number}`}
                    href={story.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center gap-3 py-2 text-base leading-relaxed font-semibold underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark md:mt-6"
                  >
                    {story.linkLabel}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-5 shrink-0"
                    >
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
