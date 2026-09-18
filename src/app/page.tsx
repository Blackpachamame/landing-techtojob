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

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
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
      <Footer />
    </>
  );
}
