import Header from "@/components/layout/Header";
import Companies from "@/components/sections/Companies";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Networking from "@/components/sections/Networking";
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
      </main>
    </>
  );
}
