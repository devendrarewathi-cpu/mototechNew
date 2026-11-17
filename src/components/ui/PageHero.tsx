import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { Media } from "@/components/ui/Primitives";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

/** Hero used by every inner page: image, breadcrumbs, H1, intro and optional actions. */
export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  crumbs = [],
  position = "object-center",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  image: string;
  imageAlt: string;
  crumbs?: { label: string; href?: string }[];
  position?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[68svh] flex-col justify-end overflow-hidden lg:min-h-[640px]">
      <div className="absolute inset-0 -z-10">
        <div className="hero-zoom absolute inset-0">
          <Media src={image} alt={imageAlt} fill priority sizes="100vw" className={`object-cover ${position}`} />
        </div>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/30" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1680px] px-[var(--gutter)] pb-14 pt-40 lg:pb-20">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" style={step(0)} className="hero-in mb-8">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-bone/70">
              <li>
                <Link href="/" className="transition-colors hover:text-white">Home</Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  <span aria-hidden className="text-accent">/</span>
                  {c.href && i < crumbs.length - 1 ? (
                    <Link href={c.href} className="transition-colors hover:text-white">{c.label}</Link>
                  ) : (
                    <span aria-current="page" className="text-bone">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p style={step(1)} className="hero-in mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-bone/80">
          <span aria-hidden className="h-px w-10 bg-accent" />
          {eyebrow}
        </p>
        <h1 style={step(2)} className="hero-in max-w-5xl font-display text-[clamp(3rem,8vw,8rem)] font-semibold uppercase leading-[0.88]">
          {title}
        </h1>
        {text && (
          <p style={step(3)} className="hero-in mt-6 max-w-xl text-base leading-relaxed text-bone/80 sm:text-lg">
            {text}
          </p>
        )}
        {children && (
          <div style={step(4)} className="hero-in mt-10 flex flex-wrap gap-3">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
