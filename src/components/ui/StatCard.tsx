/** Label + large value. A "—" value renders muted as a "to be supplied" placeholder. */
export function StatCard({ label, value, tone = "dark" }: { label: string; value: string; tone?: "dark" | "light" }) {
  const empty = value === "—";
  const light = tone === "light";
  return (
    <div className={`border-t py-6 ${light ? "border-ink/20" : "border-white/15"}`}>
      <dt className={`font-mono text-[10px] uppercase tracking-[0.2em] ${light ? "text-ink/60" : "text-steel"}`}>{label}</dt>
      <dd
        {...(empty ? { "data-placeholder": true } : {})}
        className={`mt-3 font-display text-5xl font-semibold leading-none ${empty ? (light ? "text-ink/25" : "text-bone/25") : ""}`}
      >
        {value}
        {empty && <span className="sr-only">To be supplied</span>}
      </dd>
    </div>
  );
}
