"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, routes } from "@/content/site";
import { ArrowIcon, Logo } from "@/components/ui/Primitives";
import { LanguageSelector } from "@/components/ui/LanguageSelector";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // The menu is open only for the path it was opened on, so navigating closes it without an effect.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) =>
    setOpenAt((cur) => ((typeof v === "function" ? v(cur === pathname) : v) ? pathname : null));
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenAt(null);
    document.addEventListener("keydown", onKey);
    const mq = window.matchMedia("(min-width: 1280px)");
    const onMq = () => mq.matches && setOpenAt(null);
    mq.addEventListener("change", onMq);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a href="#main" className="fixed left-4 top-4 z-[70] -translate-y-20 bg-bone px-4 py-2 text-sm text-ink focus:translate-y-0">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-out)] ${
          scrolled || open ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          aria-hidden
          className={`header-scrim pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 transition-opacity duration-500 ${scrolled || open ? "opacity-0" : "opacity-100"}`}
        />
        <div
          className={`mx-auto flex max-w-[1680px] items-center justify-between px-[var(--gutter)] transition-all duration-500 ease-[var(--ease-out)] ${
            scrolled ? "h-16" : "h-20 lg:h-24"
          }`}
        >
          <Link href="/" aria-label="Home" className="relative z-[60]">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className={`group relative py-2 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-white ${isActive(n.href) ? "text-white" : "text-bone/85"}`}
              >
                {n.label}
                <span aria-hidden className={`absolute bottom-0 left-0 h-0.5 w-full origin-left bg-accent transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-x-100 ${isActive(n.href) ? "scale-x-100" : "scale-x-0"}`} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden xl:block"><LanguageSelector /></div>
            <Link
              href={routes.shop}
              className="group relative hidden items-center gap-3 overflow-hidden bg-bone px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink xl:inline-flex"
            >
              <span aria-hidden className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-x-100" />
              <span className="relative transition-colors duration-500 group-hover:text-white">Shop here</span>
              <ArrowIcon className="relative size-4 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white" />
            </Link>
            <Link href={routes.b2b} className="hidden items-center gap-3 border border-accent bg-accent px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent xl:inline-flex">
              B2B portal <ArrowIcon className="size-4" />
            </Link>

            <button
              type="button"
              className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-[7px] xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              <span className={`h-px w-7 bg-bone transition-transform duration-500 ease-[var(--ease-out)] ${open ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`h-px w-7 bg-bone transition-transform duration-500 ease-[var(--ease-out)] ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet full-screen panel */}
      <div
        id="mobile-nav"
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-ink px-[var(--gutter)] pb-8 pt-28 transition-[clip-path,visibility] duration-700 ease-[var(--ease-out)] xl:hidden ${
          open ? "visible [clip-path:inset(0_0_0_0)]" : "invisible [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center overflow-y-auto">
          <ul>
            {nav.map((n, i) => (
              <li key={n.href} className="overflow-hidden border-b border-white/10">
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  style={{ transitionDelay: open ? `${150 + i * 55}ms` : "0ms" }}
                  className={`flex items-center justify-between py-3.5 font-display text-4xl font-semibold uppercase tracking-wide transition-all duration-700 ease-[var(--ease-out)] sm:text-5xl ${
                    open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  } ${isActive(n.href) ? "text-accent" : ""}`}
                >
                  {n.label}
                  <ArrowIcon className="text-steel" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link href={routes.shop} onClick={() => setOpen(false)} className="flex items-center justify-between bg-bone px-5 py-4 font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink">
            Shop here <ArrowIcon />
          </Link>
          <Link href={routes.b2b} onClick={() => setOpen(false)} className="flex items-center justify-between border border-white/35 px-5 py-4 font-display text-xl font-semibold uppercase tracking-[0.12em]">
            B2B portal <ArrowIcon />
          </Link>
        </div>
        <div className="mt-6"><LanguageSelector align="left" up /></div>
      </div>
    </>
  );
}
