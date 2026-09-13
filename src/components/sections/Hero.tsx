import messages from "../../../messages/es.json";
import HeroNetwork from "./HeroNetwork";

export default function Hero() {
  const content = messages.Hero;

  return (
    <section aria-labelledby="hero-title" className="bg-brand-dark">
      <div className="page-container grid min-h-[calc(100svh-80px)] items-center gap-12 py-14 md:gap-16 md:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:pt-8 lg:pb-24 xl:gap-12">
        <div className="relative z-1 max-w-2xl">
          <p className="mb-6 max-w-110 text-[13px] leading-relaxed font-semibold tracking-[0.1em] text-brand-mint uppercase md:mb-7">
            {content.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="max-w-160 text-[40px] leading-[1.06] font-semibold tracking-[-0.055em] text-balance md:text-[56px] lg:text-[clamp(52px,4.75vw,68px)]"
          >
            {content.title}
          </h1>
          <p className="mt-6 max-w-145 text-base leading-[1.65] text-brand-white/75 md:text-lg">
            {content.description}
          </p>
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex min-h-14 items-center justify-between gap-7 rounded-sm border border-brand-mint bg-brand-mint px-6 py-4 text-sm font-semibold text-brand-dark hover:border-brand-white hover:bg-brand-white focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-brand-mint motion-safe:transition-colors"
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
        <HeroNetwork />
      </div>
    </section>
  );
}
