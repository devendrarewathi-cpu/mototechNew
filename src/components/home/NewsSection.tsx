import { Container, ArrowLink } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/ui/NewsCard";
import { news, routes } from "@/content/site";

/** Latest three articles. Renders nothing until real articles exist in content/site.ts. */
export function NewsSection() {
  const latest = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section aria-labelledby="news-title" className="border-t border-white/10 bg-ink py-28 lg:py-44">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="News" lines={["Latest from", "the workshop."]} size="md" />
          <span id="news-title" className="sr-only">Latest news</span>
          <Reveal><ArrowLink href={routes.news}>All news</ArrowLink></Reveal>
        </div>
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {latest.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 90}>
              <NewsCard article={a} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
