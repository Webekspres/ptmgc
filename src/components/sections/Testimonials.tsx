import { Quote } from "lucide-react";
import { SectionHeader } from "./primitives";

export function Testimonials() {
  const items = [
    {
      q: "MGC menyelesaikan perluasan pabrik kami tepat waktu, dengan dokumentasi dan disiplin lokasi kerja yang sejalan dengan standar internal kami. Mereka kini menjadi mitra konstruksi utama kami di Jawa.",
      n: "Ir. Bambang Sutrisno",
      r: "Direktur Operasional",
      c: "Grup Manufaktur, Bekasi",
    },
    {
      q: "Tim pengadaan mereka konsisten menyediakan material sesuai spesifikasi yang kami butuhkan, dengan harga yang transparan. Di pasar yang penuh jalan pintas, keandalan seperti itu benar-benar jarang ditemukan.",
      n: "Andini Prameswari",
      r: "Kepala Divisi Pengadaan",
      c: "Pengembang Properti Nasional",
    },
    {
      q: "Dari konsultasi hingga serah terima, komunikasi berjalan jelas dan terstruktur. Kami sangat menghargai pelaporan berbasis milestone — tanpa kejutan, tanpa ambiguitas, hanya progres yang konsisten.",
      n: "Drs. Hendra Wijaya",
      r: "Ketua Komite Proyek",
      c: "Instansi Pemerintah Daerah",
    },
  ];
  return (
    <section id="testimonials" className="bg-surface-2 py-28 md:py-36 px-8 md:px-16">
      <div className="container-x">
        <SectionHeader
          eyebrow="Testimoni Klien"
          title="Dipercaya klien yang kembali lagi."
          intro="Kemitraan jangka panjang di sektor manufaktur, properti, dan publik — sinyal terkuat dari sebuah mitra yang dapat diandalkan."
          align="center"
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((it) => (
            <figure
              key={it.n}
              className="relative flex flex-col gap-6 rounded-sm border border-border bg-white p-8 md:p-10"
            >
              <Quote className="h-9 w-9 text-gold" strokeWidth={1.5} />
              <blockquote className="text-[17px] leading-relaxed text-ink">
                &ldquo;{it.q}&rdquo;
              </blockquote>
              <figcaption className="mt-auto border-t border-border pt-6">
                <div className="font-display text-base font-extrabold text-ink">{it.n}</div>
                <div className="mt-1 text-sm text-body">
                  {it.r} &middot; {it.c}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
