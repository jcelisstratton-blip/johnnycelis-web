"use client";
import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: string;
  duration?: number;
}

export default function Counter({ end, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);
  
  // Extraer número y sufijo/prefijo
  const numericEnd = parseInt(end.replace(/[^0-9]/g, '')) || 0;
  const suffix = end.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.5 });
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * numericEnd));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, numericEnd, duration]);

  return (
    <span ref={countRef}>
      {suffix.startsWith('-') ? '-' : ''}
      {count}
      {suffix.replace('-', '')}
    </span>
  );
}
