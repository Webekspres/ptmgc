import overviewImg from "@/assets/company-overview.jpg";

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-36 px-8 md:px-16">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="relative overflow-hidden rounded-sm shadow-(--shadow-elevated)">
              <img
                src={overviewImg}
                alt="Jajaran eksekutif MGC meninjau rencana kerja di ruang rapat korporat"
                width={1600}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-primary/60 to-transparent" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="eyebrow text-primary">Tentang Perusahaan</div>

          <div className="mt-10 space-y-8">
            <div className="grid gap-6 border-l-2 border-gold pl-6 md:grid-cols-2">
              <div>
                <div className="eyebrow text-primary">Visi Kami</div>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  Menjadi perusahaan terdepan di bidang konstruksi, sipil, dan engineering yang
                  berkontribusi nyata terhadap kemajuan pembangunan nasional.
                </p>
              </div>
              <div>
                <div className="eyebrow text-primary">Misi Kami</div>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  Memberikan layanan berkualitas tinggi dengan standar keselamatan dan lingkungan
                  terbaik. Mengembangkan inovasi berkelanjutan dalam setiap aspek pekerjaan.
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  Membangun kemitraan jangka panjang dengan klien berdasarkan kepercayaan dan
                  profesionalisme.
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  Meningkatkan kompetensi sumber daya manusia untuk menghadapi tantangan industri
                  global.
                </p>
              </div>
            </div>

            <div>
              <div className="eyebrow text-primary">Filosofi Bisnis</div>
              <p className="mt-3 text-base leading-relaxed text-body">
                Bagi kami, keberhasilan bukan sekadar tentang jumlah proyek yang diselesaikan,
                tetapi tentang kepercayaan yang membuat klien memilih bekerja sama dengan kami
                kembali. Setiap kebutuhan dipahami dengan cermat, setiap komitmen dijalankan dengan
                penuh tanggung jawab, dan setiap kemitraan dibangun untuk bertahan dalam jangka
                panjang. Nilai-nilai inilah yang menjadi dasar kami dalam setiap pekerjaan, mulai
                dari pengadaan sederhana hingga proyek konstruksi berskala besar dan berjangka
                panjang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
