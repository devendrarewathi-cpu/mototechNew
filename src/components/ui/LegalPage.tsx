import { Container } from "@/components/ui/Primitives";
import { PageHero } from "@/components/ui/PageHero";
import { NoticePanel } from "@/components/ui/NoticePanel";
import { Button } from "@/components/ui/Button";
import { images, routes } from "@/content/site";

/** Shell for legal pages. The text itself must come from legal counsel; none is invented here. */
export function LegalPage({ title, note }: { title: string; note: string }) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        image={images.caliperWide.src}
        imageAlt={images.caliperWide.alt}
        crumbs={[{ label: title }]}
      />
      <section className="bg-ink py-20 lg:py-32">
        <Container>
          {/* TODO(content): approved legal copy */}
          <NoticePanel title={note} actions={<Button href={routes.contact} variant="outline">Contact us</Button>}>
            The approved text for this page will be published here. For questions in the meantime, please contact us.
          </NoticePanel>
        </Container>
      </section>
    </>
  );
}
