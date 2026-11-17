import type { ReactNode } from "react";
import { Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";

/** Closing call-to-action band used at the foot of inner pages. */
export function CTASection({ title, text, children }: { title: string; text?: string; children: ReactNode }) {
  return (
    <section className="border-t border-white/10 bg-graphite py-20 lg:py-28">
      <Container className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <Reveal>
          <h2 className="max-w-2xl font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold uppercase leading-[0.95]">{title}</h2>
          {text && <p className="mt-5 max-w-lg text-bone/70">{text}</p>}
        </Reveal>
        <Reveal delay={120} className="flex flex-wrap gap-3">
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
