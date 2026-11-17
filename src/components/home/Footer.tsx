import Link from "next/link";
import { ArrowIcon, Container, Logo, PlaceholderNote } from "@/components/ui/Primitives";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { brand, contact, families, routes, socials } from "@/content/site";

const columns = [
  {
    title: "Products",
    links: families.map((f) => [f.name, f.href] as const),
  },
  {
    title: "Explore",
    links: [
      ["Company", routes.company],
      ["Innovation", routes.innovation],
      ["Motorsport", routes.motorsport],
      ["News", routes.news],
    ] as const,
  },
  {
    title: "Buy",
    links: [
      ["Shop here", routes.shop],
      ["B2B portal", routes.b2b],
      ["Where to buy", routes.whereToBuy],
    ] as const,
  },
];

const legal = [
  ["Privacy", routes.privacy],
  ["Cookies", routes.cookies],
  ["Legal", routes.legal],
] as const;

export function Footer() {
  return (
    <footer className="border-t-2 border-accent bg-graphite pt-16 lg:pt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Home" className="inline-block"><Logo /></Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-steel">{brand.description}</p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={`${s.label} (opens in a new tab)`} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[0.2em] text-bone/80 transition-colors hover:text-accent">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            {columns.map((c) => (
              <div key={c.title}>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">{c.title}</h2>
                <ul className="mt-5 space-y-3">
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="text-sm text-bone/85 transition-colors hover:text-accent">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">Contact</h2>
              <ul className="mt-5 space-y-3 text-sm text-bone/85">
                <li>{contact.email ? <a href={`mailto:${contact.email}`} className="transition-colors hover:text-accent">{contact.email}</a> : <PlaceholderNote>Email TBC</PlaceholderNote>}</li>
                <li>{contact.phone ? <a href={`tel:${contact.phone}`} className="transition-colors hover:text-accent">{contact.phone}</a> : <PlaceholderNote>Phone TBC</PlaceholderNote>}</li>
                <li>
                  <Link href={routes.contact} className="inline-flex items-center gap-2 text-accent transition-colors hover:text-white">
                    Contact us <ArrowIcon className="size-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 py-8 text-xs text-steel md:flex-row md:items-center md:justify-between">
          <p>© {brand.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map(([label, href]) => (
              <li key={label}><Link href={href} className="transition-colors hover:text-bone">{label}</Link></li>
            ))}
          </ul>
          <div className="flex items-center gap-6">
            <LanguageSelector up />
            <a href="#main" className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bone/80 transition-colors hover:text-accent">
              Top
              <span className="grid size-9 place-items-center rounded-full border border-white/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-accent">
                <ArrowIcon className="-rotate-90" />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
