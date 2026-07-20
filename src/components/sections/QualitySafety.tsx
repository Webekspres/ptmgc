import { ShieldCheck } from "lucide-react";
import { SectionHeader } from "./primitives";
import qualitySafetyImg from "@/assets/quality-safety.jpg";

export function QualitySafety() {
  return (
    <section id="quality-safety" className="py-16 md:py-36 px-8 md:px-16">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-20">
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={qualitySafetyImg}
              alt="Petugas keselamatan memeriksa lokasi konstruksi dengan pekerja mengenakan APD"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 flex items-center gap-6 rounded-sm border border-border bg-surface-2 p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-gold">
              <ShieldCheck className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <div>
              <div className="font-display text-lg font-extrabold text-ink">
                Komitmen Kesehatan dan Nihil Kecelakaan Kerja
              </div>
              <div className="mt-1 text-sm text-body">
                Keselamatan dan Kesehatan kerja adalah bagaikan nafas kami dalam bekerja
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Kualitas & Keselamatan"
            title={
              <>
                Standar yang tak bisa
                <br className="hidden md:block" /> dikompromikan di setiap tahap.
              </>
            }
            intro="Kualitas dan keselamatan bukanlah pelengkap — keduanya adalah disiplin kerja yang mengatur setiap jam di lokasi kami dan setiap item dalam rantai kerja kami."
          />
        </div>
      </div>
    </section>
  );
}
