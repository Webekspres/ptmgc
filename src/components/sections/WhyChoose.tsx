import { ArrowUpRight, Award, Gem, Handshake, HardHat, ShieldCheck, Truck } from "lucide-react";
import { SectionHeader } from "./primitives";

export function WhyChoose() {
  const items = [
    {
      icon: Gem,
      title: "Integritas",
      body: "Penetapan harga yang transparan, dokumentasi terverifikasi, dan pelaporan yang jujur pada setiap perikatan — tanpa terkecuali.",
    },
    {
      icon: Handshake,
      title: "Tim Profesional",
      body: "Insinyur bersertifikat, manajer proyek, dan spesialis pengadaan dengan rekam jejak terbukti di sektor industri dan komersial.",
    },
    {
      icon: ShieldCheck,
      title: "Penjaminan Kualitas",
      body: "Material, mutu pengerjaan, dan proses diverifikasi pada setiap tahap sesuai standar nasional maupun internasional.",
    },
    {
      icon: Truck,
      title: "Pengerjaan Tepat Waktu",
      body: "Penjadwalan yang terstruktur, rantai pasok yang terkelola, dan logistik yang disiplin — menghormati linimasa operasional Anda.",
    },
    {
      icon: HardHat,
      title: "Komitmen Keselamatan",
      body: "Keselamatan lokasi kerja dan perlindungan tenaga kerja adalah hal yang tidak dapat dikompromikan — diatur oleh prosedur SMK3 dan audit berkelanjutan.",
    },
    {
      icon: Award,
      title: "Kemitraan Jangka Panjang",
      body: "Kami berinvestasi pada hubungan yang bertahan lebih lama dari satu proyek, menjadi perpanjangan tangan yang dapat diandalkan bagi operasional Anda.",
    },
  ];
  return (
    <section id="why-choose" className="bg-surface-2 py-16 md:py-36 px-8 md:px-16">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="Mengapa Memilih MGC"
              title={
                <>
                  Enam prinsip yang
                  <br className="hidden md:block" /> membentuk setiap proyek.
                </>
              }
            />
          </div>
          <p className="text-body lg:col-span-4">
            Alasan klien korporat dan pemerintah terus bekerja sama dengan kami di berbagai
            proyek&nbsp;—&nbsp;disampaikan dalam prinsip, dibuktikan dalam pengerjaan.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative bg-white p-8 transition-all duration-300 hover:bg-primary md:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-primary transition group-hover:bg-gold group-hover:text-primary-deep">
                <it.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-xl font-extrabold text-ink transition group-hover:text-white">
                {it.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body transition group-hover:text-white/85">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
