import type { Metadata } from "next";
import messages from "../../../messages/es.json";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { siteUrl } from "@/config/site";

const content = messages.LegalNotice;

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: siteUrl ? "/aviso-legal" : undefined },
  robots: { index: false, follow: true },
};

export default function LegalNoticePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="bg-brand-white py-12 text-brand-dark md:py-20">
        <article className="page-container">
          <div className="max-w-3xl">
            <h1 className="section-title">{content.title}</h1>
            <p className="mt-8 text-base leading-[1.8] md:text-lg">{content.introduction}</p>
            {content.sections.map((section) => (
              <section key={section.title} className="mt-10 border-t border-brand-dark/20 pt-8">
                <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-base leading-[1.8]">{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
