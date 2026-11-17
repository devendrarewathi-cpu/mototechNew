"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type Cb = (el: Element) => void;
const callbacks = new WeakMap<Element, Cb>();
let io: IntersectionObserver | null = null;

function observe(el: Element, cb: Cb) {
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          callbacks.get(e.target)?.(e.target);
          callbacks.delete(e.target);
          io?.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
  }
  callbacks.set(el, cb);
  io.observe(el);
  return () => {
    callbacks.delete(el);
    io?.unobserve(el);
  };
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observe(el, (t) => t.setAttribute("data-in", "true"));
  }, []);
  return ref;
}

type RevealProps = {
  as?: ElementType;
  dir?: "up" | "left" | "right" | "none";
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/** Fades/slides content in once it enters the viewport. */
export function Reveal({ as: Tag = "div", dir = "up", delay = 0, className = "", style, children }: RevealProps) {
  const ref = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      data-dir={dir}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

/** Masked line-by-line headline reveal. Each entry in `lines` is one visual line. */
export function RevealLines({
  as: Tag = "h2",
  lines,
  className = "",
  delay = 0,
}: {
  as?: ElementType;
  lines: ReactNode[];
  className?: string;
  delay?: number;
}) {
  const ref = useInView<HTMLElement>();
  return (
    <Tag ref={ref} className={className}>
      {lines.map((l, i) => (
        <span key={i}>
          <span className="line-mask">
            <span className="line-inner" style={{ transitionDelay: `${delay + i * 110}ms` }}>
              {l}
            </span>
          </span>{" "}
        </span>
      ))}
    </Tag>
  );
}

/** Wrapper that wipes its child image in on scroll. The observed element is unclipped. */
export function ImageWipe({ className = "", children, delay = 0 }: { className?: string; children: ReactNode; delay?: number }) {
  const ref = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={className}>
      <div className="wipe absolute inset-0" style={{ transitionDelay: `${delay}ms` }}>
        <div className="wipe-inner absolute inset-0" style={{ transitionDelay: `${delay}ms` }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/** Draws a thin line (x or y) when scrolled into view. */
export function DrawLine({ axis = "x", className = "" }: { axis?: "x" | "y"; className?: string }) {
  const ref = useInView<HTMLDivElement>();
  return <div ref={ref} aria-hidden className={`${axis === "x" ? "draw-x" : "draw-y"} ${className}`} />;
}
