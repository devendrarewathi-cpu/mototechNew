import type { Metadata } from "next";
import { Container } from "@/components/ui/Primitives";
import { PageHero } from "@/components/ui/PageHero";
import { NoticePanel } from "@/components/ui/NoticePanel";
import { Button } from "@/components/ui/Button";
import { images, routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Where to buy",
  description: "Buy online or find an authorised dealer.",
};

export default function WhereToBuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Where to buy"
        title={<>Find your<br />nearest dealer.</>}
        text="Order directly online, or visit an authorised dealer."
        image={images.bikeBlue.src}
        imageAlt={images.bikeBlue.alt}
        position="object-[center_40%]"
        crumbs={[{ label: "Where to buy" }]}
      >
        <Button href={routes.shop} variant="primary">Shop here</Button>
      </PageHero>

      <section className="bg-ink py-20 lg:py-32">
        <Container className="grid gap-5 lg:grid-cols-2">
          <NoticePanel
            title="Dealer locator"
            actions={<Button href={routes.contact} variant="outline">Ask us for a dealer</Button>}
          >
            {/* TODO(content): dealer network data / locator integration */}
            The dealer network will be listed here once the data is supplied. In the meantime, contact us and we will point you to the right dealer.
          </NoticePanel>
          <NoticePanel
            title="Become a partner"
            actions={<Button href={routes.b2b} variant="primary">B2B portal</Button>}
          >
            Dealers and distributors can access trade pricing, ordering and resources through the B2B portal.
          </NoticePanel>
        </Container>
      </section>
    </>
  );
}
