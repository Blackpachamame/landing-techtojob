import messages from "../../../messages/es.json";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const content = messages.Testimonials;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className={`${styles.section} bg-brand-dark py-20 text-brand-white md:py-24 lg:py-32`}
    >
      <div className="page-container">
        <p className="section-eyebrow mb-6 text-brand-mint">
          {content.eyebrow}
        </p>
        <h2
          id="testimonials-title"
          className="max-w-210 section-title"
        >
          {content.title}
        </h2>

        <div className="mt-16 grid gap-y-12 md:mt-20 md:gap-y-14 lg:grid-cols-[1.35fr_1fr] lg:gap-x-20 xl:gap-x-28">
          {content.items.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className={
                index === 0
                  ? `${styles.lead} lg:row-span-2 lg:self-center`
                  : index === 3
                    ? "border-t border-brand-white/25 pt-10 lg:col-span-2 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16"
                    : "border-t border-brand-white/20 pt-8 lg:[&:nth-child(2)]:border-t-0 lg:[&:nth-child(2)]:pt-0"
              }
            >
              {index === 0 && <span aria-hidden="true" className={styles.quoteMark}>&ldquo;</span>}
              <blockquote
                className={
                  index === 0
                    ? "relative text-[32px] leading-[1.23] tracking-[-0.045em] md:text-[42px] xl:text-[50px]"
                    : index === 3
                      ? "max-w-[48ch] text-[22px] leading-[1.45] tracking-[-0.025em] md:text-[28px] xl:text-[32px]"
                      : "text-xl leading-[1.55] tracking-[-0.02em] md:text-[22px]"
                }
              >
                <p className="text-pretty">&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>
              <figcaption
                className={`mt-6 flex items-center gap-4 md:mt-8 ${index === 3 ? "lg:mt-0" : ""}`}
              >
                <span
                  aria-hidden="true"
                  className={`${styles.avatar} grid size-12 shrink-0 place-items-center rounded-full text-sm font-semibold text-brand-mint`}
                >
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-base leading-relaxed font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm leading-relaxed text-brand-white/75">
                    {testimonial.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
