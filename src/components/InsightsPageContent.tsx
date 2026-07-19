"use client";
import React, { useState } from 'react';
import { siteConfig } from '../config/site';

interface Post {
  tag: string;
  title: string;
  desc: string;
  content: string;
}

export default function InsightsPageContent() {
  const [activePost, setActivePost] = useState<Post | null>(null);

  return (
    <>
      {/* HEADER DE LA PÁGINA BLOG */}
      <header className="relative bg-gradient-to-b from-grafito to-carbon pt-44 pb-20 text-center px-[5%] overflow-hidden">
        {/* Glow de fondo */}
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-radial-gradient from-accent/15 to-transparent/0 -z-1" />

        <div className="relative z-1 max-w-[1000px] mx-auto">
          <span className="st-status-line mb-8" />
          <h1 className="text-4xl md:text-7xl uppercase leading-none mb-6 text-white">
            Insights <span className="text-accent">Operativos</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-[800px] mx-auto font-medium">
            Conocimiento avanzado sobre automatización B2B, ecosistemas autónomos y orquestación operativa. Descubre cómo las empresas top están eliminando el trabajo manual.
          </p>
        </div>
      </header>

      {/* GRID DE ARTÍCULOS */}
      <section className="max-w-[1400px] mx-auto px-[5%] pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.blogPosts.map((post, i) => (
            <div
              key={i}
              className="bg-grafito border border-white/5 rounded p-6 md:p-8 transition-all duration-400 cursor-pointer h-full flex flex-col justify-between hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,59,47,0.15)] max-md:border-accent max-md:shadow-[0_0_25px_rgba(255,59,47,0.15)]"
              onClick={() => setActivePost(post)}
            >
              <div>
                <span className="st-label text-[11px] font-bold text-accent">{post.tag}</span>
                <h3 className="text-lg md:text-xl mt-3 mb-4 text-white leading-snug">{post.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">{post.desc}</p>
              </div>
              <div className="st-label flex items-center gap-2 text-white text-xs hover:text-accent hover:gap-4 transition-all duration-400 self-start mt-auto">
                Leer artículo <span className="text-accent">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL DE LECTURA */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-md z-1000 flex justify-center items-center p-5 transition-opacity duration-300 ${
          activePost ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setActivePost(null)}
      >
        <div
          className={`bg-grafito border border-accent/30 rounded w-full max-w-[800px] max-h-[90vh] overflow-y-auto relative p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-transform duration-400 ${
            activePost ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-5 right-5 bg-transparent border-none text-white cursor-pointer transition-colors hover:bg-white/10 w-10 h-10 flex justify-center items-center rounded-full focus:outline-none"
            onClick={() => setActivePost(null)}
            aria-label="Cerrar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
          {activePost && (
            <>
              <span className="st-label text-xs font-bold text-accent">{activePost.tag}</span>
              <h2 className="text-2xl md:text-4xl my-5 text-white leading-tight">{activePost.title}</h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">{activePost.desc}</p>
              <div className="border-t border-white/10 pt-8 text-white/90 text-sm md:text-base leading-loose text-justify whitespace-pre-line">
                {activePost.content}
              </div>
              <div className="mt-12 flex justify-center">
                <a
                  href={siteConfig.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="st-label bg-accent text-carbon text-xs md:text-sm px-8 py-4 rounded-st hover:bg-white hover:text-carbon transition-all duration-400 w-full sm:w-auto text-center"
                >
                  Analizar mi caso operativo
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
