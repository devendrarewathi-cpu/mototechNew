import { Container, Eyebrow, Media } from "@/components/ui/Primitives";
import { DrawLine, ImageWipe, Reveal, RevealLines } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { images, principles } from "@/content/site";

export function BrandIntro() {
  return (
    <section aria-labelledby="intro-title" className="bg-bone py-28 text-ink lg:py-44">
      <Container>
        <Reveal><Eyebrow index="01" className="text-ink/70">The brand</Eyebrow></Reveal>

        <div className="mt-12 grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <RevealLines
              as="h2"
              lines={["Performance is", "not an accent.", "It is the discipline."]}
              className="font-display text-[clamp(3rem,7.6vw,7.5rem)] font-semibold uppercase leading-[0.9]"
            />
            <span id="intro-title" className="sr-only">Brand introduction</span>
            <Reveal delay={200} className="mt-10 max-w-xl text-lg leading-relaxed text-ink/75">
              {/* TODO(content): replace with approved brand positioning copy */}
              <p>
                Every component begins as a question of tolerance, material and consequence. We design for the moment a rider asks the most of the machine, and we build so it never has to ask twice.
              </p>
            </Reveal>

            <ul className="mt-16 border-t border-ink/20">
              {principles.map((p, i) => (
                <Reveal as="li" key={p.k} delay={i * 70} className="group grid grid-cols-[3rem_1fr] items-baseline gap-x-4 border-b border-ink/20 py-5 sm:grid-cols-[3rem_14rem_1fr]">
                  <span className="font-mono text-[11px] text-ink/50">0{i + 1}</span>
                  <span className="font-display text-2xl font-semibold uppercase tracking-wide transition-colors duration-500 group-hover:text-accent">{p.k}</span>
                  <span className="col-start-2 text-sm text-ink/65 sm:col-start-3">{p.v}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-5 lg:pt-32">
            <Reveal dir="right">
              <ImageWipe className="relative aspect-[5/4] overflow-hidden bg-ink">
                <Parallax speed={0.07}>
                  <Media src={images.caliperWide.src} alt={images.caliperWide.alt} fill loading="lazy" sizes="(min-width:1024px) 40vw, 100vw" className="object-cover object-[35%_center]" />
                </Parallax>
              </ImageWipe>
              <div className="mt-4 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
                <DrawLine className="h-px flex-1 bg-ink/30" />
                Fig. 01 — Machined caliper
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
