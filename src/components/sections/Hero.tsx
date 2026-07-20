import { CheckCircle2, ChevronDown } from "lucide-react";
import { PrimaryCTA, Typewriter } from "./primitives";

import heroImg from "@/assets/hero-construction.jpg";

export function Hero() {
  const trust = ["Mitra Terpercaya", "Tim Profesional", "Komitmen Kualitas", "Layanan Nasional"];

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-primary-deep px-8 md:px-16">
      <img
        src={heroImg}
        alt="Lokasi konstruksi industri dengan tower crane dan tim insinyur meninjau rencana kerja"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" aria-hidden />

      <div className="container-x relative pt-40 pb-28 lg:pt-52 lg:pb-40">
        <div className="max-w-5xl reveal">
          <div className="inline-flex items-center gap-2 rounded-sm border border-white/25 bg-white/5 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
              PT Mustika Galuh Cakrawala &middot; Trading &amp; Construction
            </span>
          </div>

          <h1 className="mt-7 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-[5.25rem]">
            Infrastruktur Kokoh.
            <br />
            Menghadirkan
            <br />
            <span className="text-gold">
              <Typewriter
                words={["Kepercayaan.", "Keandalan.", "Kualitas.", "Komitmen."]}
                className="inline-block min-w-[13ch] whitespace-nowrap"
              />
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            Kami berdiri dengan semangat menghadirkan cakrawala baru dalam bidang perdagangan dan
            konstruksi dengan kualitas, profesionalisme dan inovasi untuk kepuasan pelanggan.
          </p>

          <div className="mt-10">
            <PrimaryCTA variant="gold">Hubungi Kami</PrimaryCTA>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {trust.map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle2 className="h-4 w-4 text-gold" strokeWidth={2.25} />
                <span className="font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 hover:text-white transition"
        >
          Gulir
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
