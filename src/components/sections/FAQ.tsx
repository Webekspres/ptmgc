import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PrimaryCTA, SectionHeader } from "./primitives";

export function FAQ() {
  const faqs = [
    {
      q: "Bagaimana cara memulai konsultasi dengan MGC?",
      a: "Kirimkan brief melalui kanal kontak kami dan tim kami akan menjadwalkan diskusi awal dalam dua hari kerja untuk memahami tujuan, lingkup, dan linimasa Anda.",
    },
    {
      q: "Berapa lama durasi tipikal sebuah proyek?",
      a: "Linimasa bergantung pada lingkup kerja — perikatan trading sering selesai dalam beberapa minggu, sementara proyek konstruksi berkisar dari beberapa bulan hingga program multi-tahun. Kami memberikan jadwal rinci pada tahap perencanaan.",
    },
    {
      q: "Wilayah mana di Indonesia yang Anda layani?",
      a: "MGC mengerjakan proyek di Jawa, Sumatra, Kalimantan, Sulawesi, dan wilayah lain sesuai permintaan, dengan koordinasi logistik dan mitra lokal sesuai kebutuhan.",
    },
    {
      q: "Bagaimana proses pengadaan dilakukan?",
      a: "Kami bersumber dari pemasok yang teraudit, memverifikasi spesifikasi, dan mengelola logistik berdasarkan rencana pengadaan yang terdokumentasi dan selaras dengan anggaran serta jadwal Anda.",
    },
    {
      q: "Apakah konstruksi dikerjakan langsung atau disubkontrakkan?",
      a: "Kami memimpin seluruh proyek secara langsung dengan tim internal insinyur dan manajer lokasi, melibatkan mitra kerja khusus di bawah supervisi dan standar kualitas kami.",
    },
    {
      q: "Bisakah MGC berkolaborasi dengan konsultan kami yang sudah ada?",
      a: "Ya. Kami sering bekerja sama dengan arsitek, konsultan MEP, dan quantity surveyor yang ditunjuk klien — terintegrasi dengan baik ke dalam model tata kelola Anda.",
    },
    {
      q: "Bagaimana dengan pemeliharaan setelah serah terima?",
      a: "Kami menyediakan masa jaminan cacat (defect liability) dan perjanjian pemeliharaan berkelanjutan yang disesuaikan dengan jenis aset dan profil operasional.",
    },
    {
      q: "Bagaimana struktur pembayaran biasanya diatur?",
      a: "Pembayaran berbasis milestone, transparan, dan diformalkan dalam kontrak. Kami mengakomodasi proses pengadaan korporat dan pemerintah standar.",
    },
    {
      q: "Dukungan apa yang diberikan selama proyek berjalan?",
      a: "Seorang manajer proyek khusus menjadi satu titik kontak Anda sepanjang perikatan — didukung dengan pelaporan milestone berkala dan akses kunjungan lokasi kapan pun diperlukan.",
    },
    {
      q: "Apakah Anda menyediakan dukungan purna jual?",
      a: "Ya. Di luar masa garansi, kami tetap siap untuk penyesuaian operasional, peningkatan, dan fase pengembangan selanjutnya seiring berkembangnya aset Anda.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 md:py-36 px-8 md:px-16">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <SectionHeader
              eyebrow="Pertanyaan yang Sering Diajukan"
              title={
                <>
                  Jawaban sebelum
                  <br className="hidden md:block" /> Anda bertanya.
                </>
              }
              intro="Pertanyaan umum dari tim pengadaan, komite proyek, dan pimpinan operasional."
            />
            <div className="mt-10 items-center justify-center flex md:justify-start">
              <PrimaryCTA variant="ghost">Ajukan Pertanyaan Khusus</PrimaryCTA>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-start gap-6 py-6 text-left transition cursor-pointer"
                >
                  <span className="mt-1 font-display text-xs font-bold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="flex items-start justify-between gap-6">
                      <span className="font-display text-lg font-extrabold text-ink transition group-hover:text-primary">
                        {f.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 flex-none text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        strokeWidth={2}
                      />
                    </span>
                    <span
                      className={`grid transition-all duration-500 ${
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden text-[15px] leading-relaxed text-body">
                        {f.a}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
