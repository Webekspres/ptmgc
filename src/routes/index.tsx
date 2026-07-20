import { createFileRoute } from "@tanstack/react-router";

import { SEO_DEFAULTS } from "@/lib/seo";
import {
  Header,
  Hero,
  ClientBar,
  About,
  Industries,
  Process,
  QualitySafety,
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
      <Industries />
      <Process />
      <QualitySafety />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
