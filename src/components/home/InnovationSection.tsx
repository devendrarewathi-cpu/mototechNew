import { Container, Eyebrow, Media, ArrowLink } from "@/components/ui/Primitives";
import { DrawLine, ImageWipe, Reveal, RevealLines } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { engineering, images, routes } from "@/content/site";

export function InnovationSection() {
  return (
    <section aria-labelledby="innovation-title" className="tech-grid relative overflow-hidden border-y border-white/10 bg-graphite py-28 lg:py-44">
      <Container>
        <Reveal><Eyebrow index="03" className="text-steel">Engineering &amp; innovation</Eyebrow></Reveal>

        <RevealLines
          as="h2"
          lines={["Precision,", "measured."]}
          className="mt-12 font-display text-[clamp(4rem,12vw,12rem)] font-semibold uppercase leading-[0.85]"
        />
        <span id="innovation-title" className="sr-only">Engineering and innovation</span>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          {/* Technical visual with corner marks */}
          <Reveal className="lg:col-span-7">
            <div className="relative">
              <ImageWipe className="relative aspect-[16/9] overflow-hidden bg-carbon">
                <Parallax speed={0.06}>
                                    <Media src={images.masterCylinder.src} alt={images.masterCylinder.alt} fill loading="lazy" sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
                </Parallax>
              </ImageWipe>
              {["left-0 top-0 border-l border-t", "right-0 top-0 border-r border-t", "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"].map((c) => (
                <span key={c} aria-hidden className={`absolute size-5 border-accent ${c} -m-2`} />
              ))}
              <p className="mt-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                <span>Fig. 02 — Machined detail</span>
                <span>Scale — TBC</span>
              </p>
            </div>
          </Reveal>

          {/* Spec-style list */}
          <div className="relative lg:col-span-5 lg:pl-8">
            <DrawLine axis="y" className="absolute -left-0 top-0 hidden h-full w-px bg-white/15 lg:block" />
            <dl>
              {engineering.map((e, i) => (
                <Reveal key={e.k} delay={i * 90} className="group border-t border-white/15 py-7 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline justify-between gap-6">
                    <dt className="font-display text-2xl font-semibold uppercase tracking-wide transition-colors duration-500 group-hover:text-accent">
                      <span className="mr-3 font-mono text-[11px] text-steel">0{i + 1}</span>
                      {e.k}
                    </dt>
                    <span data-placeholder className="shrink-0 border border-white/20 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-steel">{e.value}</span>
                  </div>
                  <dd className="mt-3 max-w-sm text-sm leading-relaxed text-bone/65">{e.v}</dd>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={200} className="mt-8"><ArrowLink href={routes.innovation}>Explore innovation</ArrowLink></Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
