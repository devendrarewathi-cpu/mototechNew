import type { Metadata } from "next";
import { Container } from "@/components/ui/Primitives";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { NoticePanel } from "@/components/ui/NoticePanel";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { images, motorsportStats, routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Motorsport",
  description: "The circuit is where ideas are proven. What is learned there goes into every part we make.",
};

export default function MotorsportPage() {
  return (
    <>
      <PageHero
        eyebrow="Motorsport"
        title={<>Born from<br /><span className="text-accent">competition.</span></>}
        text="The circuit is where ideas are proven. What is learned there goes into every part we make."
        image={images.leverDark.src}
        imageAlt={images.leverDark.alt}
        crumbs={[{ label: "Motorsport" }]}
      >
        <Button href={routes.products + "/racing"} variant="primary">Racing range</Button>
      </PageHero>

      <section className="bg-ink py-20 lg:py-32">
        <Container>
          <SectionHeading eyebrow="By the numbers" lines={["Proven on track."]} size="md" />
          <dl className="mt-12 grid gap-x-8 sm:grid-cols-3">
            {motorsportStats.map((s) => (
              <StatCard key={s.k} label={s.k} value={s.v} />
            ))}
          </dl>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-steel">Figures to be supplied</p>

          <div className="mt-20 grid gap-5 lg:grid-cols-2">
            <NoticePanel title="Results">
              {/* TODO(content): verified race results. None are stated until supplied. */}
              Race results will be listed here once approved data is supplied.
            </NoticePanel>
            <NoticePanel title="Teams & partners">
              Team and partner details will be published here once confirmed.
            </NoticePanel>
          </div>
        </Container>
      </section>

      <CTASection title="Race-proven components.">
        <Button href={routes.products + "/racing"} variant="primary">Racing range</Button>
        <Button href={routes.contact} variant="outline">Contact us</Button>
      </CTASection>
    </>
  );
}
