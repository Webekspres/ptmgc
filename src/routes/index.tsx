import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Compass,
  Factory,
  Fuel,
  Gem,
  HardHat,
  Handshake,
  Landmark,
  Layers,
  LifeBuoy,
  MapPin,
  Mail,
  Menu,
  Mountain,
  Package,
  Phone,
  Quote,
  Ruler,
  ShieldCheck,
  Store,
  Truck,
  Warehouse,
  X,
} from "lucide-react";

import logoAsset from "@/assets/mgc-logo.png.asset.json";
import heroImg from "@/assets/hero-construction.jpg";
import overviewImg from "@/assets/company-overview.jpg";
import serviceTrading from "@/assets/service-trading.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceEngineering from "@/assets/service-engineering.jpg";
import serviceProject from "@/assets/service-project.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import qualitySafetyImg from "@/assets/quality-safety.jpg";

const WHATSAPP_URL =
  "https://wa.me/6281234567890?text=Hello%20MGC%2C%20I%20would%20like%20to%20discuss%20a%20project.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PT Mustika Galuh Cakrawala — Trading & Construction Partner" },
      {
        name: "description",
        content:
          "MGC delivers procurement, engineering, and construction services for industrial, commercial, government, and infrastructure clients across Indonesia.",
      },
    ],
  }),
  component: LandingPage,
});

/* -------------------------------------------------------------------------- */
/*  Primitives                                                                */
/* -------------------------------------------------------------------------- */

function PrimaryCTA({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "gold" | "ghost" | "outline-light";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 will-change-transform";
  const styles: Record<string, string> = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary-deep shadow-sm hover:-translate-y-0.5",
    gold:
      "bg-gold text-gold-foreground hover:brightness-95 shadow-sm hover:-translate-y-0.5",
    ghost:
      "border border-border bg-white text-primary hover:border-primary hover:bg-secondary",
    "outline-light":
      "border border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-sm",
  };
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-gold" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={align === "center" ? "flex justify-center" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-body md:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

const NAV = [
  { id: "about", label: "Company" },
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "projects", label: "Projects" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

function Header() {
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-white/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="MGC — PT Mustika Galuh Cakrawala"
            className={`h-11 w-11 object-contain transition ${
              scrolled ? "" : "brightness-0 invert"
            }`}
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
              Trading &amp; Construction
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
          <PrimaryCTA
            variant={scrolled ? "primary" : "outline-light"}
            className="!py-2.5 !px-5"
          >
            Request Consultation
          </PrimaryCTA>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-sm p-2 transition ${
            scrolled ? "text-ink" : "text-white"
          }`}
          aria-label="Toggle menu"
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
            <PrimaryCTA className="mt-2 w-full">Request Consultation</PrimaryCTA>
          </div>
        </div>
      ) : null}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

function Hero() {
  const trust = [
    "Reliable Partner",
    "Professional Team",
    "Quality Commitment",
    "Nationwide Service",
  ];
  const stats = [
    { v: "15+", l: "Years of Experience" },
    { v: "240+", l: "Projects Completed" },
    { v: "180+", l: "Business Partners" },
    { v: "98%", l: "Client Satisfaction" },
  ];

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-primary-deep">
      <img
        src={heroImg}
        alt="Industrial construction site with tower cranes and engineers reviewing plans"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" aria-hidden />

      <div className="container-x relative pt-40 pb-28 lg:pt-52 lg:pb-40">
        <div className="max-w-4xl reveal">
          <div className="inline-flex items-center gap-2 rounded-sm border border-white/25 bg-white/5 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
              PT Mustika Galuh Cakrawala · Est. Indonesia
            </span>
          </div>

          <h1 className="mt-7 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-[5.25rem]">
            Building Enduring
            <br />
            <span className="text-gold">Infrastructure.</span>{" "}
            <span className="whitespace-nowrap">Delivering Trust.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            An Indonesian trading and construction company partnering with manufacturers,
            developers, contractors, and government institutions to deliver disciplined
            procurement, engineering support, and construction execution at scale.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <PrimaryCTA variant="gold">Request a Consultation</PrimaryCTA>
            <PrimaryCTA variant="outline-light">Discuss Your Project</PrimaryCTA>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {trust.map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle2 className="h-4 w-4 text-gold" strokeWidth={2.25} />
                <span className="font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="relative mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/15 bg-white/10 backdrop-blur-xl md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="reveal bg-primary/40 p-6 md:p-8"
              style={{ animationDelay: `${0.15 * i + 0.2}s` }}
            >
              <div className="font-display text-4xl font-extrabold text-white md:text-5xl">
                {s.v}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 hover:text-white transition"
        >
          Scroll
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Client marquee                                                            */
/* -------------------------------------------------------------------------- */

function ClientBar() {
  const clients = [
    "Manufacturing",
    "Government",
    "Property Developers",
    "Infrastructure",
    "Energy & Utilities",
    "Mining & Resources",
    "Commercial",
    "Industrial",
  ];
  return (
    <section className="border-y border-border bg-surface-2">
      <div className="container-x flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-body">
          Trusted across sectors
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {clients.map((c) => (
            <span
              key={c}
              className="font-display text-sm font-bold tracking-tight text-ink/70"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  About                                                                      */
/* -------------------------------------------------------------------------- */

function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="relative overflow-hidden rounded-sm shadow-[var(--shadow-elevated)]">
              <img
                src={overviewImg}
                alt="MGC executives reviewing project plans in a corporate boardroom"
                width={1600}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-sm border border-border bg-white p-5">
                <div className="font-display text-3xl font-extrabold text-primary">
                  ISO 9001
                </div>
                <div className="mt-1 text-xs font-medium text-body">
                  Quality management standard
                </div>
              </div>
              <div className="rounded-sm border border-border bg-white p-5">
                <div className="font-display text-3xl font-extrabold text-primary">
                  SMK3
                </div>
                <div className="mt-1 text-xs font-medium text-body">
                  Occupational safety system
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="About the Company"
            title={
              <>
                A disciplined partner for
                <br className="hidden md:block" /> Indonesia&apos;s{" "}
                <span className="text-primary">most demanding projects.</span>
              </>
            }
            intro="PT Mustika Galuh Cakrawala (MGC) supports enterprises, government institutions, and developers with integrated trading and construction capabilities — combining rigorous procurement, engineering expertise, and disciplined project delivery under one accountable partner."
          />

          <div className="mt-12 space-y-8">
            <div className="grid gap-6 border-l-2 border-gold pl-6 md:grid-cols-2">
              <div>
                <div className="eyebrow text-primary">Our Vision</div>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  To be Indonesia&apos;s most trusted trading and construction partner —
                  measured by the integrity of our work and the longevity of our
                  relationships.
                </p>
              </div>
              <div>
                <div className="eyebrow text-primary">Our Mission</div>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  Deliver every project on schedule, within specification, and above
                  expectation — through professional teams, verified supply chains, and
                  uncompromising safety standards.
                </p>
              </div>
            </div>

            <div>
              <div className="eyebrow text-primary">Business Philosophy</div>
              <p className="mt-3 text-base leading-relaxed text-body">
                We measure success not by the size of our portfolio, but by the trust our
                clients place in us across successive engagements. Every specification is
                honoured, every commitment is documented, and every partnership is treated
                as a long-term obligation. This is the standard we hold ourselves to on
                every project — from a single procurement order to a multi-year
                construction program.
              </p>
            </div>

            <div className="pt-4">
              <PrimaryCTA variant="ghost">Learn More About Our Expertise</PrimaryCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why Choose MGC                                                            */
/* -------------------------------------------------------------------------- */

function WhyChoose() {
  const items = [
    {
      icon: Gem,
      title: "Integrity",
      body: "Transparent pricing, verified documentation, and honest reporting on every engagement — without exception.",
    },
    {
      icon: Handshake,
      title: "Professional Team",
      body: "Certified engineers, project managers, and procurement specialists with proven records in industrial and commercial work.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      body: "Materials, workmanship, and processes are verified at each milestone against international and national standards.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      body: "Structured schedules, mitigated supply chains, and disciplined logistics that respect your operational timelines.",
    },
    {
      icon: HardHat,
      title: "Safety Commitment",
      body: "Site safety and workforce protection are non-negotiable — governed by SMK3 procedures and continuous audits.",
    },
    {
      icon: Award,
      title: "Long-Term Partnership",
      body: "We invest in relationships that outlast individual projects, becoming a dependable extension of your operations.",
    },
  ];
  return (
    <section className="bg-surface-2 py-28 md:py-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="Why Choose MGC"
              title={
                <>
                  Six principles that shape
                  <br className="hidden md:block" /> every project we undertake.
                </>
              }
            />
          </div>
          <p className="text-body lg:col-span-4">
            The reasons enterprise and government clients continue to work with us across
            multiple projects — communicated in principles, proven in delivery.
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
              <ArrowUpRight
                className="absolute right-6 top-6 h-5 w-5 text-border transition group-hover:text-gold"
                strokeWidth={1.75}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Services                                                                  */
/* -------------------------------------------------------------------------- */

function Services() {
  const services = [
    {
      no: "01",
      img: serviceTrading,
      title: "Trading Solutions",
      lede: "Integrated procurement of industrial supplies and construction materials from verified manufacturers and distributors.",
      benefits: [
        "Multi-category material sourcing",
        "Vendor qualification & audit",
        "Optimized logistics & delivery",
      ],
    },
    {
      no: "02",
      img: serviceConstruction,
      title: "Construction Services",
      lede: "Full-scope construction execution for commercial, industrial, and infrastructure projects — from groundwork to handover.",
      benefits: [
        "General contracting",
        "Structural & civil works",
        "Fit-out & finishing",
      ],
    },
    {
      no: "03",
      img: serviceEngineering,
      title: "Engineering Support",
      lede: "Technical expertise across design coordination, structural review, and specification development for complex builds.",
      benefits: [
        "Value engineering",
        "Design review & buildability",
        "Technical documentation",
      ],
    },
    {
      no: "04",
      img: serviceProject,
      title: "Project Management",
      lede: "Disciplined program leadership covering planning, budgeting, procurement, execution, and risk oversight.",
      benefits: [
        "Schedule & cost control",
        "Multi-vendor coordination",
        "Milestone-based reporting",
      ],
    },
  ];
  return (
    <section id="services" className="py-28 md:py-36">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Services"
          title={
            <>
              Four capabilities. One accountable partner.
            </>
          }
          intro="MGC integrates trading, construction, engineering, and project management under a single point of accountability — so your specifications, timelines, and budgets are protected end-to-end."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-sm border border-border bg-white transition-all duration-500 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <div className="absolute left-6 top-6 flex items-center gap-3">
                  <span className="rounded-sm bg-gold px-2.5 py-1 font-display text-xs font-extrabold text-primary-deep">
                    {s.no}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                    Service
                  </span>
                </div>
                <h3 className="absolute inset-x-6 bottom-5 font-display text-3xl font-extrabold text-white">
                  {s.title}
                </h3>
              </div>

              <div className="p-8 md:p-10">
                <p className="text-base leading-relaxed text-body">{s.lede}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] text-ink">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 flex-none text-gold"
                        strokeWidth={2.25}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 border-b border-primary/30 pb-1 text-sm font-semibold text-primary transition hover:border-primary hover:gap-3"
                >
                  Consult our team
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Industries                                                                */
/* -------------------------------------------------------------------------- */

function Industries() {
  const items = [
    { icon: Factory, title: "Manufacturing", d: "Plant expansions, production facilities, and industrial fit-outs." },
    { icon: Store, title: "Commercial", d: "Offices, retail spaces, and mixed-use commercial developments." },
    { icon: HardHat, title: "Industrial", d: "Heavy-duty facilities, workshops, and specialized industrial builds." },
    { icon: Landmark, title: "Government", d: "Public works, institutional buildings, and government procurement." },
    { icon: Ruler, title: "Infrastructure", d: "Roads, bridges, and civil works supporting national development." },
    { icon: Warehouse, title: "Warehousing", d: "Logistics hubs, cold storage, and distribution facilities." },
    { icon: Building2, title: "Property Development", d: "Residential, hospitality, and mixed-use property projects." },
    { icon: Fuel, title: "Energy", d: "Utility supporting works and energy sector infrastructure." },
    { icon: Mountain, title: "Mining", d: "Site facilities, camps, and support infrastructure for resource operations." },
  ];
  return (
    <section id="industries" className="relative overflow-hidden bg-primary py-28 text-white md:py-36">
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
                Industries We Serve
              </span>
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              Sector expertise, delivered with
              <br className="hidden md:block" /> the same discipline.
            </h2>
          </div>
          <p className="text-white/75 lg:col-span-4">
            From factories and warehouses to public infrastructure, our teams adapt to the
            technical standards, regulatory context, and stakeholder expectations of every
            sector we serve.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative bg-primary p-8 transition hover:bg-primary-deep md:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-white/20 text-gold transition group-hover:border-gold group-hover:bg-gold group-hover:text-primary-deep">
                <it.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-xl font-extrabold text-white">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Projects                                                                  */
/* -------------------------------------------------------------------------- */

function Projects() {
  const items = [
    {
      img: project1,
      name: "Corporate Tower Fit-Out",
      cat: "Commercial",
      loc: "Jakarta, DKI Jakarta",
      s: "Multi-floor structural strengthening and premium office fit-out delivered on a compressed 9-month schedule.",
    },
    {
      img: project2,
      name: "Industrial Distribution Facility",
      cat: "Warehousing & Logistics",
      loc: "Bekasi, West Java",
      s: "Integrated warehousing, loading docks, and utility fit-out for a national FMCG distribution operator.",
    },
    {
      img: project3,
      name: "Infrastructure Bridge Program",
      cat: "Infrastructure",
      loc: "East Java",
      s: "Supporting civil works, procurement, and material logistics for a regional connectivity bridge project.",
    },
  ];
  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Featured Projects"
            title={
              <>
                A portfolio measured in
                <br className="hidden md:block" /> delivered outcomes.
              </>
            }
          />
          <PrimaryCTA variant="ghost">Discuss a Similar Project</PrimaryCTA>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {items.map((p, i) => (
            <article
              key={p.name}
              className={`group relative overflow-hidden rounded-sm border border-border bg-white ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                <img
                  src={p.img}
                  alt={p.name}
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-primary/25 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    <span>{p.cat}</span>
                    <span className="h-1 w-1 rounded-full bg-gold/60" />
                    <span className="text-white/80">{p.loc}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-extrabold text-white md:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/85">
                    {p.s}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Process                                                                    */
/* -------------------------------------------------------------------------- */

function Process() {
  const steps = [
    { n: "01", t: "Consultation", d: "Understand objectives, constraints, and success criteria with your team." },
    { n: "02", t: "Planning", d: "Define scope, schedule, resources, and governance for the engagement." },
    { n: "03", t: "Procurement", d: "Source, qualify, and secure materials through audited supply channels." },
    { n: "04", t: "Construction", d: "Execute site works with certified crews, verified methods, and daily oversight." },
    { n: "05", t: "Quality Control", d: "Inspect, test, and document every milestone against agreed specifications." },
    { n: "06", t: "Project Delivery", d: "Complete handover with commissioning, documentation, and formal sign-off." },
    { n: "07", t: "After-Sales", d: "Continued support, warranty response, and long-term partnership beyond delivery." },
  ];
  return (
    <section id="process" className="bg-surface-2 py-28 md:py-36">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Work Process"
          title={
            <>
              A disciplined path from
              <br className="hidden md:block" /> first conversation to long-term support.
            </>
          }
          intro="Every engagement follows the same structured methodology — so expectations are clear, risks are managed, and outcomes are predictable."
        />

        <div className="mt-16 overflow-x-auto pb-4">
          <ol className="grid min-w-[900px] grid-cols-7 gap-4 lg:min-w-0">
            {steps.map((s, i) => (
              <li key={s.n} className="relative">
                <div className="flex items-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary bg-white font-display text-sm font-extrabold text-primary">
                    {s.n}
                  </span>
                  {i < steps.length - 1 ? (
                    <span className="ml-2 h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                  ) : null}
                </div>
                <h3 className="mt-5 font-display text-lg font-extrabold tracking-tight text-ink">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Quality & Safety                                                          */
/* -------------------------------------------------------------------------- */

function QualitySafety() {
  const rows = [
    {
      icon: ShieldCheck,
      t: "Quality Assurance",
      d: "Every material and workmanship item is verified against project specifications and applicable national and international standards.",
    },
    {
      icon: HardHat,
      t: "Workplace Safety",
      d: "SMK3-aligned safety procedures, PPE compliance, and site inductions protect our teams and your operations.",
    },
    {
      icon: ClipboardList,
      t: "Documented Governance",
      d: "Milestone reports, inspection records, and change controls ensure full accountability at every stage.",
    },
    {
      icon: LifeBuoy,
      t: "Continuous Improvement",
      d: "Post-project reviews inform our standards, methods, and training — sharpening quality on every subsequent engagement.",
    },
  ];
  return (
    <section className="py-28 md:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-20">
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={qualitySafetyImg}
              alt="Safety officer inspecting a construction site with workers in PPE"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 flex items-center gap-6 rounded-sm border border-border bg-surface-2 p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-gold">
              <ShieldCheck className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <div>
              <div className="font-display text-lg font-extrabold text-ink">
                Zero-Harm Ambition
              </div>
              <div className="mt-1 text-sm text-body">
                Every project begins with a safety plan and ends with a safety report.
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Quality & Safety"
            title={
              <>
                Non-negotiable standards.
                <br className="hidden md:block" /> Verifiable at every step.
              </>
            }
            intro="Quality and safety are not add-ons — they are the operating discipline that governs every hour on our sites and every item in our supply chain."
          />
          <div className="mt-10 space-y-8">
            {rows.map((r) => (
              <div key={r.t} className="flex gap-5 border-t border-border pt-8">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-sm bg-secondary text-primary">
                  <r.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-ink">{r.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Counters                                                                  */
/* -------------------------------------------------------------------------- */

function useCounter(target: number, active: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return val;
}

function Counters() {
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
    { n: 240, s: "+", l: "Projects Completed" },
    { n: 180, s: "+", l: "Corporate Clients" },
    { n: 320, s: "+", l: "Business Partners" },
    { n: 45, s: "+", l: "Cities Served" },
    { n: 150, s: "+", l: "Professional Team" },
  ];

  return (
    <section ref={ref} className="border-y border-border bg-white">
      <div className="container-x grid grid-cols-2 gap-8 py-20 md:grid-cols-5 md:py-24">
        {items.map((it) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const v = useCounter(it.n, active);
          return (
            <div key={it.l} className="text-center md:text-left">
              <div className="font-display text-5xl font-extrabold tracking-tight text-primary md:text-6xl">
                {v}
                <span className="text-gold">{it.s}</span>
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-body">
                {it.l}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                              */
/* -------------------------------------------------------------------------- */

function Testimonials() {
  const items = [
    {
      q: "MGC delivered our factory expansion on schedule, with documentation and site discipline that matched our internal standards. They have become our default construction partner in Java.",
      n: "Ir. Bambang Sutrisno",
      r: "Operations Director",
      c: "Manufacturing Group, Bekasi",
    },
    {
      q: "Their procurement team consistently sources materials at the specification we require, with transparent pricing. In a market full of shortcuts, that reliability is genuinely rare.",
      n: "Andini Prameswari",
      r: "Head of Procurement",
      c: "National Property Developer",
    },
    {
      q: "From consultation through handover, communication was clear and structured. We appreciated the milestone reporting — no surprises, no ambiguity, just consistent progress.",
      n: "Drs. Hendra Wijaya",
      r: "Project Committee Chair",
      c: "Regional Government Institution",
    },
  ];
  return (
    <section className="bg-surface-2 py-28 md:py-36">
      <div className="container-x">
        <SectionHeader
          eyebrow="Client Testimonials"
          title="Trusted by clients who return."
          intro="Long-standing partnerships across manufacturing, property, and public sectors — the strongest signal of a reliable partner."
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
                <div className="font-display text-base font-extrabold text-ink">
                  {it.n}
                </div>
                <div className="mt-1 text-sm text-body">
                  {it.r} · {it.c}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */

function FAQ() {
  const faqs = [
    { q: "How do we begin a consultation with MGC?", a: "Send us a brief through the contact channel and our team will schedule a discovery discussion within two business days to understand your objectives, scope, and timeline." },
    { q: "What is the typical duration for a project?", a: "Timelines depend on scope — trading engagements often complete within weeks, while construction projects range from a few months to multi-year programs. We provide a detailed schedule during the planning stage." },
    { q: "Which regions of Indonesia do you cover?", a: "MGC delivers projects across Java, Sumatra, Kalimantan, Sulawesi, and other regions on request, coordinating logistics and local partners as required." },
    { q: "How is procurement handled?", a: "We source through audited suppliers, verify specifications, and manage logistics under a documented procurement plan aligned to your budget and schedule." },
    { q: "Do you handle construction directly or subcontract?", a: "We lead all projects directly with our internal team of engineers and site managers, engaging specialised trade partners under our supervision and quality standards." },
    { q: "Can MGC collaborate with our existing consultants?", a: "Yes. We frequently work alongside client-appointed architects, MEP consultants, and quantity surveyors — integrating cleanly into your governance model." },
    { q: "What about maintenance after handover?", a: "We provide defect liability coverage and ongoing maintenance agreements tailored to the asset type and operational profile." },
    { q: "How is payment typically structured?", a: "Payments are milestone-based, transparent, and formalised in the contract. We accommodate standard corporate and government procurement processes." },
    { q: "What ongoing support do you provide during a project?", a: "A dedicated project manager is your single point of contact throughout — supported by regular milestone reporting and site visit access whenever needed." },
    { q: "Do you offer after-sales support?", a: "Yes. Beyond warranty periods, we remain available for operational adjustments, upgrades, and future phases as your assets evolve." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 md:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title={<>Answers before you<br className="hidden md:block" /> even ask.</>}
            intro="Common questions from procurement teams, project committees, and operations leads."
          />
          <div className="mt-10">
            <PrimaryCTA variant="ghost">Ask a Specific Question</PrimaryCTA>
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
                  className="group flex w-full items-start gap-6 py-6 text-left transition"
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

/* -------------------------------------------------------------------------- */
/*  Final CTA                                                                 */
/* -------------------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-primary-deep py-28 text-white md:py-36"
    >
      <img
        src={heroImg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-deep via-primary to-primary-deep opacity-90" />
      <div className="container-x relative">
        <div className="max-w-4xl">
          <Eyebrow>Let&apos;s Talk</Eyebrow>
          <h2 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[4.5rem]">
            Let&apos;s build the
            <br />
            <span className="text-gold">future together.</span>
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
            Whether you are planning a facility expansion, procuring at scale, or preparing
            a new construction program, our team is ready to review your objectives and
            propose a structured way forward.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <PrimaryCTA variant="gold">Request a Consultation</PrimaryCTA>
            <PrimaryCTA variant="outline-light">Start Your Project</PrimaryCTA>
            <PrimaryCTA variant="outline-light">Get Professional Advice</PrimaryCTA>
          </div>

          <div className="mt-14 grid gap-6 border-t border-white/15 pt-10 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.75} />
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Direct Line
                </div>
                <div className="mt-1 font-display text-lg font-extrabold text-white">
                  +62 812 3456 7890
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.75} />
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Corporate Email
                </div>
                <div className="mt-1 font-display text-lg font-extrabold text-white">
                  contact@mgc-cakrawala.co.id
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.75} />
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Head Office
                </div>
                <div className="mt-1 font-display text-lg font-extrabold text-white">
                  Jakarta, Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  const cols = [
    {
      t: "Services",
      links: ["Trading Solutions", "Construction Services", "Engineering Support", "Project Management"],
    },
    {
      t: "Company",
      links: ["About MGC", "Why Choose Us", "Quality & Safety", "Featured Projects"],
    },
    {
      t: "Resources",
      links: ["Industries", "Work Process", "Testimonials", "FAQ"],
    },
  ];
  return (
    <footer className="bg-primary-deep text-white">
      <div className="container-x grid gap-14 pt-20 pb-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="MGC"
              className="h-12 w-12 object-contain brightness-0 invert"
            />
            <div>
              <div className="font-display text-base font-extrabold tracking-tight">
                PT MUSTIKA GALUH CAKRAWALA
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                Trading &amp; Construction
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            An Indonesian trading and construction partner delivering procurement,
            engineering, and construction services with the discipline required by
            enterprise and government clients.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <div className="flex items-start gap-3 text-white/80">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.75} />
              <span>Corporate Office, Jakarta, Indonesia</span>
            </div>
            <div className="flex items-start gap-3 text-white/80">
              <Mail className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.75} />
              <span>contact@mgc-cakrawala.co.id</span>
            </div>
            <div className="flex items-start gap-3 text-white/80">
              <Phone className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.75} />
              <span>+62 812 3456 7890</span>
            </div>
            <div className="flex items-start gap-3 text-white/80">
              <Compass className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.75} />
              <span>Monday – Friday · 08:00 – 17:00 WIB</span>
            </div>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.t} className="lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {c.t}
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-white/75 transition hover:text-white"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Connect
          </div>
          <div className="mt-5 space-y-3 text-sm">
            <a href="#" className="block text-white/75 transition hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="block text-white/75 transition hover:text-white">
              Instagram
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-white/75 transition hover:text-white">
              Direct Channel
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 text-xs text-white/60 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} PT Mustika Galuh Cakrawala. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Member of Istana Alam Kahuripan</span>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Floating action                                                           */
/* -------------------------------------------------------------------------- */

function FloatingCTA() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 hidden sm:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-primary-deep shadow-[var(--shadow-elevated)] transition hover:-translate-y-0.5 hover:brightness-95"
    >
      <Layers className="h-4 w-4" strokeWidth={2.25} />
      Start a Discussion
      <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

function LandingPage() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <ClientBar />
      <About />
      <WhyChoose />
      <Services />
      <Industries />
      <Projects />
      <Process />
      <QualitySafety />
      <Counters />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}

// Unused imports guarded to prevent tree-shake warnings — icons kept for future use.
void Package;
void Gem;
