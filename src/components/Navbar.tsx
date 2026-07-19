"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
          className="font-black italic text-2xl tracking-wider text-white no-underline relative z-101"
        >
          STRATT-ON
        </Link>
        
        <div className="hidden md:flex gap-[30px] items-center">
          <Link 
            href="/#soluciones" 
            className="text-white no-underline text-[11px] font-bold tracking-widest uppercase hover:text-accent transition-colors"
          >
            Soluciones
          </Link>
          <Link 
            href="/servicios" 
            className="text-white no-underline text-[11px] font-bold tracking-widest uppercase hover:text-accent transition-colors"
          >
            Servicios
          </Link>
          <Link 
            href="/insights" 
            className="text-white no-underline text-[11px] font-bold tracking-widest uppercase hover:text-accent transition-colors"
          >
            Insights
          </Link>
          <a 
            href={siteConfig.calendarUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-accent text-black font-black text-[11px] uppercase tracking-widest px-6 py-3 rounded-[4px] hover:shadow-[0_0_40px_var(--accent)] hover:-translate-y-0.5 hover:bg-white hover:text-black transition-all duration-400 flex items-center justify-center gap-2"
          >
            AUDITORÍA IA
          </a>
        </div>

        <button 
          className="md:hidden bg-transparent border-none text-white text-3xl cursor-pointer z-101 relative focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? '✕' : '☰'}
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
          className="text-white no-underline text-2xl font-black uppercase tracking-widest hover:text-accent transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Soluciones
        </Link>
        <Link 
          href="/servicios" 
          className="text-white no-underline text-2xl font-black uppercase tracking-widest hover:text-accent transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Servicios
        </Link>
        <Link 
          href="/insights" 
          className="text-white no-underline text-2xl font-black uppercase tracking-widest hover:text-accent transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Insights
        </Link>
        <a 
          href={siteConfig.calendarUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-accent text-black font-black uppercase tracking-widest px-8 py-4 rounded-[4px] hover:shadow-[0_0_40px_var(--accent)] hover:bg-white hover:text-black transition-all duration-400 mt-5"
          onClick={() => setMenuOpen(false)}
        >
          Auditoría IA
        </a>
      </div>
    </>
  );
}
