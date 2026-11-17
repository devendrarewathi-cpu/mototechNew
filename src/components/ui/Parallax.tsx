"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Subtle scroll parallax. Place inside a `relative overflow-hidden` parent.
 * The layer is oversized (extra % on the moving axis) and its travel is clamped
 * so edges never show. Disabled for prefers-reduced-motion.
 */
export function Parallax({
  children,
  speed = 0.08,
  axis = "y",
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  axis?: "x" | "y";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let visible = false;

    const update = () => {
      raf = 0;
      const r = parent.getBoundingClientRect();
      const horizontal = axis === "x";
      const center = horizontal
        ? 0
        : r.top + r.height / 2 - window.innerHeight / 2;
      const progress = horizontal
        ? (r.top + r.height / 2 - window.innerHeight / 2)
        : center;
      const limit = (horizontal ? r.width : r.height) * 0.1;
      const t = Math.max(-limit, Math.min(limit, -progress * speed));
      el.style.transform = horizontal ? `translate3d(${t.toFixed(1)}px,0,0)` : `translate3d(0,${t.toFixed(1)}px,0)`;
    };
    const onScroll = () => {
      if (visible && !raf) raf = requestAnimationFrame(update);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) onScroll();
    });
    io.observe(parent);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, axis]);

  const oversize = axis === "x" ? "absolute inset-y-0 -left-[10%] w-[120%]" : "absolute inset-x-0 -top-[10%] h-[120%]";
  return (
    <div ref={ref} className={`${oversize} will-change-transform ${className}`}>
      {children}
    </div>
  );
}
