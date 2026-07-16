import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_URL, EMAIL, EMAIL_URL, PHONE, PHONE_URL } from "./constants";
import { PrimaryCTA } from "./primitives";
import heroImg from "@/assets/hero-construction.jpg";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-primary-deep py-16 text-white md:py-36 px-8 md:px-16"
    >
      <img
        src={heroImg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-br from-primary-deep/95 via-primary-deep/80 to-primary/70" />
      <div className="absolute inset-0 bg-primary-deep/30" />
      <div className="container-x relative">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Mari Berdiskusi
            </span>
          </div>
          <h2 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[4.5rem]">
            Mari membangun
            <br />
            <span className="text-gold">masa depan bersama.</span>
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
            Baik Anda sedang merencanakan perluasan fasilitas, pengadaan berskala besar, atau
            menyiapkan program konstruksi baru, tim kami siap meninjau kebutuhan Anda dan menawarkan
            langkah kerja yang terstruktur.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <PrimaryCTA variant="gold" className="px-7 py-3 text-sm">
              Ajukan Konsultasi
            </PrimaryCTA>

            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition hover:text-gold"
            >
              Mulai Proyek Anda
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>

            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition hover:text-gold"
            >
              Dapatkan Saran Profesional
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>
          </div>

          <div className="mt-14 grid gap-6 border-t border-white/15 pt-10 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.75} />
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Telepon Langsung
                </div>
                <div className="mt-1 font-display text-lg font-extrabold text-white">
                  <a href={PHONE_URL} className="transition hover:text-gold">
                    {PHONE}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.75} />
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Email Korporat
                </div>
                <div className="mt-1 font-display text-lg font-extrabold text-white">
                  <a href={EMAIL_URL} className="transition hover:text-gold">
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.75} />
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Kantor Pusat
                </div>
                <div className="mt-1 font-display text-lg font-extrabold text-white">
                  Ruko Gading Elok 1 No. 21, Karawang Wetan, Karawang 41314, Jawa Barat
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
