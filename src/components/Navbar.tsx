"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '../config/site';

const links = [
  { href: '/#soluciones', label: 'Soluciones', n: '01' },
  { href: '/servicios', label: 'Servicios', n: '02' },
  { href: '/insights', label: 'Insights', n: '03' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-100 px-[5%] h-[68px] flex justify-between items-center transition-colors duration-200 border-b ${
          scrolled || menuOpen
            ? 'bg-carbon/45 backdrop-blur-2xl backdrop-saturate-150 border-white/10 shadow-[inset_0_-1px_0_rgba(245,246,244,0.06)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <Link href="/" className="relative z-101 flex items-center" aria-label="Stratt-On — inicio">
          <Image
            src="/brand/stratton-logo-principal-fondo-oscuro.svg"
            alt="Stratt-On"
            width={161}
            height={25}
            className="h-6 md:h-7 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex gap-9 items-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="st-eyebrow text-blanco no-underline hover:text-accent transition-colors"
            >
              <b>{l.n}</b> {l.label}
            </Link>
          ))}
          <a
            href={siteConfig.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="st-btn st-btn-primary !py-[10px] !px-[18px] !text-[12px]"
          >
            Auditoría IA
          </a>
        </div>

        <button
          className="md:hidden bg-transparent border-none text-white cursor-pointer z-101 relative focus:outline-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-carbon z-99 flex flex-col justify-center px-[8%] gap-2 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="flex items-baseline gap-4 py-5 border-b border-white/10 text-white no-underline hover:text-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <span className="st-eyebrow"><b>{l.n}</b></span>
            <span className="font-display text-3xl uppercase tracking-[-0.02em]">{l.label}</span>
          </Link>
        ))}
        <a
          href={siteConfig.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="st-btn st-btn-primary mt-8"
          onClick={() => setMenuOpen(false)}
        >
          Auditoría IA <span aria-hidden="true">→</span>
        </a>
      </div>
    </>
  );
}
