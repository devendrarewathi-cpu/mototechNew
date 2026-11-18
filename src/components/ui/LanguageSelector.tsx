"use client";

import { useEffect, useRef, useState } from "react";
import { languages } from "@/content/site";
import type { Locale } from "@/content/i18n";
import { setLocale, useI18n } from "@/components/ui/I18nProvider";

export function LanguageSelector({ align = "right", up = false }: { align?: "left" | "right"; up?: boolean }) {
  const [open, setOpen] = useState(false);
  const { locale } = useI18n();
  const current = languages.find((l) => l.locale === locale) ?? languages[0];
  const root = useRef<HTMLDivElement>(null);

  const choose = (next: Locale) => {
    setOpen(false);
    setLocale(next);
  };

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent) {
        if (e.key === "Escape") setOpen(false);
      } else if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${current.label}`}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent"
      >
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </svg>
        {current.code}
        <svg viewBox="0 0 10 6" width="9" height="6" fill="none" stroke="currentColor" aria-hidden className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <path d="m1 1 4 4 4-4" />
        </svg>
      </button>
      <ul
        role="listbox"
        aria-label="Select language"
        className={`absolute z-50 min-w-40 border border-white/15 bg-ink/95 py-2 backdrop-blur-xl transition-all duration-300 ${
          align === "right" ? "right-0" : "left-0"
        } ${up ? "bottom-full mb-3" : "top-full mt-3"} ${open ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0"}`}
      >
        {languages.map((l) => (
          <li key={l.code} role="option" aria-selected={l.code === current.code}>
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              onClick={() => choose(l.locale)}
              className={`flex w-full items-center justify-between gap-6 px-4 py-2 text-left text-sm transition-colors hover:bg-white/8 ${l.code === current.code ? "text-accent" : "text-bone"}`}
            >
              {l.label}<span className="font-mono text-[11px] text-steel">{l.code}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
