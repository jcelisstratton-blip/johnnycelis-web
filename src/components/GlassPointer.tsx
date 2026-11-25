"use client";
import { useEffect } from 'react';

// Escribe --mx / --my en la superficie de vidrio bajo el cursor
// para que el reflejo especular siga el puntero.
export default function GlassPointer() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        '.st-cells > *, .st-frame, .st-glass-surface'
      );
      if (!target) return;
      const r = target.getBoundingClientRect();
      target.style.setProperty('--mx', `${e.clientX - r.left}px`);
      target.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return null;
}
