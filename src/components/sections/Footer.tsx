import { Compass, Mail, MapPin, Phone } from "lucide-react";
import { EMAIL, EMAIL_URL, LOGO_URL, PHONE, PHONE_URL } from "./constants";

export function Footer() {
  const cols = [
    {
      t: "Layanan",
      links: [
        { label: "Solusi Trading", href: "#services" },
        { label: "Layanan Konstruksi", href: "#services" },
        { label: "Dukungan Teknik", href: "#services" },
        { label: "Manajemen Proyek", href: "#services" },
      ],
    },
    {
      t: "Perusahaan",
      links: [
        { label: "Tentang MGC", href: "#about" },
        { label: "Mengapa Memilih Kami", href: "#why-choose" },
        { label: "Kualitas & Keselamatan", href: "#quality-safety" },
        { label: "Proyek Unggulan", href: "#projects" },
      ],
    },
    {
      t: "Lainnya",
      links: [
        { label: "Industri", href: "#industries" },
        { label: "Proses Kerja", href: "#process" },
        { label: "Testimoni", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  ];
  return (
    <footer className="relative bg-primary-abyss text-white px-8 md:px-16">
      <div
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden
      />
      <div className="container-x grid gap-14 pt-20 pb-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="MGC"
              className="h-14 w-14 rounded-full bg-white object-contain"
            />
            <div>
              <div className="font-display text-base font-extrabold tracking-tight">
                PT MUSTIKA GALUH CAKRAWALA
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                Perdagangan &amp; Konstruksi
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            Mitra trading dan konstruksi Indonesia yang menghadirkan layanan pengadaan, teknik, dan
            konstruksi dengan disiplin yang dibutuhkan oleh klien korporat dan pemerintah.
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.t} className="lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{c.t}</div>
            <ul className="mt-5 space-y-3 text-sm">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/75 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Hubungi Kami
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={EMAIL_URL}
                className="inline-flex items-start gap-2 text-white/75 transition hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 flex-none text-gold" strokeWidth={1.75} />
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={PHONE_URL}
                className="inline-flex items-start gap-2 text-white/75 transition hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 flex-none text-gold" strokeWidth={1.75} />
                {PHONE}
              </a>
            </li>
            <li className="inline-flex items-start gap-2 text-white/75">
              <Compass className="mt-0.5 h-4 w-4 flex-none text-gold" strokeWidth={1.75} />
              <span>Senin &ndash; Jumat &middot; 08.00 &ndash; 17.00 WIB</span>
            </li>
            <li className="inline-flex items-center gap-2 text-sm text-white/80">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-gold" strokeWidth={1.75} />
              <span>Ruko Gading Elok 1 No. 21, Karawang Wetan, Karawang 41314, Jawa Barat</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col justify-center gap-4 py-6 text-xs text-white/60 md:flex-row items-center text-center">
          <div>
            &copy; {new Date().getFullYear()} PT Mustika Galuh Cakrawala. Seluruh hak cipta
            dilindungi. Developed by{" "}
            <a
              href="https://webekspres.id"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Webekspres
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
