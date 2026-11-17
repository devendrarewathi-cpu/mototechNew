import type { Metadata } from "next";
import { Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { NewsCard } from "@/components/ui/NewsCard";
import { NoticePanel } from "@/components/ui/NoticePanel";
import { Button } from "@/components/ui/Button";
import { images, news, routes } from "@/content/site";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news, product releases and motorsport updates.",
};

export default function NewsPage() {
  const articles = [...news].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        eyebrow="News"
        title={<>Latest from<br />the workshop.</>}
        text="Product releases, engineering notes and motorsport updates."
        image={images.heroLever.src}
        imageAlt={images.heroLever.alt}
        position="object-[60%_center]"
        crumbs={[{ label: "News" }]}
      />
      <section className="bg-ink py-20 lg:py-32">
        <Container>
          {articles.length > 0 ? (
            <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((a, i) => (
                <Reveal as="li" key={a.slug} delay={i * 70}>
                  <NewsCard article={a} />
                </Reveal>
              ))}
            </ul>
          ) : (
            <NoticePanel
              title="No articles yet"
              actions={<Button href={routes.products} variant="primary">Explore products</Button>}
            >
              News will appear here as soon as the first article is published.
            </NoticePanel>
          )}
        </Container>
      </section>
    </>
  );
}
