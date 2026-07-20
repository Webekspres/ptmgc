export function ClientBar() {
  const sectors = [
    "Manufaktur",
    "Pemerintahan",
    "Pengembang Properti",
    "Infrastruktur",
    "Energi & Utilitas",
    "Pertambangan & Sumber Daya",
    "Komersial",
    "Industri",
  ];

  const items = [...sectors, ...sectors];

  return (
    <section className="border-y border-border bg-surface-2 px-8 md:px-16">
      <div className="container-x flex flex-col gap-5 py-10 md:flex-row md:items-center md:gap-10">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-body">
          Melayani Pelanggan Lintas Sektor
        </p>

        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-surface-2 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-surface-2 to-transparent"
            aria-hidden
          />
          <div className="marquee-track flex w-max items-center gap-10">
            {items.map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="flex shrink-0 items-center gap-10 whitespace-nowrap font-display text-sm font-bold text-ink/70"
              >
                {c}
                <span className="h-1 w-1 rounded-full bg-gold/60" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
