import { ArrowRight } from "lucide-react";
import { CONTACT_URL } from "./constants";
import { useTypewriter } from "./hooks";

/* -------------------------------------------------------------------------- */
/*  Primary CTA Button                                                        */
/* -------------------------------------------------------------------------- */

export function PrimaryCTA({
  children,
  variant = "primary",
  className = "",
  href = CONTACT_URL,
}: {
  children: React.ReactNode;
  variant?: "primary" | "gold" | "ghost" | "outline-light";
  className?: string;
  href?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 will-change-transform";
  const styles: Record<string, string> = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary-deep shadow-sm hover:-translate-y-0.5",
    gold: "bg-gold text-gold-foreground hover:brightness-95 shadow-sm hover:-translate-y-0.5",
    ghost: "border border-border bg-white text-primary hover:border-primary hover:bg-secondary",
    "outline-light":
      "border border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-sm",
  };
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Eyebrow                                                                   */
/* -------------------------------------------------------------------------- */

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-gold" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section Header                                                            */
/* -------------------------------------------------------------------------- */

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`.trim()}>
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
/*  Typewriter                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Animated typewriter that cycles through `words`. A static, fully-readable
 * copy is exposed to assistive tech via `sr-only`, while the animated span
 * (which mutates rapidly) is hidden from screen readers to avoid noisy
 * live-region announcements.
 */
export function Typewriter({
  words,
  className = "",
  typingSpeed,
  deletingSpeed,
  pauseTime,
}: {
  words: readonly string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}) {
  const text = useTypewriter(words, { typingSpeed, deletingSpeed, pauseTime });
  return (
    <span className="inline-block">
      <span className="sr-only">{words.join(" / ")}</span>
      <span aria-hidden="true" className={className}>
        {text}
        <span className="caret-blink ml-1 inline-block h-[0.78em] w-[3px] translate-y-[0.08em] bg-current align-middle" />
      </span>
    </span>
  );
}
