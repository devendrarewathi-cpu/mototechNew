import Link from "next/link";
import { ArrowIcon, Media } from "@/components/ui/Primitives";

/**
 * Product family card. All information (name, description, CTA) is visible at all times;
 * hover only adds a subtle lift, image zoom and accent border, so touch devices lose nothing.
 * The CTA link stretches over the whole card via an ::after overlay.
 */
export function ProductCard({
  index,
  name,
  text,
  image,
  href,
  sizes = "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw",
}: {
  index: number;
  name: string;
  text: string;
  image: string;
  href: string;
  sizes?: string;
}) {
  return (
    <article className="group relative flex h-full flex-col border border-white/10 bg-carbon transition-all duration-500 ease-[var(--ease-out)] focus-within:border-accent/70 hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_24px_60px_-24px_rgb(0_0_0/0.9)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
        <Media
          src={image}
          alt={`${name} product family`}
          fill
          loading="lazy"
          sizes={sizes}
          className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out)] group-hover:scale-[1.06]"
        />
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-x-100" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">0{index + 1}</span>
        <h3 className="mt-2 font-display text-3xl font-semibold uppercase leading-none">{name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-bone/70">{text}</p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-3 self-start font-mono text-[11px] uppercase tracking-[0.2em] text-bone after:absolute after:inset-0"
        >
          Explore
          <ArrowIcon className="size-4 text-accent transition-transform duration-500 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </article>
  );
}
