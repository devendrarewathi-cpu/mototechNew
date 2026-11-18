import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1680px] px-[var(--gutter)] ${className}`}>{children}</div>;
}

/** Small technical label: "02 — Brand" with a hairline. */
export function Eyebrow({ index, children, className = "" }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] ${className}`}>
      {index && <span className="text-accent">{index}</span>}
      <span aria-hidden className="h-px w-8 bg-current opacity-40" />
      <span>{children}</span>
    </p>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden className={className}>
      <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="square" />
    </svg>
  );
}

/** Text link with an arrow that travels and an underline that draws on hover. */
export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`group relative inline-flex items-center gap-4 pb-2 font-mono text-xs uppercase tracking-[0.2em] ${className}`}>
      <span>{children}</span>
      <ArrowIcon className="transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1.5" />
      <span aria-hidden className="absolute bottom-0 left-0 h-px w-full bg-current opacity-30" />
      <span aria-hidden className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-x-100" />
    </Link>
  );
}

/** next/image wrapper: raster placeholders are optimised; SVGs are served as-is. */
export function Media(props: ImageProps) {
  const src = typeof props.src === "string" ? props.src : "";
  // eslint-disable-next-line jsx-a11y/alt-text -- alt is required by ImageProps and passed through
  return <Image {...props} unoptimized={src.endsWith(".svg") || props.unoptimized} />;
}

export function Logo({ className = "" }: { className?: string }) {
  // TODO(content): swap for the approved logo asset.
  return (
    <Image src="/images/logo-transparent.png" alt="MotoTech Performance Engineering" width={173} height={38} priority className={`h-9 w-auto lg:h-10 ${className}`} />
  );
}

/**
 * Commercial route panel (B2C solid / B2B outlined). Used in the hero.
 */
export function RoutePanel({
  variant,
  question,
  label,
  href,
}: {
  variant: "b2c" | "b2b";
  question: string;
  label: string;
  href: string;
}) {
  const solid = variant === "b2c";
  return (
    <Link
      href={href}
      className={`group relative flex items-center justify-between gap-6 overflow-hidden px-5 py-4 sm:px-6 sm:py-5 ${
        solid ? "bg-bone text-ink" : "border border-white/35 bg-black/40 text-bone backdrop-blur-md"
      }`}
    >
      <span
        aria-hidden
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-x-100 ${
          solid ? "bg-accent" : "bg-white/12"
        }`}
      />
      <span className="relative">
        <span className={`block text-[13px] ${solid ? "text-ink/70 group-hover:text-white/90" : "text-bone/80"} transition-colors duration-500`}>
          {question}
        </span>
        <span className={`mt-1 block font-display text-xl font-semibold uppercase tracking-[0.12em] sm:text-2xl ${solid ? "group-hover:text-white" : ""} transition-colors duration-500`}>
          {label}
        </span>
      </span>
      <span
        className={`relative grid size-11 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-[var(--ease-out)] group-hover:translate-x-1 ${
          solid ? "border-ink/30 group-hover:border-white group-hover:text-white" : "border-white/40 group-hover:border-accent"
        }`}
      >
        <ArrowIcon />
      </span>
    </Link>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  // Visually quiet marker for content that must be replaced.
  return <span data-placeholder className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel/80">{children}</span>;
}
