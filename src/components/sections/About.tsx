import { PrimaryCTA, SectionHeader } from "./primitives";
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
                alt="Jajaran eksekutif MGC meninjau rencana proyek di ruang rapat korporat"
                width={1600}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-primary/60 to-transparent" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-sm border border-border bg-white p-5">
                <div className="font-display text-3xl font-extrabold text-primary">ISO 9001</div>
                <div className="mt-1 text-xs font-medium text-body">Standar manajemen kualitas</div>
              </div>
              <div className="rounded-sm border border-border bg-white p-5">
                <div className="font-display text-3xl font-extrabold text-primary">SMK3</div>
                <div className="mt-1 text-xs font-medium text-body">Sistem keselamatan kerja</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Tentang Perusahaan"
            title={
              <>
                Mitra disiplin untuk
                <br className="hidden md:block" /> proyek{" "}
                <span className="text-primary">strategis di Indonesia.</span>
              </>
            }
            intro="PT Mustika Galuh Cakrawala (MGC) mendukung perusahaan, instansi pemerintah, dan pengembang dengan kapabilitas trading dan konstruksi yang terintegrasi — memadukan pengadaan yang ketat, keahlian teknik, dan pelaksanaan proyek yang disiplin dalam satu mitra yang bertanggung jawab."
          />

          <div className="mt-12 space-y-8">
            <div className="grid gap-6 border-l-2 border-gold pl-6 md:grid-cols-2">
              <div>
                <div className="eyebrow text-primary">Visi Kami</div>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  Menjadi mitra trading dan konstruksi paling terpercaya di Indonesia — diukur dari
                  integritas kerja kami dan panjangnya hubungan yang kami bangun.
                </p>
              </div>
              <div>
                <div className="eyebrow text-primary">Misi Kami</div>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  Menyelesaikan setiap proyek tepat waktu, sesuai spesifikasi, dan di atas
                  ekspektasi — melalui tim profesional, rantai pasok yang terverifikasi, dan standar
                  keselamatan yang tidak dapat dikompromikan.
                </p>
              </div>
            </div>

            <div>
              <div className="eyebrow text-primary">Filosofi Bisnis</div>
              <p className="mt-3 text-base leading-relaxed text-body">
                Kami mengukur keberhasilan bukan dari besarnya portofolio, melainkan dari
                kepercayaan yang klien berikan pada kami di setiap perikatan berikutnya. Setiap
                spesifikasi dihormati, setiap komitmen didokumentasikan, dan setiap kemitraan
                diperlakukan sebagai kewajiban jangka panjang. Inilah standar yang kami pegang di
                setiap proyek — dari satu pesanan pengadaan hingga program konstruksi multi-tahun.
              </p>
            </div>

            <div className="pt-4">
              <PrimaryCTA variant="ghost" href="#services">
                Pelajari Keahlian Kami
              </PrimaryCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
