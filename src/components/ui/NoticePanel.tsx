import type { ReactNode } from "react";

/** Quiet bordered panel for "content to be supplied" / empty states. Keeps pages structured until real data exists. */
export function NoticePanel({ title, children, actions }: { title: string; children?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="border border-dashed border-white/20 bg-carbon/60 p-8 sm:p-10">
      <h3 className="font-display text-3xl font-semibold uppercase leading-none">{title}</h3>
      {children && <div className="mt-4 max-w-xl text-sm leading-relaxed text-bone/70">{children}</div>}
      {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
    </div>
  );
}
