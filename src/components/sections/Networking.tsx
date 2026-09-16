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

        <ul className="m-0 mt-12 list-none border-y border-brand-dark/40 p-0 md:mt-16">
          {content.signals.map((signal) => (
            <li
              key={signal}
              className="border-brand-dark/40 py-6 text-[28px] leading-[1.2] font-semibold tracking-[-0.035em] not-first:border-t md:py-8 md:text-4xl lg:text-[40px] lg:[&:nth-child(2)]:text-right lg:[&:nth-child(3)]:text-center xl:text-[44px]"
            >
              {signal}
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-200 text-xl leading-relaxed font-semibold tracking-[-0.025em] text-balance md:mt-12 md:text-2xl">
          {content.note}
        </p>
      </div>
    </section>
  );
}
