"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '../config/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-100 px-[5%] py-5 flex justify-between items-center transition-all duration-400 ${
          scrolled ? 'bg-black/85 backdrop-blur-md border-b border-accent/15' : 'bg-transparent'
        }`}
      >
        <Link
          href="/"
          className="relative z-101 flex items-center"
        >
          <Image
            src="/brand/stratton-logo-principal-fondo-oscuro.svg"
            alt="Stratt-On"
            width={161}
            height={25}
            className="h-6 md:h-7 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex gap-[30px] items-center">
          <Link
            href="/#soluciones"
            className="st-label text-white no-underline text-[11px] font-bold hover:text-accent transition-colors"
          >
            Soluciones
          </Link>
          <Link
            href="/servicios"
            className="st-label text-white no-underline text-[11px] font-bold hover:text-accent transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="/insights"
            className="st-label text-white no-underline text-[11px] font-bold hover:text-accent transition-colors"
          >
            Insights
          </Link>
          <a
            href={siteConfig.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="st-label bg-accent text-carbon font-black text-[11px] px-6 py-3 rounded-st hover:-translate-y-0.5 hover:bg-white hover:text-carbon transition-all duration-400 flex items-center justify-center gap-2"
          >
            AUDITORÍA IA
          </a>
        </div>

        <button
          className="md:hidden bg-transparent border-none text-white cursor-pointer z-101 relative focus:outline-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
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

      {/* Menú Móvil */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-black/98 backdrop-blur-md z-99 flex flex-col justify-center items-center gap-10 transition-transform duration-400 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Link
          href="/#soluciones"
          className="font-display text-white no-underline text-2xl uppercase tracking-[-0.02em] hover:text-accent transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Soluciones
        </Link>
        <Link
          href="/servicios"
          className="font-display text-white no-underline text-2xl uppercase tracking-[-0.02em] hover:text-accent transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Servicios
        </Link>
        <Link
          href="/insights"
          className="font-display text-white no-underline text-2xl uppercase tracking-[-0.02em] hover:text-accent transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Insights
        </Link>
        <a
          href={siteConfig.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="st-label bg-accent text-carbon px-8 py-4 rounded-st font-black hover:bg-white hover:text-carbon transition-all duration-400 mt-5"
          onClick={() => setMenuOpen(false)}
        >
          Auditoría IA
        </a>
      </div>
    </>
  );
}
