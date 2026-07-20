import { SectionHeader } from "./primitives";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Process() {
  const steps = [
    {
      n: "01",
      t: "Konsultasi",
      d: "Memahami tujuan, batasan, dan kebutuhan proyek bersama klien.",
    },
    {
      n: "02",
      t: "Perencanaan",
      d: "Menyusun ruang lingkup pekerjaan, jadwal, dan strategi pelaksanaan.",
    },
    {
      n: "03",
      t: "Pengadaan",
      d: "Pengadaan material dan sumber daya melalui vendor yang telah terverifikasi.",
    },
    {
      n: "04",
      t: "Konstruksi",
      d: "Pelaksanaan pekerjaan dengan pengawasan dan standar keselamatan tinggi.",
    },
    {
      n: "05",
      t: "Kontrol Kualitas",
      d: "Inspeksi menyeluruh pada setiap tahapan pekerjaan sesuai spesifikasi.",
    },
    {
      n: "06",
      t: "Penyelesaian",
      d: "Commissioning, dokumentasi, serta serah terima proyek kepada klien.",
    },
    {
      n: "07",
      t: "After Sales",
      d: "Garansi pekerjaan dan dukungan teknis setelah proyek selesai.",
    },
  ];

  return (
    <section id="process" className="bg-surface-2 py-16 md:py-36 px-6 md:px-10">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="Proses Kerja Kami"
              title={
                <>
                  Alur kerja disiplin dari
                  <br className="hidden md:block" /> awal hingga proyek selesai.
                </>
              }
            />
          </div>
          <p className="text-body lg:col-span-4">
            Setiap proyek umumnya mengikuti metodologi yang sama sehingga kualitas, jadwal, dan
            hasil tetap konsisten.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {[steps.slice(0, 4), steps.slice(4)].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={cn(
                "grid gap-6",
                rowIndex === 0
                  ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:px-36",
              )}
            >
              {row.map((step, index) => (
                <div
                  key={step.n}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:border-primary hover:shadow-xl"
                >
                  {/* background number */}
                  <span className="absolute -right-3 -top-5 font-display text-[90px] font-black text-primary/5">
                    {step.n}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-ink">{step.t}</h3>

                  <div className="mt-3 h-1 w-20 rounded-full bg-primary" />

                  <p className="mt-5 text-sm leading-7 text-body">{step.d}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
