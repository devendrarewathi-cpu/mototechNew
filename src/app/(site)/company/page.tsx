import type { Metadata } from "next";
import { Container, Media } from "@/components/ui/Primitives";
import { ImageWipe, Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { companyFacts, images, principles, routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Company",
  description: "The brand, the engineering discipline and the principles behind every component we make.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title={<>Built on<br />discipline.</>}
        text="Every component begins as a question of tolerance, material and consequence."
        image={images.caliperWide.src}
        imageAlt={images.caliperWide.alt}
        position="object-[35%_center]"
        crumbs={[{ label: "Company" }]}
      >
        <Button href={routes.history} variant="light">Our history</Button>
      </PageHero>

      <section className="bg-bone py-24 text-ink lg:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="The brand" lines={["Performance is", "the discipline."]} tone="light" size="md" />
              <Reveal delay={150} className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75">
                {/* TODO(content): replace with approved brand story */}
                <p>
                  We design for the moment a rider asks the most of the machine, and we build so it never has to ask twice.
                </p>
              </Reveal>
              <ul className="mt-14 border-t border-ink/20">
                {principles.map((p, i) => (
                  <Reveal as="li" key={p.k} delay={i * 60} className="grid grid-cols-[3rem_1fr] items-baseline gap-x-4 border-b border-ink/20 py-5 sm:grid-cols-[3rem_14rem_1fr]">
                    <span className="font-mono text-[11px] text-ink/50">0{i + 1}</span>
                    <span className="font-display text-2xl font-semibold uppercase tracking-wide">{p.k}</span>
                    <span className="col-start-2 text-sm text-ink/65 sm:col-start-3">{p.v}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <Reveal dir="right">
                <ImageWipe className="relative aspect-[4/5] overflow-hidden bg-ink">
                  <Media src={images.caliperPortrait.src} alt={images.caliperPortrait.alt} fill loading="lazy" sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
                </ImageWipe>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="Company facts" className="bg-ink py-20 lg:py-28">
        <Container>
          <dl className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {companyFacts.map((f) => (
              <StatCard key={f.k} label={f.k} value={f.v} />
            ))}
          </dl>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-steel">Figures to be supplied</p>
        </Container>
      </section>

      <CTASection title="Work with us." text="Dealers, distributors and teams: let's talk.">
        <Button href={routes.contact} variant="primary">Contact us</Button>
        <Button href={routes.b2b} variant="outline">B2B portal</Button>
      </CTASection>
    </>
  );
}
