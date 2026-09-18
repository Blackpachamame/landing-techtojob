import messages from "../../../messages/es.json";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const content = messages.Newsletter;

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-title"
      className={`${styles.section} bg-brand-dark py-14 text-brand-white md:py-16 lg:py-20`}
    >
      <div className="page-container grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20 xl:gap-28">
        <div>
          <p className="section-eyebrow mb-5 text-brand-mint">{content.eyebrow}</p>
          <h2
            id="newsletter-title"
            className="max-w-145 text-[30px] leading-[1.15] font-semibold tracking-[-0.045em] text-balance md:text-[36px]"
          >
            {content.title}
          </h2>
          <p className="mt-5 max-w-120 text-base leading-[1.7] text-brand-white/80">
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
              className="min-h-14 w-full min-w-0 rounded-sm border border-brand-white/30 bg-brand-white px-4 py-4 text-base text-brand-dark placeholder:text-brand-dark/70 focus-visible:relative focus-visible:z-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mint sm:rounded-r-none"
            />
            {/* The disabled default submit also blocks implicit Enter submission. */}
            <button
              type="submit"
              disabled
              className="min-h-14 shrink-0 cursor-not-allowed rounded-sm border border-brand-mint/50 bg-brand-mint/80 px-6 py-4 text-sm font-semibold text-brand-dark sm:rounded-l-none"
            >
              {content.submit}
            </button>
          </div>
          <p id="newsletter-status" className="mt-4 text-sm leading-relaxed text-brand-white/75">
            {content.status}
          </p>
        </form>
      </div>
    </section>
  );
}
