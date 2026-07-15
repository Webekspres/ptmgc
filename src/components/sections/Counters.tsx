import { useEffect, useRef, useState } from "react";
import { useCounter } from "./hooks";

export function Counters() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(true)),
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const items = [
    { n: 240, s: "+", l: "Proyek Selesai" },
    { n: 180, s: "+", l: "Klien Korporat" },
    { n: 320, s: "+", l: "Mitra Bisnis" },
    { n: 45, s: "+", l: "Kota Terlayani" },
    { n: 150, s: "+", l: "Tenaga Profesional" },
  ];

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-primary-deep px-8 md:px-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      <div className="container-x relative grid grid-cols-2 gap-8 py-20 md:grid-cols-5 md:py-24">
        {items.map((it) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const v = useCounter(it.n, active);
          return (
            <div key={it.l} className="text-center md:text-left">
              <div className="font-display text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                {v}
                <span className="text-gold">{it.s}</span>
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                {it.l}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
