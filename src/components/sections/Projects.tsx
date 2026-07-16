import { PrimaryCTA, SectionHeader } from "./primitives";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export function Projects() {
  const items = [
    {
      img: project1,
      name: "Fit-Out Menara Korporat",
      cat: "Komersial",
      loc: "Jakarta, DKI Jakarta",
      s: "Penguatan struktur multi-lantai dan fit-out kantor premium yang diselesaikan dalam linimasa 9 bulan yang ketat.",
    },
    {
      img: project2,
      name: "Fasilitas Distribusi Industri",
      cat: "Pergudangan & Logistik",
      loc: "Bekasi, Jawa Barat",
      s: "Pergudangan terintegrasi, loading dock, dan fit-out utilitas untuk operator distribusi FMCG nasional.",
    },
    {
      img: project3,
      name: "Program Jembatan Infrastruktur",
      cat: "Infrastruktur",
      loc: "Jawa Timur",
      s: "Pekerjaan sipil, pengadaan, dan logistik material untuk proyek jembatan konektivitas regional.",
    },
  ];

  return (
    <section id="projects" className="px-8 py-16 md:px-16 md:py-36">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Proyek Unggulan"
            title={
              <>
                Portofolio yang
                <br className="hidden md:block" /> berbicara nyata.
              </>
            }
          />
          <PrimaryCTA variant="ghost">Diskusikan Proyek Serupa</PrimaryCTA>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:grid-rows-2 lg:auto-rows-[1fr] lg:min-h-[680px]">
          {items.map((p, i) => (
            <article
              key={p.name}
              className={`group relative overflow-hidden rounded-sm border border-border bg-white ${
                i === 0
                  ? "lg:col-span-2 lg:row-span-2"
                  : i === 1
                    ? "lg:col-start-3 lg:row-start-1"
                    : "lg:col-start-3 lg:row-start-2"
              }`}
            >
              <div
                className={`relative h-full overflow-hidden ${
                  i === 0
                    ? "min-h-[28rem] aspect-[4/5] sm:min-h-[32rem] lg:aspect-auto lg:min-h-0"
                    : "min-h-[24rem] aspect-[4/5] sm:aspect-square lg:aspect-auto lg:min-h-0"
                }`}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-1200 group-hover:scale-105"
                />
                {/* scrim: solid-dark base + gradient, guarantees legibility regardless of photo content */}
                <div className="absolute inset-0 bg-primary-deep/35" />
                <div className="absolute inset-0 bg-linear-to-t from-primary-deep from-10% via-primary-deep/70 via-45% to-transparent to-90%" />

                <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                    <span>{p.cat}</span>
                    <span className="h-1 w-1 rounded-full bg-gold/60" />
                    <span className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                      {p.loc}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                    {p.s}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
