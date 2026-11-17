import { Container, Eyebrow, Media, ArrowLink } from "@/components/ui/Primitives";
import { ImageWipe, Reveal, RevealLines } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { images, routes } from "@/content/site";

export function HeritageSection() {
  return (
    <section aria-labelledby="heritage-title" className="relative overflow-hidden bg-ink py-28 lg:py-44">
      <Container>
        <Reveal><Eyebrow index="02" className="text-steel">Heritage</Eyebrow></Reveal>

        <div className="relative mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-0">
          {/* Large image, bleeds to the left edge on desktop */}
          <div className="lg:col-span-8 lg:col-start-1 lg:row-start-1 lg:-ml-[var(--gutter)]">
            <ImageWipe className="relative aspect-[4/3] overflow-hidden bg-carbon lg:aspect-[2/1]">
              <Parallax axis="x" speed={0.06}>
                <Media src={images.leverTank.src} alt={images.leverTank.alt} fill loading="lazy" sizes="(min-width:1024px) 66vw, 100vw" className="object-cover object-[30%_center]" />
              </Parallax>
            </ImageWipe>
          </div>

          {/* Text block, overlapping the image's lower right on desktop */}
          <div className="relative lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-40">
            <Reveal dir="left" className="lg:bg-ink lg:p-12 lg:pr-0">
              {/* TODO(content): replace the year with the founding year */}
              <p aria-label="Year to be confirmed" className="font-display text-[clamp(4.5rem,9vw,8.5rem)] font-semibold leading-none text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.45)]">
                YYYY
              </p>
              <RevealLines
                as="h2"
                lines={["Every discipline", "has an origin."]}
                className="mt-4 font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold uppercase leading-[0.95]"
              />
              <span id="heritage-title" className="sr-only">Heritage</span>
              <p className="mt-6 max-w-md leading-relaxed text-bone/70">
                {/* TODO(content): approved history copy */}
                Ours is a workshop mindset: question the part, test the answer, and keep only what survives. That habit shaped what we build and how we build it.
              </p>
              <div className="mt-10"><ArrowLink href={routes.history}>Discover our history</ArrowLink></div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
