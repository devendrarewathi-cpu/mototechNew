import { families } from "@/content/site";

/** Infinite marquee of the product disciplines — a visual bridge between hero and brand story. */
export function DisciplineBand() {
  const items = families.map((f) => f.name);
  return (
    <section aria-label="Disciplines" className="relative overflow-hidden border-y border-white/10 bg-ink py-6 lg:py-8">
      <div className="marquee flex w-max items-center" aria-hidden>
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex shrink-0 items-center">
            {[...items, ...items].map((name, i) => (
              <li key={`${dup}-${i}`} className="flex items-center">
                <span
                  className={`px-8 font-display text-[clamp(2rem,4.5vw,4rem)] font-semibold uppercase leading-none lg:px-12 ${
                    i % 2 ? "text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.5)]" : "text-bone"
                  }`}
                >
                  {name}
                </span>
                <span className="size-2 rotate-45 bg-accent" />
              </li>
            ))}
          </ul>
        ))}
      </div>
      <p className="sr-only">Road / Performance, Off-Road, Racing, Custom.</p>
    </section>
  );
}
