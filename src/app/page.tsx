import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Talent from "@/components/sections/Talent";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Talent />
      </main>
    </>
  );
}
