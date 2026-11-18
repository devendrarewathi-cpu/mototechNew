"use client";

import type { CSSProperties } from "react";
import { RoutePanel } from "@/components/ui/Primitives";
import { routes } from "@/content/site";
import { useI18n } from "@/components/ui/I18nProvider";
import { HeroVideo } from "@/components/home/HeroVideo";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  const { hero } = useI18n().t;
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <HeroVideo />

      <div className="mx-auto grid w-full max-w-[1680px] gap-10 px-[var(--gutter)] pb-24 pt-36 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-24">
        <div className="lg:col-span-6">
          <p style={step(0)} className="hero-in mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-bone/80">
            <span aria-hidden className="h-px w-10 bg-accent" />
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            style={step(1)}
            className="hero-in font-display text-[clamp(3rem,7.2vw,7rem)] font-semibold uppercase leading-[0.88]"
          >
            {hero.title[0]}
            <br />
            {hero.title[1]}
            <br />
            <span className="text-accent">{hero.title[2]}</span>
          </h1>
          <p style={step(2)} className="hero-in mt-6 max-w-md text-base leading-relaxed text-bone/80 sm:text-lg">
            {hero.text}
          </p>
        </div>

        <div style={step(3)} className="hero-in grid gap-3 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-1 xl:w-full xl:max-w-[520px] xl:justify-self-end">
          <RoutePanel variant="b2c" question={hero.privateQuestion} label={hero.shopCta} href={routes.shop} />
          <RoutePanel variant="b2b" question={hero.dealerQuestion} label={hero.b2bCta} href={routes.b2b} />
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-steel xl:flex">
        Scroll
        <span className="h-10 w-px overflow-hidden bg-white/15"><span className="scroll-cue block h-full w-full bg-bone" /></span>
      </div>
    </section>
  );
}
