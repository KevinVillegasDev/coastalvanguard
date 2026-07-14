import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Positioning from "@/components/sections/Positioning";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Quote from "@/components/sections/Quote";
import Results from "@/components/sections/Results";
import AuditCta from "@/components/sections/AuditCta";
import ScrollFx from "@/components/effects/ScrollFx";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Positioning />
        <Services />
        <Process />
        <Quote />
        <Results />
        <AuditCta />
      </main>
      <Footer />
      <ScrollFx />
    </>
  );
}
