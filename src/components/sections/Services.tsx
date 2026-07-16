import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CONTACT_URL } from "./constants";
import { SectionHeader } from "./primitives";

import serviceTrading from "@/assets/service-trading.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceEngineering from "@/assets/service-engineering.jpg";
import serviceProject from "@/assets/service-project.jpg";

export function Services() {
  const services = [
    {
      img: serviceTrading,
      title: "Solusi Trading",
      lede: "Pengadaan terintegrasi untuk perlengkapan industri dan material konstruksi dari produsen dan distributor terverifikasi.",
      benefits: [
        "Sumber material multi-kategori",
        "Kualifikasi & audit pemasok",
        "Logistik & pengiriman yang optimal",
      ],
    },
    {
      img: serviceConstruction,
      title: "Layanan Konstruksi",
      lede: "Eksekusi konstruksi lingkup penuh untuk proyek komersial, industri, dan infrastruktur — dari pekerjaan tanah hingga serah terima.",
      benefits: ["Kontraktor umum", "Pekerjaan struktur & sipil", "Fit-out & finishing"],
    },
    {
      img: serviceEngineering,
      title: "Dukungan Teknik",
      lede: "Keahlian teknis mencakup koordinasi desain, kajian struktur, dan penyusunan spesifikasi untuk bangunan yang kompleks.",
      benefits: ["Value engineering", "Kajian desain & kelayakan bangun", "Dokumentasi teknis"],
    },
    {
      img: serviceProject,
      title: "Manajemen Proyek",
      lede: "Kepemimpinan program yang disiplin, mencakup perencanaan, penganggaran, pengadaan, eksekusi, dan pengawasan risiko.",
      benefits: [
        "Kontrol jadwal & biaya",
        "Koordinasi multi-vendor",
        "Pelaporan berbasis milestone",
      ],
    },
  ];
  return (
    <section id="services" className="py-16 md:py-36 px-8 md:px-16">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="Layanan Kami"
              title={<>Empat kapabilitas dalam satu mitra terpercaya.</>}
            />
          </div>
          <p className="text-body lg:col-span-4">
            MGC memadukan trading, konstruksi, teknik, dan manajemen proyek dalam satu titik
            akuntabilitas — sehingga spesifikasi, linimasa, dan anggaran Anda terjaga dari awal
            hingga akhir.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-sm border border-border bg-white transition-all duration-500 hover:shadow-(--shadow-elevated) hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-1200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/25 to-primary/40" />
                <div className="absolute left-6 top-6">
                  <span className="rounded-sm bg-gold px-2.5 py-1 font-display text-xs font-extrabold text-primary-deep shadow-sm">
                    Layanan
                  </span>
                </div>
                <h3 className="absolute inset-x-6 bottom-5 font-display text-3xl font-extrabold text-white">
                  {s.title}
                </h3>
              </div>

              <div className="p-8 md:p-10">
                <p className="text-base leading-relaxed text-body">{s.lede}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] text-ink">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 flex-none text-gold"
                        strokeWidth={2.25}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 border-b border-primary/30 pb-1 text-sm font-semibold text-primary transition hover:border-primary hover:gap-3"
                >
                  Konsultasi dengan Tim Kami
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
