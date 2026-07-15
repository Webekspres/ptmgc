import { createFileRoute } from "@tanstack/react-router";

import { SEO_DEFAULTS } from "@/lib/seo";
import {
  Header,
  Hero,
  ClientBar,
  About,
  WhyChoose,
  Services,
  Industries,
  Projects,
  Process,
  QualitySafety,
  Counters,
  Testimonials,
  FAQ,
  FinalCTA,
  Footer,
  FloatingCTA,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO_DEFAULTS.title },
      {
        name: "description",
        content:
          "MGC delivers procurement, engineering, and construction services for industrial, commercial, government, and infrastructure clients across Indonesia.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <ClientBar />
      <About />
      <WhyChoose />
      <Services />
      <Industries />
      <Projects />
      <Process />
      <QualitySafety />
      <Counters />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
