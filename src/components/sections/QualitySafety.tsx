import { ClipboardList, HardHat, LifeBuoy, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./primitives";
import qualitySafetyImg from "@/assets/quality-safety.jpg";

export function QualitySafety() {
  const rows = [
    {
      icon: ShieldCheck,
      t: "Penjaminan Kualitas",
      d: "Setiap item material dan mutu pengerjaan diverifikasi sesuai spesifikasi proyek serta standar nasional dan internasional yang berlaku.",
    },
    {
      icon: HardHat,
      t: "Keselamatan Kerja",
      d: "Prosedur keselamatan sesuai SMK3, kepatuhan APD, dan induksi lokasi kerja melindungi tim kami maupun operasional Anda.",
    },
    {
      icon: ClipboardList,
      t: "Tata Kelola Terdokumentasi",
      d: "Laporan milestone, catatan inspeksi, dan kontrol perubahan memastikan akuntabilitas penuh di setiap tahap.",
    },
    {
      icon: LifeBuoy,
      t: "Peningkatan Berkelanjutan",
      d: "Evaluasi pascaproyek menyempurnakan standar, metode, dan pelatihan kami — mempertajam kualitas di setiap perikatan berikutnya.",
    },
  ];
  return (
    <section id="quality-safety" className="py-28 md:py-36 px-8 md:px-16">
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
                Komitmen Nihil Kecelakaan
              </div>
              <div className="mt-1 text-sm text-body">
                Setiap proyek dimulai dengan rencana keselamatan dan diakhiri dengan laporan
                keselamatan.
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Kualitas & Keselamatan"              title={
                <>
                  Standar yang tak bisa
                  <br className="hidden md:block" /> dikompromikan di setiap tahap.
                </>
              }
            intro="Kualitas dan keselamatan bukanlah pelengkap — keduanya adalah disiplin kerja yang mengatur setiap jam di lokasi kami dan setiap item dalam rantai pasok kami."
          />
          <div className="mt-10 space-y-8">
            {rows.map((r) => (
              <div key={r.t} className="flex gap-5 border-t border-border pt-8">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-sm bg-secondary text-primary">
                  <r.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-ink">{r.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
