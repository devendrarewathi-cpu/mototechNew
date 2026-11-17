import { Container, ArrowLink } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { families, routes } from "@/content/site";

export function ProductFamilies() {
  return (
    <section aria-labelledby="products-title" className="bg-ink py-28 lg:py-44">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading index="04" eyebrow="Product families" lines={["Four disciplines.", "One standard."]} />
          <span id="products-title" className="sr-only">Product families</span>
          <Reveal><ArrowLink href={routes.products}>All products</ArrowLink></Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {families.map((f, i) => (
            <Reveal as="li" key={f.slug} delay={i * 90}>
              <ProductCard index={i} name={f.name} text={f.text} image={f.image} href={f.href} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
