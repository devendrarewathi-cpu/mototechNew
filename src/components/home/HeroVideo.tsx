"use client";

import { useEffect, useRef } from "react";

// 1 = normal speed, 0.5 = half speed (slow), 2 = double speed (fast)
const PLAYBACK_SPEED = 0.40;

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = PLAYBACK_SPEED;
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-ink">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/bike-video%20(2).mp4"
        poster="/images/lever-dark-hero.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = PLAYBACK_SPEED;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/10 to-transparent" />
    </div>
  );
}
