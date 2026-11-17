import { Container, Eyebrow, Media, ArrowLink } from "@/components/ui/Primitives";
import { DrawLine, Reveal, RevealLines } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { images, motorsportStats, routes } from "@/content/site";

export function MotorsportSection() {
  return (
    <section aria-labelledby="motorsport-title" className="relative isolate flex min-h-[85svh] items-end overflow-hidden py-20 lg:min-h-[780px] lg:py-28">
      <div className="absolute inset-0 -z-10">
        <Parallax speed={0.1}>
                    <Media src={images.leverDark.src} alt={images.leverDark.alt} fill loading="lazy" sizes="100vw" className="object-cover object-center" />
        </Parallax>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-l from-ink/80 via-transparent to-transparent" />
      </div>

      <Container>
        <Reveal><Eyebrow index="05" className="text-bone/80">Motorsport</Eyebrow></Reveal>
        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <RevealLines
              as="h2"
              lines={["Born from", <span key="c" className="text-accent">competition.</span>]}
              className="font-display text-[clamp(4rem,12vw,12rem)] font-semibold uppercase leading-[0.85]"
            />
            <span id="motorsport-title" className="sr-only">Motorsport</span>
            <Reveal delay={250} className="mt-8 max-w-lg text-lg leading-relaxed text-bone/80">
              {/* TODO(content): approved motorsport copy; do not state results until supplied */}
              <p>The circuit is where ideas are proven. What is learned there goes into every part we make.</p>
              <div className="mt-10"><ArrowLink href={routes.motorsport}>Discover Motorsport</ArrowLink></div>
            </Reveal>
          </div>

          <Reveal dir="left" delay={300} className="lg:col-span-4">
            <DrawLine className="mb-2 h-px w-full bg-white/30" />
            <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-0">
              {motorsportStats.map((s) => (
                <div key={s.k} className="py-4 lg:flex lg:items-baseline lg:justify-between lg:border-b lg:border-white/15">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">{s.k}</dt>
                  <dd data-placeholder className="font-display text-4xl font-semibold text-bone/90">{s.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-steel">Figures to be supplied</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
