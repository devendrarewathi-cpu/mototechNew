import type { Metadata } from "next";
import { Container, PlaceholderNote } from "@/components/ui/Primitives";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/ui/ContactForm";
import { contact, images, socials } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the team for product, dealer and press enquiries.",
};

function Row({ label, value, href }: { label: string; value: string | null; href?: string }) {
  return (
    <div className="border-t border-white/15 py-5">
      <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">{label}</dt>
      <dd className="mt-2 text-lg">
        {value ? (href ? <a href={href} className="transition-colors hover:text-accent">{value}</a> : value) : <PlaceholderNote>To be supplied</PlaceholderNote>}
      </dd>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&rsquo;s talk.</>}
        text="Product, dealer and press enquiries: send us a message."
        image={images.leverOrange.src}
        imageAlt={images.leverOrange.alt}
        position="object-[center_55%]"
        crumbs={[{ label: "Contact" }]}
      />
      <section className="bg-ink py-20 lg:py-32">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold uppercase leading-none">Contact details</h2>
            <dl className="mt-10">
              <Row label="Address" value={contact.address} />
              <Row label="Email" value={contact.email} href={contact.email ? `mailto:${contact.email}` : undefined} />
              <Row label="Phone" value={contact.phone} href={contact.phone ? `tel:${contact.phone}` : undefined} />
              <div className="border-t border-white/15 py-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">Follow</dt>
                <dd className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`} className="font-mono text-xs uppercase tracking-[0.2em] text-bone/85 transition-colors hover:text-accent">
                      {s.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold uppercase leading-none">Send a message</h2>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
