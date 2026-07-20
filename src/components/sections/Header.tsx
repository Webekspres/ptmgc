import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO_URL, NAV } from "./constants";
import { PrimaryCTA } from "./primitives";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...NAV.map((n) => n.id)];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 px-8 md:px-16 ${
        scrolled ? "border-b border-border bg-white/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="MGC — PT Mustika Galuh Cakrawala"
            className="h-14 w-14 rounded-full bg-white object-contain transition"
          />
          <div className="hidden sm:block leading-tight">
            <div
              className={`font-display text-[15px] font-extrabold tracking-tight ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              MUSTIKA GALUH CAKRAWALA
            </div>
            <div
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                scrolled ? "text-body" : "text-white/70"
              }`}
            >
              Perdagangan &amp; Konstruksi
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`relative px-4 py-2 text-sm font-medium transition ${
                scrolled
                  ? active === n.id
                    ? "text-primary"
                    : "text-body hover:text-primary"
                  : active === n.id
                    ? "text-white"
                    : "text-white/80 hover:text-white"
              }`}
            >
              {n.label}
              {active === n.id ? (
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-gold" />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PrimaryCTA variant={scrolled ? "primary" : "outline-light"} className="py-2.5!px-5!">
            Hubungi Kami
          </PrimaryCTA>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-sm p-2 transition cursor-pointer ${scrolled ? "text-ink" : "text-white"}`}
          aria-label="Buka menu navigasi"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-3 text-sm font-medium text-ink hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <PrimaryCTA className="mt-2 w-full">Hubungi Kami</PrimaryCTA>
          </div>
        </div>
      ) : null}
    </header>
  );
}
