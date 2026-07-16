import {
  Building2,
  Factory,
  Fuel,
  HardHat,
  Landmark,
  Mountain,
  Ruler,
  Store,
  Warehouse,
} from "lucide-react";

export function Industries() {
  const items = [
    {
      icon: Factory,
      title: "Manufaktur",
      d: "Perluasan pabrik, fasilitas produksi, dan fit-out industri.",
    },
    {
      icon: Store,
      title: "Komersial",
      d: "Perkantoran, ruang ritel, dan pengembangan komersial mixed-use.",
    },
    {
      icon: HardHat,
      title: "Industri",
      d: "Fasilitas berat, bengkel kerja, dan bangunan industri khusus.",
    },
    {
      icon: Landmark,
      title: "Pemerintahan",
      d: "Pekerjaan publik, gedung institusi, dan pengadaan pemerintah.",
    },
    {
      icon: Ruler,
      title: "Infrastruktur",
      d: "Jalan, jembatan, dan pekerjaan sipil penunjang pembangunan nasional.",
    },
    {
      icon: Warehouse,
      title: "Pergudangan",
      d: "Hub logistik, cold storage, dan fasilitas distribusi.",
    },
    {
      icon: Building2,
      title: "Pengembangan Properti",
      d: "Proyek properti residensial, hospitality, dan mixed-use.",
    },
    {
      icon: Fuel,
      title: "Energi",
      d: "Pekerjaan penunjang utilitas dan infrastruktur sektor energi.",
    },
    {
      icon: Mountain,
      title: "Pertambangan",
      d: "Fasilitas lokasi, camp, dan infrastruktur penunjang operasi sumber daya.",
    },
  ];

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-primary-deep py-16 text-white md:py-36 px-8 md:px-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Industri yang Kami Layani
              </span>
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              Lintas sektor dengan
              <br className="hidden md:block" /> disiplin yang sama.
            </h2>
          </div>
          <p className="text-white/75 lg:col-span-4">
            Dari pabrik dan gudang hingga infrastruktur publik, tim kami beradaptasi dengan teknis,
            konteks regulasi, dan ekspektasi pemangku kepentingan di setiap sektor yang kami layani.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-sm border border-white/12 bg-white/5.5 p-8 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/9 hover:shadow-[0_16px_32px_-14px_rgba(0,0,0,0.6)] md:p-10"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold text-primary-deep transition-transform duration-300 group-hover:scale-105">
                  <it.icon className="h-6 w-6" strokeWidth={2} />
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-white/10 transition-colors duration-300 group-hover:bg-gold/40" />

              <h3 className="mt-5 font-display text-xl font-extrabold text-white">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
