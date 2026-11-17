import Link from "next/link";
import { ArrowIcon, Media } from "@/components/ui/Primitives";
import type { NewsArticle } from "@/content/site";

const fmt = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group relative flex h-full flex-col border border-white/10 bg-carbon transition-all duration-500 ease-[var(--ease-out)] focus-within:border-accent/70 hover:-translate-y-1 hover:border-accent/70">
      <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
        <Media
          src={article.image}
          alt={article.imageAlt}
          fill
          loading="lazy"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out)] group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
          <span className="text-accent">{article.category}</span>
          <span aria-hidden className="h-px w-5 bg-white/25" />
          <time dateTime={article.date}>{fmt.format(new Date(article.date))}</time>
        </p>
        <h3 className="mt-4 font-display text-2xl font-semibold uppercase leading-[1.05]">{article.title}</h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-bone/70">{article.excerpt}</p>
        <Link
          href={`/news/${article.slug}`}
          className="mt-6 inline-flex items-center gap-3 self-start font-mono text-[11px] uppercase tracking-[0.2em] after:absolute after:inset-0"
        >
          Read more
          <ArrowIcon className="size-4 text-accent transition-transform duration-500 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </article>
  );
}
