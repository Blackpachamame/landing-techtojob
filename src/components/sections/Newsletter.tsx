import messages from "../../../messages/es.json";

export default function Newsletter() {
  const content = messages.Newsletter;

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-title"
      className="bg-brand-dark py-12 text-brand-white md:py-14"
    >
      <div className="page-container grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <p className="section-eyebrow mb-4 text-brand-mint">{content.eyebrow}</p>
          <h2
            id="newsletter-title"
            className="max-w-145 text-[30px] leading-[1.15] font-semibold tracking-[-0.045em] text-balance md:text-[36px]"
          >
            {content.title}
          </h2>
          <p className="mt-4 max-w-120 text-base leading-[1.7] text-brand-white/85">
            {content.description}
          </p>
        </div>

        <form aria-labelledby="newsletter-title" aria-describedby="newsletter-status">
          <label htmlFor="newsletter-email" className="mb-3 block text-sm font-semibold">
            {content.emailLabel}
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-0">
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={content.emailPlaceholder}
              aria-describedby="newsletter-status"
              className="min-h-14 w-full min-w-0 rounded-lg border border-brand-white/35 bg-brand-white px-4 py-4 text-base text-brand-dark placeholder:text-brand-dark/70 focus-visible:relative focus-visible:z-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mint sm:rounded-r-none"
            />
            {/* The disabled default submit also blocks implicit Enter submission. */}
            <button
              type="submit"
              disabled
              className="min-h-14 shrink-0 cursor-not-allowed rounded-lg border border-brand-white/35 bg-brand-white/15 px-6 py-4 text-sm font-semibold text-brand-white/85 sm:rounded-l-none sm:border-l-0"
            >
              {content.submit}
            </button>
          </div>
          <p id="newsletter-status" className="mt-4 text-sm leading-relaxed">
            {content.status}
          </p>
        </form>
      </div>
    </section>
  );
}
