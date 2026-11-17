import type { Metadata } from "next";
import { Container } from "@/components/ui/Primitives";
import { PageHero } from "@/components/ui/PageHero";
import { NoticePanel } from "@/components/ui/NoticePanel";
import { Button } from "@/components/ui/Button";
import { images, routes } from "@/content/site";

export const metadata: Metadata = {
  title: "B2B portal",
  description: "Trade pricing, ordering and resources for dealers and distributors.",
};

// TODO(routes): point routes.b2b at the real portal login URL, then remove this page.
export default function B2BPage() {
  return (
    <>
      <PageHero
        eyebrow="Dealers & distributors"
        title={<>B2B<br />portal</>}
        text="Trade pricing, ordering and resources for partners."
        image={images.caliperOffroad.src}
        imageAlt={images.caliperOffroad.alt}
        position="object-[center_48%]"
        crumbs={[{ label: "B2B portal" }]}
      />
      <section className="bg-ink py-20 lg:py-32">
        <Container>
          <NoticePanel
            title="Partner access"
            actions={
              <>
                <Button href={routes.contact} variant="primary">Contact us</Button>
                <Button href={routes.products} variant="outline">Explore products</Button>
              </>
            }
          >
            The partner portal is not connected yet. To request access, get in touch and we will set you up.
          </NoticePanel>
        </Container>
      </section>
    </>
  );
}
