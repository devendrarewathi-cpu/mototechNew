import type { Metadata } from "next";
import { Container } from "@/components/ui/Primitives";
import { PageHero } from "@/components/ui/PageHero";
import { NoticePanel } from "@/components/ui/NoticePanel";
import { Button } from "@/components/ui/Button";
import { images, routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse the range and order directly.",
};

// TODO(routes): point routes.shop at the real store URL, or build the shop here, then remove this page.
export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Private customers"
        title="Shop"
        text="Browse the range and order directly."
        image={images.wheelBlue.src}
        imageAlt={images.wheelBlue.alt}
        position="object-[center_55%]"
        crumbs={[{ label: "Shop" }]}
      />
      <section className="bg-ink py-20 lg:py-32">
        <Container>
          <NoticePanel
            title="Online shop"
            actions={
              <>
                <Button href={routes.products} variant="primary">Explore products</Button>
                <Button href={routes.whereToBuy} variant="outline">Where to buy</Button>
              </>
            }
          >
            The online store is not connected yet. You can explore the full range now and find where to buy.
          </NoticePanel>
        </Container>
      </section>
    </>
  );
}
