import messages from "../../../messages/es.json";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const content = messages.Testimonials;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-brand-white py-20 text-brand-dark md:py-24 lg:py-28">
      <div className="page-container">
        <p className="section-eyebrow mb-6">{content.eyebrow}</p>
        <h2 id="testimonials-title" className="section-title max-w-210">{content.title}</h2>

        <div className={styles.quotes}>
          <TestimonialQuote testimonial={content.items[0]} primary />
          <div className={styles.supporting}>
            {content.items.slice(1).map((testimonial) => (
              <TestimonialQuote key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialQuote({ testimonial, primary = false }: {
  testimonial: (typeof messages.Testimonials.items)[number];
  primary?: boolean;
}) {
  return (
    <figure key={testimonial.name} className={`${styles.quote} ${primary ? styles.primary : ""}`}>
      <blockquote>
        <p className="text-pretty">&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        <span aria-hidden="true" className={styles.initials}>{testimonial.initials}</span>
        <div>
          <p className="text-base leading-relaxed font-semibold">{testimonial.name}</p>
          <p className="text-sm leading-relaxed opacity-80">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
