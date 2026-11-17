import type { Metadata } from "next";
import { Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { images, routes } from "@/content/site";

export const metadata: Metadata = {
  title: "History",
  description: "Where the brand began and the milestones that shaped what we build.",
};

// TODO(content): replace with verified milestones. No dates or events have been invented.
const milestones = [1, 2, 3];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Heritage"
        title={<>Every discipline<br />has an origin.</>}
        text="Question the part, test the answer, and keep only what survives."
        image={images.leverTank.src}
        imageAlt={images.leverTank.alt}
        position="object-[30%_center]"
        crumbs={[{ label: "Company", href: routes.company }, { label: "History" }]}
      />
      <section className="bg-ink py-20 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Timeline" lines={["Milestones."]} size="md" />
          <ol className="mt-12 border-l border-white/15">
            {milestones.map((n) => (
              <Reveal as="li" key={n} delay={n * 70} className="relative grid gap-2 py-8 pl-8 sm:grid-cols-[12rem_1fr] sm:gap-8">
                <span aria-hidden className="absolute -left-[5px] top-11 size-2.5 rotate-45 bg-accent" />
                <span data-placeholder className="font-display text-5xl font-semibold leading-none text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.4)]">YYYY</span>
                <span data-placeholder className="self-center text-sm text-steel">Milestone to be supplied</span>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>
      <CTASection title="See what it became.">
        <Button href={routes.products} variant="primary">Explore products</Button>
        <Button href={routes.motorsport} variant="outline">Motorsport</Button>
      </CTASection>
    </>
  );
}
