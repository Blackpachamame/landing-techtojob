import messages from "../../../messages/es.json";

export default function Networking() {
  const content = messages.Networking;

  return (
    <section
      id="networking"
      aria-labelledby="networking-title"
      className="bg-brand-mint py-20 text-brand-dark md:py-24 lg:py-30 xl:py-32"
    >
      <div className="page-container">
        <div>
          <p className="mb-5 text-[13px] leading-relaxed font-semibold tracking-[0.1em] uppercase">
            {content.eyebrow}
          </p>
          <h2
            id="networking-title"
            className="max-w-240 text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance md:text-5xl xl:text-[52px]"
          >
            {content.title}
          </h2>
          <p className="mt-6 max-w-180 text-base leading-[1.7] md:text-lg">
            {content.description}
          </p>
        </div>

        <ul className="m-0 mt-12 list-none border-t border-brand-dark/70 p-0 md:mt-16">
          {content.signals.map((signal) => (
            <li
              key={signal}
              className="border-brand-dark/30 py-7 text-[30px] leading-[1.1] font-semibold tracking-[-0.045em] not-first:border-t md:py-9 md:text-[40px] lg:py-10 lg:text-5xl lg:[&:nth-child(2)]:text-right lg:[&:nth-child(3)]:text-center xl:text-[52px]"
            >
              {signal}
            </li>
          ))}
        </ul>

        <div className="grid gap-6 border-t border-brand-dark/70 pt-8 md:gap-8 md:pt-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <p className="max-w-150 text-xl leading-relaxed font-semibold tracking-[-0.025em] text-balance md:text-2xl">
            {content.note}
          </p>
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-fit max-w-full items-center gap-3 py-2 text-base leading-relaxed font-semibold underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark md:text-lg"
          >
            <span>{content.discordCta}</span>
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
    </section>
  );
}
