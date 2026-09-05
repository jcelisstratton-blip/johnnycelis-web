'use client';

import { useEffect, useRef } from 'react';

export default function RedesBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      if (query.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  return (
    <div aria-hidden="true" className="redes-bg">
      <video
        ref={videoRef}
        className="redes-bg__video"
        autoPlay
        muted
        loop
        playsInline
        poster="/brand/stratton-og-image.png"
      >
        <source src="/bg-stratt.mp4" type="video/mp4" />
      </video>
      <div className="redes-bg__grid" />
      <div className="redes-bg__overlay" />
      <span className="redes-bg__glow" />
    </div>
  );
}
