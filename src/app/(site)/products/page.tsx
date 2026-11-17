import type { Metadata } from "next";
import { Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/ui/ProductCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { families, images, routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Performance motorcycle components for road, off-road, racing and custom builds.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product families"
        title={<>Four disciplines.<br />One standard.</>}
        text="Components engineered for road, off-road, racing and custom builds."
        image={images.wheelRed.src}
        imageAlt={images.wheelRed.alt}
        position="object-[center_62%]"
        crumbs={[{ label: "Products" }]}
      />
      <section className="bg-ink py-20 lg:py-32">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {families.map((f, i) => (
              <Reveal as="li" key={f.slug} delay={i * 80}>
                <ProductCard index={i} name={f.name} text={f.text} image={f.image} href={f.href} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
      <CTASection title="Ready to order?" text="Buy online, or find an authorised dealer near you.">
        <Button href={routes.shop} variant="primary">Shop here</Button>
        <Button href={routes.whereToBuy} variant="outline">Where to buy</Button>
      </CTASection>
    </>
  );
}
