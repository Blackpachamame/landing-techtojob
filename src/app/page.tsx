import type { Metadata } from "next";
import messages from "../../messages/es.json";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Companies from "@/components/sections/Companies";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Networking from "@/components/sections/Networking";
import News from "@/components/sections/News";
import Newsletter from "@/components/sections/Newsletter";
import Talent from "@/components/sections/Talent";
import Testimonials from "@/components/sections/Testimonials";
import Tournaments from "@/components/sections/Tournaments";
import { siteName, siteUrl } from "@/config/site";

const heroTitle = messages.Hero.title.beforeAccent + messages.Hero.title.accent + messages.Hero.title.afterAccent;

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName,
    title: messages.Metadata.title,
    description: messages.Metadata.description,
    url: siteUrl,
    // Omit public image URLs until the production origin is configured.
    images: siteUrl
      ? [{ url: new URL("/opengraph-image", siteUrl), width: 1200, height: 630, alt: heroTitle }]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: messages.Metadata.title,
    description: messages.Metadata.description,
    images: siteUrl
      ? [{ url: new URL("/twitter-image", siteUrl), alt: heroTitle }]
      : [],
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  ...(siteUrl && {
    url: siteUrl.href,
    logo: new URL("/brand/symbol-positive.svg", siteUrl).href,
  }),
  sameAs: [
    "https://www.linkedin.com/company/techtojob/",
    "https://x.com/techtojob",
    "https://www.instagram.com/techtojob",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />
      <Header isHomePage />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <HowItWorks />
        <Talent />
        <Companies />
        <Tournaments />
        <Networking />
        <Testimonials />
        <News />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer isHomePage />
    </>
  );
}
