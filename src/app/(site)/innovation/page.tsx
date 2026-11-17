import type { Metadata } from "next";
import { Container, Media } from "@/components/ui/Primitives";
import { ImageWipe, Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { engineering, images, routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Innovation",
  description: "Research, precision manufacturing, materials and quality: how our components are engineered.",
};

export default function InnovationPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering & innovation"
        title={<>Precision,<br />measured.</>}
        text="Progress measured on the bench before the track."
        image={images.masterCylinder.src}
        imageAlt={images.masterCylinder.alt}
        crumbs={[{ label: "Innovation" }]}
      />
      <section className="tech-grid border-b border-white/10 bg-graphite py-20 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-5">
              <ImageWipe className="relative aspect-[4/5] overflow-hidden bg-carbon">
                <Media src={images.leverOrange.src} alt={images.leverOrange.alt} fill loading="lazy" sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              </ImageWipe>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-steel">Fig. — Machined detail</p>
            </Reveal>
            <dl className="lg:col-span-7">
              {engineering.map((e, i) => (
                <Reveal key={e.k} delay={i * 80} className="border-t border-white/15 py-8 first:border-t-0 first:pt-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <dt className="font-display text-3xl font-semibold uppercase tracking-wide">
                      <span className="mr-3 font-mono text-[11px] text-accent">0{i + 1}</span>
                      {e.k}
                    </dt>
                    <span data-placeholder className="border border-white/20 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-steel">{e.value}</span>
                  </div>
                  <dd className="mt-3 max-w-lg text-bone/70">{e.v}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </Container>
      </section>
      <CTASection title="Engineered to be used.">
        <Button href={routes.products} variant="primary">Explore products</Button>
        <Button href={routes.motorsport} variant="outline">Motorsport</Button>
      </CTASection>
    </>
  );
}
