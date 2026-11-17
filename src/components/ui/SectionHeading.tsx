import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Primitives";
import { Reveal, RevealLines } from "@/components/ui/Reveal";

/** Eyebrow + masked headline + optional intro copy. `tone` picks colours for dark or light sections. */
export function SectionHeading({
  index,
  eyebrow,
  lines,
  text,
  tone = "dark",
  size = "lg",
  as = "h2",
  className = "",
}: {
  index?: string;
  eyebrow: string;
  lines: ReactNode[];
  text?: ReactNode;
  tone?: "dark" | "light";
  size?: "md" | "lg";
  as?: "h1" | "h2";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <div className={className}>
      <Reveal>
        <Eyebrow index={index} className={light ? "text-ink/70" : "text-steel"}>
          {eyebrow}
        </Eyebrow>
      </Reveal>
      <RevealLines
        as={as}
        lines={lines}
        className={`mt-8 font-display font-semibold uppercase leading-[0.92] ${
          size === "lg" ? "text-[clamp(2.75rem,7vw,6.5rem)]" : "text-[clamp(2.25rem,5vw,4.5rem)]"
        } ${light ? "text-ink" : ""}`}
      />
      {text && (
        <Reveal delay={150} className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${light ? "text-ink/75" : "text-bone/75"}`}>
          {text}
        </Reveal>
      )}
    </div>
  );
}
