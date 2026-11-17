import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/Primitives";

type Variant = "primary" | "light" | "outline" | "outline-dark";

const styles: Record<Variant, { base: string; fill: string; hover: string }> = {
  // Brand red
  primary: { base: "bg-accent text-white", fill: "bg-white", hover: "group-hover:text-ink" },
  // Bone fill (used on dark backgrounds)
  light: { base: "bg-bone text-ink", fill: "bg-accent", hover: "group-hover:text-white" },
  // Outlined, for dark backgrounds
  outline: { base: "border border-white/35 text-bone", fill: "bg-white/12", hover: "" },
  // Outlined, for light (bone) backgrounds
  "outline-dark": { base: "border border-ink/40 text-ink", fill: "bg-ink", hover: "group-hover:text-bone" },
};

/**
 * The one button used across the site. 48px tall (touch friendly), square corners,
 * a fill that slides in on hover and a visible focus ring from the global :focus-visible style.
 */
export function Button({
  href,
  variant = "primary",
  arrow = true,
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const v = styles[variant];
  return (
    <Link
      href={href}
      className={`group relative inline-flex h-12 items-center justify-center gap-3 overflow-hidden px-6 font-mono text-[11px] font-medium uppercase tracking-[0.2em] ${v.base} ${className}`}
    >
      <span
        aria-hidden
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-x-100 ${v.fill}`}
      />
      <span className={`relative transition-colors duration-500 ${v.hover}`}>{children}</span>
      {arrow && <ArrowIcon className={`relative size-4 transition-all duration-500 group-hover:translate-x-1 ${v.hover}`} />}
    </Link>
  );
}
