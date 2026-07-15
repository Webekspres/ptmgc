import { CheckCircle2, ChevronDown } from "lucide-react";
import { PrimaryCTA, Typewriter } from "./primitives";

import heroImg from "@/assets/hero-construction.jpg";

export function Hero() {
  const trust = ["Mitra Terpercaya", "Tim Profesional", "Komitmen Kualitas", "Layanan Nasional"];
  const stats = [
    { v: "15+", l: "Tahun Pengalaman" },
    { v: "240+", l: "Proyek Selesai" },
    { v: "180+", l: "Mitra Bisnis" },
    { v: "98%", l: "Kepuasan Klien" },
  ];

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
            Perusahaan trading dan konstruksi Indonesia yang bermitra dengan produsen, pengembang,
            kontraktor, dan instansi pemerintah — menghadirkan pengadaan yang disiplin, dukungan
            teknik, dan eksekusi konstruksi berskala nasional.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <PrimaryCTA variant="gold">Ajukan Konsultasi</PrimaryCTA>
            <PrimaryCTA variant="outline-light">Diskusikan Proyek Anda</PrimaryCTA>
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

        <div className="relative mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="reveal group relative overflow-hidden rounded-md border border-white/15 bg-white/7 p-6 backdrop-blur-xl transition-all duration-300 hover:border-gold/50 hover:bg-white/12 md:p-8"
              style={{ animationDelay: `${0.15 * i + 0.2}s` }}
            >
              <div className="flex items-baseline gap-0.5 font-display text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl">
                {s.v.replace(/[+%]/g, "")}
                <span className="text-gold">{s.v.match(/[+%]/)?.[0]}</span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-gold/70" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  {s.l}
                </span>
              </div>
            </div>
          ))}
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
