import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { families, routes } from "@/content/site";

// TODO(content): replace the "—" values with approved specifications for each family.
const overview = ["Compatibility", "Materials", "Finish", "Availability"];

export function generateStaticParams() {
  return families.map((f) => ({ family: f.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[family]">): Promise<Metadata> {
  const { family } = await params;
  const f = families.find((x) => x.slug === family);
  if (!f) return {};
  return { title: f.name, description: f.text };
}

export default async function FamilyPage({ params }: PageProps<"/products/[family]">) {
  const { family } = await params;
  const f = families.find((x) => x.slug === family);
  if (!f) notFound();
  const others = families.filter((x) => x.slug !== f.slug);

  return (
    <>
      <PageHero
        eyebrow="Product family"
        title={f.name}
        text={f.text}
        image={f.image}
        imageAlt={`${f.name} product family`}
        position={f.heroPosition}
        crumbs={[{ label: "Products", href: routes.products }, { label: f.name }]}
      >
        <Button href={routes.shop} variant="primary">Shop here</Button>
        <Button href={routes.whereToBuy} variant="outline">Where to buy</Button>
      </PageHero>

      <section className="bg-ink py-20 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Range overview" lines={["Specification."]} size="md" />
          <dl className="mt-12 grid border-t border-white/15 sm:grid-cols-2">
            {overview.map((k) => (
              <Reveal key={k} className="grid grid-cols-[10rem_1fr] items-baseline gap-4 border-b border-white/15 py-5 sm:pr-8">
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">{k}</dt>
                <dd data-placeholder className="text-bone/40">
                  —<span className="sr-only"> To be supplied</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section aria-labelledby="other-families" className="border-t border-white/10 bg-graphite py-20 lg:py-32">
        <Container>
          <h2 id="other-families" className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold uppercase leading-none">
            Other families
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <ProductCard
                  index={families.findIndex((x) => x.slug === o.slug)}
                  name={o.name}
                  text={o.text}
                  image={o.image}
                  href={o.href}
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection title="Specify your build." text="Talk to us about fitment, availability and trade supply.">
        <Button href={routes.contact} variant="primary">Contact us</Button>
        <Button href={routes.b2b} variant="outline">B2B portal</Button>
      </CTASection>
    </>
  );
}
