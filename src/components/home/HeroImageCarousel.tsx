"use client";

import { useState } from "react";
import { Media } from "@/components/ui/Primitives";
import { Parallax } from "@/components/ui/Parallax";
import { images } from "@/content/site";

const slides = [
  { ...images.heroLever, position: "object-[60%_center]" },
  { ...images.bikeBlue, position: "object-[center_36%]" },
];

export function HeroImageCarousel() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <div className="absolute inset-0 -z-10">
        <Parallax speed={0.18}>
          <div className="hero-zoom absolute inset-0">
            {slides.map((image, index) => {
              const isActive = index === activeImage;

              return (
                <Media
                  key={image.src}
                  src={image.src}
                  alt={isActive ? image.alt : ""}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  aria-hidden={!isActive}
                  className={`object-cover ${image.position} transition-opacity duration-700 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              );
            })}
          </div>
        </Parallax>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/10 to-transparent" />
      </div>

      <div
        aria-label="Hero images"
        className="absolute bottom-6 right-[var(--gutter)] z-20 flex items-center gap-2"
        role="group"
      >
        {slides.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Show image ${index + 1}: ${image.alt}`}
            aria-pressed={index === activeImage}
            onClick={() => setActiveImage(index)}
            className={`grid size-10 place-items-center border border-white/40 font-mono text-[10px] transition-colors ${
              index === activeImage
                ? "bg-bone text-ink"
                : "bg-black/40 text-bone hover:border-bone"
            }`}
          >
            0{index + 1}
          </button>
        ))}
      </div>
    </>
  );
}
