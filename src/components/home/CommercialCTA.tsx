"use client";

import Link from "next/link";
import { Container, Eyebrow, Media, ArrowIcon } from "@/components/ui/Primitives";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { images, routes } from "@/content/site";
import { useI18n } from "@/components/ui/I18nProvider";
import type { Dict } from "@/content/i18n";

const destinations = (t: Dict) => [
  {
    audience: t.hero.privateQuestion,
    title: t.hero.shopCta,
    text: t.cta.privateText,
    href: routes.shop,
    image: images.wheelBlue.src,
    alt: images.wheelBlue.alt,
    position: "object-[center_55%]",
    accent: true,
  },
  {
    audience: t.hero.dealerQuestion,
    title: t.hero.b2bCta,
    text: t.cta.dealerText,
    href: routes.b2b,
    image: images.leverOrange.src,
    alt: images.leverOrange.alt,
    position: "object-[center_58%]",
    accent: false,
  },
];

export function CommercialCTA() {
  const { t } = useI18n();
  return (
    <section aria-labelledby="cta-title" className="bg-ink py-28 lg:py-44">
      <Container>
        <Reveal><Eyebrow index="06" className="text-steel">{t.cta.eyebrow}</Eyebrow></Reveal>
        <RevealLines
          as="h2"
          lines={[t.cta.heading]}
          className="mt-10 font-display text-[clamp(3rem,8vw,7.5rem)] font-semibold uppercase leading-[0.9]"
        />
        <span id="cta-title" className="sr-only">{t.hero.shopCta} / {t.hero.b2bCta}</span>

        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-2 lg:gap-6">
          {destinations(t).map((d, i) => (
            <Reveal key={d.title} delay={i * 120}>
              <Link href={d.href} className="group relative isolate flex min-h-[420px] flex-col justify-between overflow-hidden border border-white/15 p-7 sm:p-10 lg:min-h-[560px]">
                <Media src={d.image} alt={d.alt} fill loading="lazy" sizes="(min-width:1024px) 50vw, 100vw" className={`-z-20 object-cover ${d.position} transition-transform duration-[1600ms] ease-[var(--ease-out)] group-hover:scale-[1.06]`} />
                <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
                <span aria-hidden className={`absolute inset-0 -z-10 origin-bottom scale-y-0 transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-y-100 ${d.accent ? "bg-accent/85" : "bg-bone/90"}`} />

                <span className={`font-mono text-[11px] uppercase tracking-[0.24em] transition-colors duration-500 ${d.accent ? "" : "group-hover:text-ink"}`}>{d.audience}</span>

                <span className={`flex items-end justify-between gap-6 ${d.accent ? "" : "group-hover:text-ink"} transition-colors duration-500`}>
                  <span>
                    <span className="block font-display text-[clamp(2.6rem,5vw,4.6rem)] font-semibold uppercase leading-[0.92]">{d.title}</span>
                    <span className="mt-4 block max-w-xs text-sm opacity-80">{d.text}</span>
                  </span>
                  <span className="grid size-14 shrink-0 place-items-center rounded-full border border-current transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-2">
                    <ArrowIcon className="size-6" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
